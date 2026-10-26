import {HOMEOMORPHISM_MODEL as model,deformationState,autoMorphProgress,clockForProgress,clamp01,smooth01} from './homeomorphism-core.js';

const canvas=document.querySelector('#kinetic-sculpture'),trigger=document.querySelector('#sculpture-trigger'),cover=canvas?.closest('.cover-panel');
const slider=document.querySelector('#morph-progress'),toggle=document.querySelector('#morph-toggle');
if(canvas&&trigger&&cover){
 const reduced=matchMedia('(prefers-reduced-motion:reduce)'),compact=matchMedia('(max-width:800px)');
 let gl;
 try{gl=canvas.getContext('webgl',{alpha:true,antialias:false,powerPreference:'low-power'});}catch{/* Static preview stays usable. */}
 function fallback(){
  canvas.dataset.ready='true';canvas.dataset.renderer='static';slider.disabled=true;toggle.disabled=true;trigger.disabled=true;
  trigger.classList.remove('is-rendered');document.querySelectorAll('[data-morph-target]').forEach(button=>{button.disabled=true;});
  document.querySelector('#morph-hint').textContent='静态预览 · 浏览器未启用 3D';
 }
 if(!gl)fallback();
 else{
  const f=n=>Number(n).toFixed(8);
  const vertex='attribute vec2 position;void main(){gl_Position=vec4(position,0.,1.);}';
  const fragment=`precision highp float;
uniform vec2 resolution;
uniform vec2 shape;
uniform mat3 rotation;
float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}
float field(vec3 p){
 vec2 d=vec2(length(p.xz)-${f(model.bodyRadius)},abs(p.y)-${f(model.bodyHalfHeight)});
 float body=length(max(d,0.))+min(max(d.x,d.y),0.)-${f(model.rounding)};
 float handle=max(length(vec2(length(p.xy-vec2(${f(model.handleX)},0.))-${f(model.handleRadius)},p.z))-${f(model.handleTube)},${f(model.handleCut)}-p.x);
 float mug=smin(body,handle,${f(model.jointSmooth)});
 float ring=length(vec2(length(p.xy-vec2(${f(model.torusX)},0.))-${f(model.torusRadius)},p.z))-${f(model.torusTube)};
 float solid=mix(ring,mug,shape.x);
 float cavity=max(length(p.xz)-${f(model.innerRadius)},shape.y-p.y);
 return max(solid,-cavity);
}
vec3 normalAt(vec3 p){vec2 e=vec2(.003,0.);return normalize(vec3(field(p+e.xyy)-field(p-e.xyy),field(p+e.yxy)-field(p-e.yxy),field(p+e.yyx)-field(p-e.yyx)));}
vec4 render(vec2 pixel){
 vec2 uv=(2.*pixel-resolution)/min(resolution.x,resolution.y);
 vec3 centre=vec3(.55,0.,0.);
 vec3 ro=rotation*vec3(0.,0.,6.8)+centre;
 vec3 rd=rotation*normalize(vec3(uv*1.8,-5.3));
 vec3 oc=ro-centre;float b=dot(oc,rd),disc=b*b-dot(oc,oc)+5.5225;
 if(disc<0.)return vec4(0.);
 float t=max(0.,-b-sqrt(disc)),end=-b+sqrt(disc),hit=0.;
 for(int i=0;i<96;i++){
  float d=field(ro+rd*t);if(d<.002){hit=1.;break;}t+=max(d*.85,.001);if(t>end)break;
 }
 if(hit<.5)return vec4(0.);
 vec3 p=ro+rd*t,n=normalAt(p),view=-rd,light=normalize(vec3(-2.4,4.2,5.5)-p);
 float ao=0.;
 ao+=max(0.,.08-field(p+n*.08))*2.3;
 ao+=max(0.,.20-field(p+n*.20))*1.1;
 ao+=max(0.,.40-field(p+n*.40))*.55;
 ao=clamp(1.-ao,.36,1.);
 float diffuse=max(0.,dot(n,light)),fill=max(0.,dot(n,normalize(vec3(2.,.5,-2.))));
 float shine=pow(max(0.,dot(n,normalize(light+view))),56.);
 float rim=pow(1.-max(0.,dot(n,view)),3.);
 vec3 ceramic=vec3(.82,.88,.77);
 vec3 colour=ceramic*(.28+.68*diffuse+.12*fill)*ao+vec3(1.,.99,.88)*shine*.47+rim*.06;
 return vec4(clamp(colour,0.,1.),1.);
}
void main(){gl_FragColor=.5*(render(gl_FragCoord.xy-vec2(.25))+render(gl_FragCoord.xy+vec2(.25)));}`;
  function compile(type,source){const shader=gl.createShader(type);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))throw Error(gl.getShaderInfoLog(shader));return shader;}
  let program;
  try{
   program=gl.createProgram();gl.attachShader(program,compile(gl.VERTEX_SHADER,vertex));gl.attachShader(program,compile(gl.FRAGMENT_SHADER,fragment));gl.linkProgram(program);if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error('Homeomorphism renderer could not link');
  }catch(error){canvas.__rendererError=String(error);fallback();program=null;}
  if(program){
   gl.useProgram(program);const quad=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,quad);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
   const position=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
   const uniforms={resolution:gl.getUniformLocation(program,'resolution'),shape:gl.getUniformLocation(program,'shape'),rotation:gl.getUniformLocation(program,'rotation')};
   let frame=0,last=0,clock=0,progress=0,localPaused=false,visible=true,selected=cover.classList.contains('is-current'),drag=null,tween=null,suppressClick=false,lost=false,covered=Boolean(document.querySelector('dialog[open]'));
   let rx=-.45,ry=.20,globalPaused=reduced.matches||document.body.classList.contains('motion-paused');
   const matrix=new Float32Array(9);let lastDraw;
   function rotation(){const sx=Math.sin(rx),cx=Math.cos(rx),sy=Math.sin(ry),cy=Math.cos(ry);matrix.set([cy,0,-sy,sy*sx,cx,cy*sx,sy*cx,-sx,cy*cx]);return matrix;}
   function controls(){
    const paused=globalPaused||localPaused;
    canvas.dataset.automatic=String(!paused);
    toggle.disabled=globalPaused;const text=localPaused?'▶ 自动播放':'Ⅱ 暂停变形';if(toggle.textContent!==text)toggle.textContent=text;toggle.setAttribute('aria-pressed',String(paused));
    document.querySelectorAll('[data-morph-target]').forEach(button=>{const selected=String(Number(button.dataset.morphTarget)===Math.round(progress)&&[0,1].includes(progress));if(button.getAttribute('aria-pressed')!==selected)button.setAttribute('aria-pressed',selected);});
   }
   function paint(force=false){
    if(lost)return;if(!force&&lastDraw&&lastDraw[0]===progress&&lastDraw[1]===rx&&lastDraw[2]===ry)return;lastDraw=[progress,rx,ry];
    const state=deformationState(progress);gl.uniform2f(uniforms.shape,state.blend,state.cavityFloor);gl.uniformMatrix3fv(uniforms.rotation,false,rotation());gl.drawArrays(gl.TRIANGLES,0,6);
    canvas.__renderCount=(canvas.__renderCount||0)+1;canvas.dataset.progress=progress.toFixed(4);canvas.dataset.automatic=String(!globalPaused&&!localPaused);
    slider.value=String(Math.round(progress*1000));slider.setAttribute('aria-valuetext',state.phase==='torus'?'甜甜圈':state.phase==='mug'?'咖啡杯':'连续变形中');
    if(canvas.dataset.form!==state.phase){canvas.dataset.form=state.phase;const statement=document.querySelector('#homeomorphism-statement');statement.textContent=state.phase==='torus'?'甜甜圈，中央是一个通孔。':state.phase==='mug'?'杯腔有底，通孔在杯把。':'拉伸外形，通孔仍在。';trigger.setAttribute('aria-label','同胚形变。'+statement.textContent+'拖动旋转视角，点击切换形状。');}
    controls();
   }
   function schedule(){if(!frame&&visible&&selected&&!document.hidden&&!lost&&!covered)frame=requestAnimationFrame(tick);}
   function tick(now){
    frame=0;if(!visible||!selected||document.hidden||lost||covered)return;const dt=Math.min(70,now-(last||now));if(last&&dt<40){schedule();return;}last=now;
    if(tween){const t=clamp01((now-tween.start)/2400);progress=tween.from+(tween.to-tween.from)*smooth01(t);if(t===1)tween=null;}
    else if(!globalPaused&&!localPaused&&!drag){clock=(clock+dt/17000)%1;progress=autoMorphProgress(clock);}
    paint();if(tween||(!globalPaused&&!localPaused&&!drag))schedule();
   }
   function resize(){
    if(lost)return;const r=trigger.getBoundingClientRect(),ratio=Math.min(devicePixelRatio||1,(compact.matches?540:820)/Math.max(r.width,r.height));
    const w=Math.max(1,Math.round(r.width*ratio)),h=Math.max(1,Math.round(r.height*ratio));if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;gl.viewport(0,0,w,h);gl.uniform2f(uniforms.resolution,w,h);paint(true);}else paint();schedule();
   }
   function setProgress(p){localPaused=true;tween=null;progress=clamp01(p);controls();paint();}
   function target(value){localPaused=true;if(globalPaused){progress=value;tween=null;paint();}else{tween={from:progress,to:value,start:performance.now()};schedule();}controls();}
   slider.disabled=false;slider.addEventListener('input',()=>setProgress(Number(slider.value)/1000));
   toggle.addEventListener('click',()=>{localPaused=!localPaused;tween=null;if(!localPaused)clock=clockForProgress(progress);controls();last=0;schedule();});
   document.querySelectorAll('[data-morph-target]').forEach(button=>{button.disabled=false;button.addEventListener('click',()=>target(Number(button.dataset.morphTarget)));});
   trigger.disabled=false;
   trigger.addEventListener('click',()=>{if(suppressClick){suppressClick=false;return;}target(progress>.5?0:1);});
   trigger.addEventListener('pointerdown',event=>{if(event.pointerType!=='mouse'||event.button!==0)return;drag={x:event.clientX,y:event.clientY,rx,ry,moved:false};trigger.setPointerCapture(event.pointerId);});
   trigger.addEventListener('pointermove',event=>{if(!drag)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>5)drag.moved=true;if(drag.moved){rx=Math.max(-1.2,Math.min(1.2,drag.rx+dy*.007));ry=drag.ry+dx*.007;paint();}});
   function release(event){if(!drag)return;suppressClick=drag.moved;drag=null;if(event.pointerId!==undefined&&trigger.hasPointerCapture(event.pointerId))trigger.releasePointerCapture(event.pointerId);last=0;schedule();}
   trigger.addEventListener('pointerup',release);trigger.addEventListener('pointercancel',release);trigger.addEventListener('lostpointercapture',release);window.addEventListener('blur',release);
   document.addEventListener('motion:change',()=>{globalPaused=reduced.matches||document.body.classList.contains('motion-paused');if(globalPaused)tween=null;last=0;controls();schedule();});
   document.addEventListener('visibilitychange',()=>{if(!document.hidden){last=0;schedule();}});
   document.addEventListener('gallery:change',()=>{selected=cover.classList.contains('is-current');if(!selected){cancelAnimationFrame(frame);frame=0;}else{last=0;schedule();}});
   new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible){last=0;schedule();}}).observe(trigger);
   new ResizeObserver(resize).observe(trigger);window.addEventListener('pagehide',()=>{cancelAnimationFrame(frame);frame=0;});
   const modalObserver=new MutationObserver(()=>{covered=Boolean(document.querySelector('dialog[open]'));if(covered){cancelAnimationFrame(frame);frame=0;}else{last=0;schedule();}});document.querySelectorAll('dialog').forEach(dialog=>modalObserver.observe(dialog,{attributes:true,attributeFilter:['open']}));
   canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();lost=true;cancelAnimationFrame(frame);frame=0;fallback();});
   canvas.__homeomorphism={setProgress,getProgress:()=>progress};
   canvas.dataset.ready='true';canvas.dataset.renderer='webgl';trigger.classList.add('is-rendered');document.querySelector('#morph-hint').textContent='拖动转动 · 点击变形 ↗';resize();
  }
 }
}
