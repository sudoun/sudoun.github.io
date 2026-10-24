import { buildSculptureGeometry, SCULPTURE_FORMS } from "./sculpture-geometry.js";

let canvas = document.querySelector("#kinetic-sculpture");
if (canvas) {
  let gl = canvas.getContext("webgl", { alpha: true, antialias: true, preserveDrawingBuffer: true });
  let context = gl ? null : canvas.getContext("2d", { alpha: true });
  const trigger = document.querySelector("#sculpture-trigger");
  const label = document.querySelector("#sculpture-name");
  const pause = document.querySelector("#motion-toggle");
  const cover = canvas.closest(".cover-panel");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)");
  const compact = matchMedia("(max-width: 800px)");
  if ((context || gl) && trigger) {
    const geometries = SCULPTURE_FORMS.map((form) => buildSculptureGeometry(form, compact.matches ? 76 : 108, compact.matches ? 24 : 32));
    const current = new Float32Array(geometries[0].positions);
    const normals = new Float32Array(geometries[0].normals);
    const from = new Float32Array(current);
    const fromNormals = new Float32Array(normals);
    const projected = new Float32Array(current.length);
    const rotated = new Float32Array(current.length);
    const faces = geometries[0].faces;
    const visibleFaces = [];
    const names = ["01 / CHROME KNOT", "02 / ORBIT STUDY", "03 / CURIOUS BLOOM"];
    const environmentBands = [[0, 34, 43, 52], [.19, 119, 132, 143], [.34, 239, 241, 234], [.43, 37, 43, 48], [.51, 16, 23, 31], [.62, 147, 160, 172], [.76, 237, 239, 232], [1, 255, 255, 249]];
    let gpu;
    if (gl) {
      const vertexSource = `
        attribute vec3 position;
        attribute vec3 normal;
        uniform mat3 rotation;
        uniform vec2 resolution;
        varying vec3 worldNormal;
        varying vec3 worldPosition;
        void main() {
          vec3 p = rotation * position;
          worldPosition = p;
          worldNormal = rotation * normal;
          float scale = min(resolution.x, resolution.y) * .142;
          vec2 screen = p.xy * scale * 7.0 / (7.0 - p.z);
          gl_Position = vec4(screen / (resolution * .5) + vec2(0., .08), -p.z * .1, 1.);
        }`;
      const fragmentSource = `
        precision highp float;
        varying vec3 worldNormal;
        varying vec3 worldPosition;
        vec3 environment(float t) {
          vec3 a = vec3(34.,43.,52.)/255.;
          a = mix(a,vec3(119.,132.,143.)/255.,smoothstep(0.,.19,t));
          a = mix(a,vec3(239.,241.,234.)/255.,smoothstep(.19,.34,t));
          a = mix(a,vec3(37.,43.,48.)/255.,smoothstep(.34,.43,t));
          a = mix(a,vec3(16.,23.,31.)/255.,smoothstep(.43,.51,t));
          a = mix(a,vec3(147.,160.,172.)/255.,smoothstep(.51,.62,t));
          a = mix(a,vec3(237.,239.,232.)/255.,smoothstep(.62,.76,t));
          return mix(a,vec3(1.,1.,.975),smoothstep(.76,1.,t));
        }
        void main() {
          vec3 n = normalize(worldNormal);
          vec3 view = normalize(vec3(0.,0.,7.)-worldPosition);
          vec3 reflected = reflect(-view,n);
          vec3 color = environment(reflected.y*.5+.5);
          float tint = max(0.,reflected.x-.38)*.42;
          color += vec3(.31,.36,-.67)*tint;
          vec3 halfLight = normalize(normalize(vec3(-.5,.8,.7))+view);
          color += pow(max(0.,dot(n,halfLight)),90.)*.75;
          gl_FragColor = vec4(clamp(color,0.,1.),1.);
        }`;
      function shader(type, source) {
        const result = gl.createShader(type);
        gl.shaderSource(result, source); gl.compileShader(result);
        if (!gl.getShaderParameter(result, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(result));
        return result;
      }
      try {
        const program = gl.createProgram();
        gl.attachShader(program, shader(gl.VERTEX_SHADER, vertexSource));
        gl.attachShader(program, shader(gl.FRAGMENT_SHADER, fragmentSource));
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) throw new Error("Sculpture shader could not link");
        gl.useProgram(program);
        const position = gl.createBuffer(), normal = gl.createBuffer(), indices = gl.createBuffer();
        for (const [name, buffer, data] of [["position", position, current], ["normal", normal, normals]]) {
          gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
          gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW);
          const location = gl.getAttribLocation(program, name);
          gl.enableVertexAttribArray(location);
          gl.vertexAttribPointer(location, 3, gl.FLOAT, false, 0, 0);
        }
        const triangles = new Uint16Array(faces.flatMap(({ a, b, c, d }) => [a,b,c,a,c,d]));
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indices);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, triangles, gl.STATIC_DRAW);
        gl.enable(gl.DEPTH_TEST);
        gl.clearColor(0,0,0,0);
        gpu = { position, normal, count: triangles.length, resolution: gl.getUniformLocation(program,"resolution"), rotation: gl.getUniformLocation(program,"rotation"), matrix: new Float32Array(9) };
        canvas.dataset.renderer = "webgl";
        trigger.classList.add("is-webgl");
      } catch {
        gl = null;
        const fallback = canvas.cloneNode(false);
        canvas.replaceWith(fallback);
        canvas = fallback;
        context = canvas.getContext("2d", { alpha: true });
        canvas.dataset.renderer = "canvas";
      }
    } else canvas.dataset.renderer = "canvas";
    let form = 0, morphStart = 0, morphing = false;
    let width = 0, height = 0, frame = 0, lastTime = 0;
    let visible = true, paused = reduced.matches;
    let rotation = .2, manualX = -.25, manualY = -.4;
    let targetX = 0, targetY = 0, pointerX = 0, pointerY = 0;
    let drag = null, suppressClick = false;

    function schedule() {
      if (!frame && visible && !document.hidden) frame = requestAnimationFrame(tick);
    }
    function resize() {
      const rect = trigger.getBoundingClientRect();
      width = Math.max(1, rect.width);
      height = Math.max(1, rect.height);
      const ratio = Math.min(devicePixelRatio || 1, compact.matches ? 1.25 : 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      if (gl) gl.viewport(0, 0, canvas.width, canvas.height);
      else if (context) context.setTransform(ratio, 0, 0, ratio, 0, 0);
      schedule();
    }
    function metal(nx, ny, nz) {
      const length = Math.hypot(nx, ny, nz) || 1;
      nx /= length; ny /= length; nz /= length;
      const reflectionY = 2 * ny * nz;
      const reflectionX = 2 * nx * nz;
      const band = (reflectionY + 1) * .5;
      const stops = environmentBands;
      let left = stops[0], right = stops[1];
      for (let i = 1; i < stops.length; i++) {
        right = stops[i];
        if (band <= right[0]) break;
        left = right;
      }
      const mix = Math.min(1, Math.max(0, (band - left[0]) / (right[0] - left[0] || 1)));
      const light = Math.max(0, nx * -.48 + ny * -.56 + nz * .67);
      const specular = Math.pow(light, 52) * 165;
      const yellow = Math.max(0, reflectionX - .38) * .42;
      const r = Math.min(255, left[1] + (right[1] - left[1]) * mix + specular + yellow * 80);
      const g = Math.min(255, left[2] + (right[2] - left[2]) * mix + specular + yellow * 92);
      const b = Math.min(255, Math.max(0, left[3] + (right[3] - left[3]) * mix + specular - yellow * 170));
      return `rgb(${r | 0},${g | 0},${b | 0})`;
    }
    function paint() {
      if (gl && gpu) {
        const rx = manualX + pointerY, ry = manualY + rotation + pointerX, rz = -.22;
        const sx = Math.sin(rx), cx = Math.cos(rx), sy = Math.sin(ry), cy = Math.cos(ry), sz = Math.sin(rz), cz = Math.cos(rz);
        gpu.matrix.set([cy*cz-sy*sx*sz,cy*sz+sy*sx*cz,-sy*cx,-cx*sz,cx*cz,sx,sy*cz+cy*sx*sz,sy*sz-cy*sx*cz,cy*cx]);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.uniform2f(gpu.resolution,width,height);
        gl.uniformMatrix3fv(gpu.rotation,false,gpu.matrix);
        gl.bindBuffer(gl.ARRAY_BUFFER,gpu.position); gl.bufferSubData(gl.ARRAY_BUFFER,0,current);
        gl.bindBuffer(gl.ARRAY_BUFFER,gpu.normal); gl.bufferSubData(gl.ARRAY_BUFFER,0,normals);
        gl.drawElements(gl.TRIANGLES,gpu.count,gl.UNSIGNED_SHORT,0);
        canvas.__renderCount = (canvas.__renderCount || 0) + 1;
        canvas.dataset.ready = "true";
        trigger.classList.add("is-rendered");
        return;
      }
      if (!context) return;
      context.clearRect(0, 0, width, height);
      const shadow = context.createRadialGradient(width * .5, height * .86, 1, width * .5, height * .86, width * .30);
      shadow.addColorStop(0, "#20252928");
      shadow.addColorStop(1, "#20252900");
      context.save();
      context.translate(0, height * .69);
      context.scale(1, .2);
      context.fillStyle = shadow;
      context.fillRect(0, 0, width, height);
      context.restore();
      const rx = manualX + pointerY;
      const ry = manualY + rotation + pointerX;
      const rz = -.22;
      const sx = Math.sin(rx), cx = Math.cos(rx), sy = Math.sin(ry), cy = Math.cos(ry), sz = Math.sin(rz), cz = Math.cos(rz);
      const scale = Math.min(width, height) * .142;
      for (let i = 0; i < current.length; i += 3) {
        for (let type = 0; type < 2; type++) {
          const source = type ? normals : current;
          const x = source[i], y = source[i + 1], z = source[i + 2];
          const x1 = x * cy + z * sy, z1 = z * cy - x * sy;
          const y1 = y * cx - z1 * sx, z2 = y * sx + z1 * cx;
          const x2 = x1 * cz - y1 * sz, y2 = x1 * sz + y1 * cz;
          if (type) { rotated[i] = x2; rotated[i + 1] = y2; rotated[i + 2] = z2; }
          else {
            const perspective = 7 / (7 - z2);
            projected[i] = width * .5 + x2 * scale * perspective;
            projected[i + 1] = height * .46 - y2 * scale * perspective;
            projected[i + 2] = z2;
          }
        }
      }
      visibleFaces.length = 0;
      for (const face of faces) {
        const a = face.a * 3, b = face.b * 3, c = face.c * 3, d = face.d * 3;
        face.nx = (rotated[a] + rotated[b] + rotated[c] + rotated[d]) * .25;
        face.ny = (rotated[a + 1] + rotated[b + 1] + rotated[c + 1] + rotated[d + 1]) * .25;
        face.nz = (rotated[a + 2] + rotated[b + 2] + rotated[c + 2] + rotated[d + 2]) * .25;
        if (face.nz < -.12) continue;
        face.depth = (projected[a + 2] + projected[b + 2] + projected[c + 2] + projected[d + 2]) * .25;
        visibleFaces.push(face);
      }
      visibleFaces.sort((a, b) => a.depth - b.depth);
      context.lineWidth = .6;
      context.lineJoin = "round";
      for (const face of visibleFaces) {
        const a = face.a * 3, b = face.b * 3, c = face.c * 3, d = face.d * 3;
        context.fillStyle = context.strokeStyle = metal(face.nx, face.ny, face.nz);
        context.beginPath();
        context.moveTo(projected[a], projected[a + 1]);
        context.lineTo(projected[b], projected[b + 1]);
        context.lineTo(projected[c], projected[c + 1]);
        context.lineTo(projected[d], projected[d + 1]);
        context.closePath();
        context.fill();
        context.stroke();
      }
      canvas.__renderCount = (canvas.__renderCount || 0) + 1;
      canvas.dataset.ready = "true";
      trigger.classList.add("is-rendered");
    }
    function tick(time) {
      frame = 0;
      if (!visible || document.hidden) return;
      const dt = Math.min(50, time - (lastTime || time));
      if (dt < 30 && lastTime) { schedule(); return; }
      lastTime = time;
      if (!paused && !reduced.matches && !drag) rotation += dt * .00012;
      pointerX += (targetX - pointerX) * .12;
      pointerY += (targetY - pointerY) * .12;
      if (morphing) {
        const progress = Math.min(1, (time - morphStart) / 850);
        const mix = progress * progress * (3 - 2 * progress);
        const target = geometries[form];
        for (let i = 0; i < current.length; i++) {
          current[i] = from[i] + (target.positions[i] - from[i]) * mix;
          normals[i] = fromNormals[i] + (target.normals[i] - fromNormals[i]) * mix;
        }
        morphing = progress < 1;
        if (!morphing) canvas.dataset.morphing = "false";
      }
      paint();
      if ((!paused && !reduced.matches) || morphing || Math.abs(targetX - pointerX) + Math.abs(targetY - pointerY) > .002) schedule();
    }
    trigger.addEventListener("click", () => {
      if (suppressClick) { suppressClick = false; return; }
      form = (form + 1) % geometries.length;
      from.set(current); fromNormals.set(normals);
      morphStart = performance.now();
      morphing = !paused && !reduced.matches;
      canvas.dataset.morphing = String(morphing);
      if (!morphing) { current.set(geometries[form].positions); normals.set(geometries[form].normals); }
      label.textContent = names[form];
      canvas.dataset.form = SCULPTURE_FORMS[form];
      trigger.setAttribute("aria-label", "当前形态：" + SCULPTURE_FORMS[form] + "。点击切换形态，拖动旋转。");
      schedule();
    });
    trigger.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      drag = { x: event.clientX, y: event.clientY, rx: manualX, ry: manualY, moved: false };
      trigger.setPointerCapture(event.pointerId);
    });
    trigger.addEventListener("pointermove", (event) => {
      if (!drag) return;
      const dx = event.clientX - drag.x, dy = event.clientY - drag.y;
      if (Math.abs(dx) + Math.abs(dy) > 5) drag.moved = true;
      if (!drag.moved) return;
      manualX = drag.rx + dy * .008;
      manualY = drag.ry + dx * .008;
      schedule();
    });
    function release(event) {
      if (!drag) return;
      suppressClick = drag.moved;
      drag = null;
      if (event.pointerId != null && trigger.hasPointerCapture(event.pointerId)) trigger.releasePointerCapture(event.pointerId);
    }
    trigger.addEventListener("pointerup", release);
    trigger.addEventListener("pointercancel", release);
    trigger.addEventListener("lostpointercapture", release);
    window.addEventListener("blur", release);
    cover.addEventListener("pointermove", (event) => {
      if (paused || reduced.matches || compact.matches || drag) return;
      const rect = cover.getBoundingClientRect();
      targetX = ((event.clientX - rect.left) / rect.width - .5) * .45;
      targetY = ((event.clientY - rect.top) / rect.height - .5) * .25;
      schedule();
    });
    cover.addEventListener("pointerleave", () => { if (!paused) { targetX = targetY = 0; schedule(); } });
    function updatePause() {
      if (reduced.matches) paused = true;
      if (paused) { targetX = pointerX; targetY = pointerY; }
      if (paused && morphing) {
        morphing = false;
        current.set(geometries[form].positions);
        normals.set(geometries[form].normals);
        canvas.dataset.morphing = "false";
      }
      document.body.classList.toggle("motion-paused", paused);
      pause.setAttribute("aria-pressed", String(paused));
      pause.disabled = reduced.matches;
      pause.textContent = reduced.matches ? "已减少动效" : paused ? "播放动效 ↗" : "暂停动效 Ⅱ";
      pause.setAttribute("aria-label", reduced.matches ? "系统已设置减少动效" : paused ? "播放动态效果" : "暂停动态效果");
      schedule();
    }
    pause.addEventListener("click", () => { paused = !paused; updatePause(); });
    reduced.addEventListener("change", () => { paused = reduced.matches; updatePause(); });
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; if (visible) { lastTime = 0; schedule(); } });
    observer.observe(trigger);
    new ResizeObserver(resize).observe(trigger);
    document.addEventListener("visibilitychange", () => { if (!document.hidden) { lastTime = 0; schedule(); } });
    window.addEventListener("pagehide", () => { cancelAnimationFrame(frame); frame = 0; });
    canvas.dataset.form = "knot";
    canvas.dataset.morphing = "false";
    updatePause();
    resize();
  }
}
