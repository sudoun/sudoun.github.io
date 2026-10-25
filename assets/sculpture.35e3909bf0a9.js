var $=["knot","orbit","bloom"],gt=Math.PI*2,at=([t,e,r])=>{let v=Math.hypot(t,e,r)||1;return[t/v,e/v,r/v]},dt=(t,e)=>[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]];function Mt(t){let e=1.72+0.47*Math.cos(3*t);return[e*Math.cos(2*t),e*Math.sin(2*t),0.72*Math.sin(3*t)]}function lt(t,e,r){let v=e*gt,F=r*gt;if(t==="bloom"){let a=r*Math.PI,h=2.08+0.16*Math.sin(3*v)*Math.sin(a)**3+0.14*Math.cos(4*a);return[h*Math.cos(v)*Math.sin(a),h*Math.cos(a),h*Math.sin(v)*Math.sin(a)]}if(t==="orbit"){let a=1.72+0.73*Math.cos(F);return[a*Math.cos(v),a*Math.sin(v),0.73*Math.sin(F)]}let E=Mt(v),x=Mt(v+0.0001),y=at(x.map((a,h)=>a-E[h])),L=at(dt(y,[0,0,1])),z=dt(L,y);return E.map((a,h)=>a+0.57*(L[h]*Math.cos(F)+z[h]*Math.sin(F)))}function bt(t="knot",e=108,r=32){if(!$.includes(t))throw RangeError("Unknown sculpture form");let v=new Float32Array((e+1)*(r+1)*3),F=new Float32Array(v.length),E=[];for(let x=0;x<=e;x++)for(let y=0;y<=r;y++){let L=x/e,z=y/r,a=lt(t,L,z),h=lt(t,L+0.0001,z).map((i,H)=>i-a[H]),j=lt(t,L,z+0.0001).map((i,H)=>i-a[H]),X=at(dt(h,j));if(Math.hypot(...X)<0.1)X=at(a);let f=(x*(r+1)+y)*3;if(v.set(a,f),F.set(X,f),x<e&&y<r){let i=x*(r+1)+y;E.push({a:i,b:i+r+1,c:i+r+2,d:i+1,depth:0,nx:0,ny:0,nz:0})}}return{positions:v,normals:F,faces:E}}var s=document.querySelector("#kinetic-sculpture");if(s){let t=s.getContext("webgl",{alpha:!0,antialias:!0,preserveDrawingBuffer:!0}),e=t?null:s.getContext("2d",{alpha:!0}),r=document.querySelector("#sculpture-trigger"),v=document.querySelector("#sculpture-name"),F=s.closest(".cover-panel"),E=matchMedia("(prefers-reduced-motion: reduce)"),x=matchMedia("(max-width: 800px)");if((e||t)&&r){let L=function(n){return y[n]||=bt($[n],x.matches?76:108,x.matches?24:32)},C=function(){if(!V&&et&&!document.hidden)V=requestAnimationFrame(Et)},ht=function(){let n=r.getBoundingClientRect();T=Math.max(1,n.width),P=Math.max(1,n.height);let c=Math.min(devicePixelRatio||1,x.matches?1.25:1.5);if(s.width=Math.round(T*c),s.height=Math.round(P*c),t)t.viewport(0,0,s.width,s.height);else if(e)e.setTransform(c,0,0,c,0,0);C()},xt=function(n,c,m){let d=Math.hypot(n,c,m)||1;n/=d,c/=d,m/=d;let A=2*c*m,l=2*n*m,G=(A+1)*0.5,B=wt,g=B[0],w=B[1];for(let S=1;S<B.length;S++){if(w=B[S],G<=w[0])break;g=w}let _=Math.min(1,Math.max(0,(G-g[0])/(w[0]-g[0]||1))),o=Math.max(0,n*-0.48+c*-0.56+m*0.67),u=Math.pow(o,52)*165,b=Math.max(0,l-0.38)*0.42,p=Math.min(255,g[1]+(w[1]-g[1])*_+u+b*80),M=Math.min(255,g[2]+(w[2]-g[2])*_+u+b*92),U=Math.min(255,Math.max(0,g[3]+(w[3]-g[3])*_+u-b*170));return`rgb(${p|0},${M|0},${U|0})`},Rt=function(){if(t&&I){let o=ot+W,u=nt+st+q,p=Math.sin(o),M=Math.cos(o),U=Math.sin(u),S=Math.cos(u),O=Math.sin(-0.22),k=Math.cos(-0.22);if(I.matrix.set([S*k-U*p*O,S*O+U*p*k,-U*M,-M*O,M*k,p,U*k+S*p*O,U*O-S*p*k,S*M]),t.clear(t.COLOR_BUFFER_BIT|t.DEPTH_BUFFER_BIT),t.uniform2f(I.resolution,T,P),t.uniformMatrix3fv(I.rotation,!1,I.matrix),K)t.bindBuffer(t.ARRAY_BUFFER,I.position),t.bufferSubData(t.ARRAY_BUFFER,0,a),t.bindBuffer(t.ARRAY_BUFFER,I.normal),t.bufferSubData(t.ARRAY_BUFFER,0,h),K=!1;t.drawElements(t.TRIANGLES,I.count,t.UNSIGNED_SHORT,0),s.__renderCount=(s.__renderCount||0)+1,s.dataset.ready="true",r.classList.add("is-rendered");return}if(!e)return;e.clearRect(0,0,T,P);let n=e.createRadialGradient(T*0.5,P*0.86,1,T*0.5,P*0.86,T*0.3);n.addColorStop(0,"#20252928"),n.addColorStop(1,"#20252900"),e.save(),e.translate(0,P*0.69),e.scale(1,0.2),e.fillStyle=n,e.fillRect(0,0,T,P),e.restore();let c=ot+W,m=nt+st+q,d=-0.22,A=Math.sin(c),l=Math.cos(c),G=Math.sin(m),B=Math.cos(m),g=Math.sin(d),w=Math.cos(d),_=Math.min(T,P)*0.142;for(let o=0;o<a.length;o+=3)for(let u=0;u<2;u++){let b=u?h:a,p=b[o],M=b[o+1],U=b[o+2],S=p*B+U*G,O=U*B-p*G,k=M*l-O*A,ct=M*A+O*l,ft=S*w-k*g,pt=S*g+k*w;if(u)i[o]=ft,i[o+1]=pt,i[o+2]=ct;else{let vt=7/(7-ct);f[o]=T*0.5+ft*_*vt,f[o+1]=P*0.46-pt*_*vt,f[o+2]=ct}}tt.length=0;for(let o of H){let u=o.a*3,b=o.b*3,p=o.c*3,M=o.d*3;if(o.nx=(i[u]+i[b]+i[p]+i[M])*0.25,o.ny=(i[u+1]+i[b+1]+i[p+1]+i[M+1])*0.25,o.nz=(i[u+2]+i[b+2]+i[p+2]+i[M+2])*0.25,o.nz<-0.12)continue;o.depth=(f[u+2]+f[b+2]+f[p+2]+f[M+2])*0.25,tt.push(o)}tt.sort((o,u)=>o.depth-u.depth),e.lineWidth=0.6,e.lineJoin="round";for(let o of tt){let u=o.a*3,b=o.b*3,p=o.c*3,M=o.d*3;e.fillStyle=e.strokeStyle=xt(o.nx,o.ny,o.nz),e.beginPath(),e.moveTo(f[u],f[u+1]),e.lineTo(f[b],f[b+1]),e.lineTo(f[p],f[p+1]),e.lineTo(f[M],f[M+1]),e.closePath(),e.fill(),e.stroke()}s.__renderCount=(s.__renderCount||0)+1,s.dataset.ready="true",r.classList.add("is-rendered")},Et=function(n){if(V=0,!et||document.hidden)return;let c=Math.min(50,n-(J||n));if(c<30&&J){C();return}if(J=n,!N&&!E.matches&&!R)st+=c*0.00012;if(q+=(Q-q)*0.12,W+=(Z-W)*0.12,D){let m=Math.min(1,(n-ut)/850),d=m*m*(3-2*m),A=L(Y);K=!0;for(let l=0;l<a.length;l++)a[l]=j[l]+(A.positions[l]-j[l])*d,h[l]=X[l]+(A.normals[l]-X[l])*d;if(D=m<1,!D)s.dataset.morphing="false"}if(Rt(),!N&&!E.matches||D||Math.abs(Q-q)+Math.abs(Z-W)>0.002)C()},rt=function(n){if(!R)return;if(it=R.moved,R=null,n.pointerId!=null&&r.hasPointerCapture(n.pointerId))r.releasePointerCapture(n.pointerId)},mt=function(){if(N=E.matches||document.body.classList.contains("motion-paused"),N)Q=q,Z=W;if(N&&D)D=!1,a.set(y[Y].positions),h.set(y[Y].normals),K=!0,s.dataset.morphing="false";C()},y=$.map(()=>null),z=L(0),a=new Float32Array(z.positions),h=new Float32Array(z.normals),j=new Float32Array(a),X=new Float32Array(h),f=new Float32Array(a.length),i=new Float32Array(a.length),H=z.faces,tt=[],yt=["01 / CHROME KNOT","02 / ORBIT STUDY","03 / CURIOUS BLOOM"],wt=[[0,34,43,52],[0.19,119,132,143],[0.34,239,241,234],[0.43,37,43,48],[0.51,16,23,31],[0.62,147,160,172],[0.76,237,239,232],[1,255,255,249]],I,K=!1;if(t){let m=function(d,A){let l=t.createShader(d);if(t.shaderSource(l,A),t.compileShader(l),!t.getShaderParameter(l,t.COMPILE_STATUS))throw Error(t.getShaderInfoLog(l));return l},n=`
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
        }`,c=`
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
        }`;try{let d=t.createProgram();if(t.attachShader(d,m(t.VERTEX_SHADER,`
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
        }`)),t.attachShader(d,m(t.FRAGMENT_SHADER,`
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
        }`)),t.linkProgram(d),!t.getProgramParameter(d,t.LINK_STATUS))throw Error("Sculpture shader could not link");t.useProgram(d);let A=t.createBuffer(),l=t.createBuffer(),G=t.createBuffer();for(let[g,w,_]of[["position",A,a],["normal",l,h]]){t.bindBuffer(t.ARRAY_BUFFER,w),t.bufferData(t.ARRAY_BUFFER,_,t.DYNAMIC_DRAW);let o=t.getAttribLocation(d,g);t.enableVertexAttribArray(o),t.vertexAttribPointer(o,3,t.FLOAT,!1,0,0)}let B=new Uint16Array(H.flatMap(({a:g,b:w,c:_,d:o})=>[g,w,_,g,_,o]));t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,G),t.bufferData(t.ELEMENT_ARRAY_BUFFER,B,t.STATIC_DRAW),t.enable(t.DEPTH_TEST),t.clearColor(0,0,0,0),I={position:A,normal:l,count:B.length,resolution:t.getUniformLocation(d,"resolution"),rotation:t.getUniformLocation(d,"rotation"),matrix:new Float32Array(9)},s.dataset.renderer="webgl",r.classList.add("is-webgl")}catch{t=null;let d=s.cloneNode(!1);s.replaceWith(d),s=d,e=s.getContext("2d",{alpha:!0}),s.dataset.renderer="canvas"}}else s.dataset.renderer="canvas";let Y=0,ut=0,D=!1,T=0,P=0,V=0,J=0,et=!0,N=E.matches||document.body.classList.contains("motion-paused"),st=0.2,ot=-0.25,nt=-0.4,Q=0,Z=0,q=0,W=0,R=null,it=!1;r.addEventListener("click",()=>{if(it){it=!1;return}Y=(Y+1)%y.length;let n=L(Y);if(j.set(a),X.set(h),ut=performance.now(),D=!N&&!E.matches,s.dataset.morphing=String(D),!D)a.set(n.positions),h.set(n.normals),K=!0;v.textContent=yt[Y],s.dataset.form=$[Y],r.setAttribute("aria-label","当前形态："+$[Y]+"。点击切换形态，拖动旋转。"),C()}),r.addEventListener("pointerdown",(n)=>{if(n.pointerType!=="mouse"||n.button!==0)return;R={x:n.clientX,y:n.clientY,rx:ot,ry:nt,moved:!1},r.setPointerCapture(n.pointerId)}),r.addEventListener("pointermove",(n)=>{if(!R)return;let c=n.clientX-R.x,m=n.clientY-R.y;if(Math.abs(c)+Math.abs(m)>5)R.moved=!0;if(!R.moved)return;ot=R.rx+m*0.008,nt=R.ry+c*0.008,C()}),r.addEventListener("pointerup",rt),r.addEventListener("pointercancel",rt),r.addEventListener("lostpointercapture",rt),window.addEventListener("blur",rt),F.addEventListener("pointermove",(n)=>{if(N||E.matches||x.matches||R)return;let c=F.getBoundingClientRect();Q=((n.clientX-c.left)/c.width-0.5)*0.45,Z=((n.clientY-c.top)/c.height-0.5)*0.25,C()}),F.addEventListener("pointerleave",()=>{if(!N)Q=Z=0,C()}),document.addEventListener("motion:change",mt),new IntersectionObserver(([n])=>{if(et=n.isIntersecting,et)J=0,C()}).observe(r),new ResizeObserver(ht).observe(r),document.addEventListener("visibilitychange",()=>{if(!document.hidden)J=0,C()}),window.addEventListener("pagehide",()=>{cancelAnimationFrame(V),V=0}),s.dataset.form="knot",s.dataset.morphing="false",mt(),ht()}}
