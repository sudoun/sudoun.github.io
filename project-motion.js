// Theme-specific animation of the existing decoded artwork. No video or new image.
// Each region: centre, radius, motion type, pinned point, motion and timing.
const effects={
 soda:{name:'bubbles-and-ripples',regions:[
  [752,379,148,171,4,0,0,0,1.6,2.5,.0,3.6,0],
  [411,590,175,48,2,0,0,0,2.8,1.6,.0,4.2,1],
  [765,715,320,30,2,0,0,0,2.8,1.6,.0,4.8,2]
 ]},
 facedrop:{name:'floating-puzzle',regions:[
  [218,69,65,75,0,218,69,0,10,17,.08,4.0,0],
  [350,105,68,78,0,350,105,0,12,18,.09,4.5,1.4],
  [282,180,59,67,0,282,180,0,10,15,.10,4.2,2.6],
  [450,157,65,76,0,450,157,0,12,14,.08,4.7,3.8],
  [588,118,103,95,0,588,118,0,13,19,.09,4.4,.8],
  [695,213,82,75,0,695,213,0,10,14,.08,4.9,2.0],
  [516,237,42,42,0,516,237,0,9,12,.0,3.7,4.2]
 ]},
 nearstage:{name:'stage-lights-and-water',regions:[
  [844,647,45,36,2,0,0,0,3,3,0,4.0,0]
 ]},
 rubik:{name:'chess-and-rotating-inlays',regions:[
  [637,506,118,148,3,637,506,.24,0,0,.34,5.2,0],
  [1003,510,82,165,3,1003,510,-.28,0,0,.29,5.8,1.6],
  [724,192,69,111,1,725,267,150,5,4,.09,4.8,1.1],
  [855,119,70,135,1,854,231,204,5,3,.055,5.4,3.1]
 ]},
 quant:{name:'flowing-evidence',regions:[
  [603,180,108,149,5,0,0,0,.08,0,0,4.8,0],
  [1000,235,208,143,5,0,0,0,.065,0,0,5.2,1.6],
  [860,553,250,70,5,0,0,0,.05,0,0,4.6,3.0]
 ]},
 film:{name:'film-ribbon-and-firefly',regions:[
  [675,268,285,188,4,0,0,0,4,7,0,5.0,0],
  [1130,393,144,190,4,0,0,0,4,7,0,5.8,2.1],
  [1045,155,69,58,0,1040,165,0,6,5,.13,2.4,1.3],
  [970,585,148,122,1,1004,687,190,5,5,.045,5.4,3]
 ]},
 margin:{name:'pages-ribbon-and-plane',regions:[
  [653,278,245,184,1,701,565,420,12,11,.08,4.7,0],
  [1073,414,201,149,1,911,544,260,11,12,.075,5.1,1.9],
  [960,250,142,131,4,0,0,0,11,8,0,4.4,2.7],
  [1137,112,140,84,0,1137,112,0,10,9,.045,5.2,.9]
 ]}
};
const vertex=`attribute vec2 position;varying vec2 screenUV;void main(){screenUV=vec2(position.x*.5+.5,.5-position.y*.5);gl_Position=vec4(position,0.,1.);}`;
const fragment=`precision highp float;
uniform sampler2D artwork;uniform vec2 cropScale,cropOffset;
uniform vec4 regions[8],pins[8],motion[8];uniform int count;uniform float strength;
varying vec2 screenUV;
void main(){
 vec2 p=(screenUV*cropScale+cropOffset)*vec2(1280.,853.),displacement=vec2(0.);float glow=0.;
 for(int i=0;i<8;i++){
  if(i>=count)break;
  vec2 q=(p-regions[i].xy)/regions[i].zw;
  float kind=pins[i].w;
  if(kind>2.5&&kind<3.5){
   vec2 local=p-regions[i].xy;vec2 ring=vec2((local.x-pins[i].z*local.y)/regions[i].z,local.y/regions[i].w);
   float radial=length(ring);if(radial>=1.)continue;
   float a=motion[i].z*(1.-smoothstep(.88,.97,radial))*smoothstep(.2,.33,radial),c=cos(a),s=sin(a);
   vec2 rotated=mat2(c,s,-s,c)*ring;vec2 source=vec2(rotated.x*regions[i].z+pins[i].z*rotated.y*regions[i].w,rotated.y*regions[i].w);
   displacement+=local-source;continue;
  }
  float d=sqrt(sqrt(dot(q*q,q*q)));if(d>=1.)continue;
  float weight=1.-smoothstep(kind<.5?.85:.65,1.,d);
  if(kind>4.5){float band=(q.x-sin(motion[i].w)*.8)*3.;glow+=exp(-band*band)*weight*motion[i].x;continue;}
  vec2 delta=vec2(0.),local=p-pins[i].xy;
  if(kind<.5){delta=motion[i].xy+vec2(-local.y,local.x)*motion[i].z;}
  else if(kind<1.5){
   float freeEdge=clamp((pins[i].y-p.y)/max(pins[i].z,1.),0.,1.);
   delta=vec2(-local.y*motion[i].z+motion[i].x*freeEdge*freeEdge,local.x*motion[i].z*.45+motion[i].y*freeEdge)*smoothstep(0.,.18,freeEdge);
  }else if(kind<2.5){delta=vec2(sin(q.x*12.+motion[i].w*2.),cos(q.y*14.-motion[i].w*1.8))*motion[i].xy;}
  else{delta=vec2(sin((p.y-regions[i].y)*.032+motion[i].w),sin((p.x-regions[i].x)*.021-motion[i].w))*motion[i].xy;}
  displacement+=delta*weight;
 }
 vec4 colour=texture2D(artwork,(p-displacement*strength)/vec2(1280.,853.));colour.rgb+=vec3(1.,.85,.5)*glow*strength;gl_FragColor=colour;
}`;
const circle=(x,y,r,colour='#fff4c9')=>`<circle cx="${x}" cy="${y}" r="${r}" fill="none" stroke="${colour}" stroke-width="1.5"/>`;
function overlay(id){
 if(id==='soda')return Array.from({length:12},(_,i)=>{
  const x=615+(i*47)%248,r=3+i%4,d=2.7+(i%5)*.35;
  return `<g opacity="0"><circle r="${r}" fill="#eaf5c9" fill-opacity=".12" stroke="#f8ffdf" stroke-width="1.4"/><circle cx="${-r*.3}" cy="${-r*.3}" r="1.2" fill="#fff"/><animateMotion dur="${d}s" begin="-${i*.61}s" repeatCount="indefinite" path="M${x} 535 Q${x+18} 350 ${x-8} ${155-i%3*12}"/><animate attributeName="opacity" values="0;.8;.65;0" keyTimes="0;.15;.8;1" dur="${d}s" begin="-${i*.61}s" repeatCount="indefinite"/></g>`;
 }).join('');
 if(id==='nearstage')return `<defs><clipPath id="stage-aperture"><path d="M678 447V332C678 188 953 188 953 332V447Z"/></clipPath><filter id="stage-soft"><feGaussianBlur stdDeviation="4"/></filter><clipPath id="stage-water"><path d="M803 585Q838 557 872 595L899 676L938 702L850 685L795 656Z"/></clipPath><linearGradient id="stage-beam" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#ffe5a4" stop-opacity=".1"/><stop offset="1" stop-color="#ffd59a" stop-opacity=".36"/></linearGradient></defs><g clip-path="url(#stage-aperture)"><path d="M733 295L697 447L842 447Z" fill="url(#stage-beam)" filter="url(#stage-soft)"><animateTransform attributeName="transform" type="rotate" values="-14 733 295;14 733 295;-14 733 295" dur="5.2s" repeatCount="indefinite"/></path><path d="M921 297L810 447L953 447Z" fill="url(#stage-beam)" filter="url(#stage-soft)"><animateTransform attributeName="transform" type="rotate" values="12 921 297;-15 921 297;12 921 297" dur="6.1s" repeatCount="indefinite"/></path></g><g clip-path="url(#stage-water)" fill="none" stroke="#ffddad" stroke-width="1.5">${[0,1,2].map(i=>`<ellipse cx="844" cy="651" rx="10" ry="3" opacity="0"><animate attributeName="rx" values="10;65" dur="3s" begin="-${i}s" repeatCount="indefinite"/><animate attributeName="ry" values="3;15" dur="3s" begin="-${i}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".55;0" dur="3s" begin="-${i}s" repeatCount="indefinite"/></ellipse>`).join('')}</g>`;
 if(id==='quant'){
  const paths=['M562 97L916 233L989 130','M640 276L991 350L1134 374','M516 468L991 467L1099 482','M640 276L991 467L1134 578'];
  return paths.map((path,i)=>`<path d="${path}" fill="none" stroke="#f6d99f" stroke-width="1" opacity=".18"/><circle r="4" fill="#ffe7b5"><animateMotion dur="${3.4+i*.5}s" begin="-${i*.7}s" repeatCount="indefinite" path="${path}"/></circle>`).join('')+[['562','97'],['640','276'],['991','467']].map(([x,y],i)=>`<circle cx="${x}" cy="${y}" r="6" fill="none" stroke="#ffdda0" opacity="0"><animate attributeName="r" values="6;29" dur="2.8s" begin="-${i*.8}s" repeatCount="indefinite"/><animate attributeName="opacity" values=".65;0" dur="2.8s" begin="-${i*.8}s" repeatCount="indefinite"/></circle>`).join('');
 }
 if(id==='film')return `<circle r="5" fill="#ffe6a7"><animateMotion dur="4.8s" repeatCount="indefinite" path="M1045 158C1250 185 1102 242 1000 293"/><animate attributeName="opacity" values=".3;1;.3" dur="2.4s" repeatCount="indefinite"/></circle><circle cx="1045" cy="158" r="18" fill="none" stroke="#ffdda0" opacity=".3"><animate attributeName="r" values="12;28;12" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values=".5;0;.5" dur="2.4s" repeatCount="indefinite"/></circle>`;
 return '';
}

export async function createProjectMotion(scene,image,id){
 const config=effects[id];if(!config)throw Error('Unknown artwork effect');
 const stage=scene.parentElement,canvas=document.createElement('canvas');canvas.className='art-project-canvas';canvas.setAttribute('aria-hidden','true');canvas.dataset.projectEffect=config.name;canvas.dataset.effectState='loading';
 const decoration=overlay(id);let svg=null;
 if(decoration){svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.classList.add('art-effect-overlay');svg.setAttribute('viewBox','0 0 1280 853');svg.setAttribute('preserveAspectRatio','xMidYMin slice');svg.setAttribute('aria-hidden','true');svg.innerHTML=decoration;scene.append(svg);svg.pauseAnimations();}
 const gl=canvas.getContext('webgl',{alpha:true,antialias:false,depth:false,stencil:false,preserveDrawingBuffer:false,powerPreference:'low-power'});
 if(!gl)return {resume(){svg?.unpauseAnimations();},pause(){svg?.pauseAnimations();},destroy(){svg?.remove();}};
 function compile(type,source){const shader=gl.createShader(type);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS)){gl.deleteShader(shader);gl.getExtension('WEBGL_lose_context')?.loseContext();svg?.remove();throw Error('Artwork effect shader compile failed');}return shader;}
 const vs=compile(gl.VERTEX_SHADER,vertex),fs=compile(gl.FRAGMENT_SHADER,fragment),program=gl.createProgram();gl.attachShader(program,vs);gl.attachShader(program,fs);gl.linkProgram(program);gl.deleteShader(vs);gl.deleteShader(fs);if(!gl.getProgramParameter(program,gl.LINK_STATUS)){svg?.remove();gl.getExtension('WEBGL_lose_context')?.loseContext();throw Error('Artwork effect link failed');}gl.useProgram(program);
 const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);const position=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
 const uniforms=Object.fromEntries(['artwork','cropScale','cropOffset','regions[0]','pins[0]','motion[0]','count','strength'].map(name=>[name,gl.getUniformLocation(program,name)]));
 const regions=new Float32Array(32),pins=new Float32Array(32),motion=new Float32Array(32);config.regions.forEach((r,i)=>{regions.set(r.slice(0,4),i*4);pins.set([r[5],r[6],r[7],r[4]],i*4);});gl.uniform4fv(uniforms['regions[0]'],regions);gl.uniform4fv(uniforms['pins[0]'],pins);gl.uniform1i(uniforms.count,config.regions.length);gl.uniform1i(uniforms.artwork,0);
 const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);for(const edge of [gl.TEXTURE_WRAP_S,gl.TEXTURE_WRAP_T])gl.texParameteri(gl.TEXTURE_2D,edge,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.clearColor(0,0,0,0);
 let dead=false,running=false,frame=0,elapsed=0,started=0,lastDraw=0,tw=1280,th=853,sx=1,sy=1,ox=0;
 function fit(){if(dead)return;const r=scene.getBoundingClientRect(),w=Math.max(1,Math.min(1600,Math.round(r.width))),h=Math.max(1,Math.round(r.height*w/Math.max(1,r.width)));if(canvas.width!==w||canvas.height!==h){canvas.width=w;canvas.height=h;}gl.viewport(0,0,w,h);const cover=Math.max(w/tw,h/th);sx=w/(tw*cover);sy=h/(th*cover);ox=(1-sx)/2;gl.uniform2f(uniforms.cropScale,sx,sy);gl.uniform2f(uniforms.cropOffset,ox,0);}
 function draw(t){
  if(dead||gl.isContextLost())return;
  config.regions.forEach((r,i)=>{const phase=t*Math.PI*2/r[11]+r[12],wave=r[4]>=2&&r[4]!==3;motion.set([r[8]*(wave?1:Math.sin(phase)),r[9]*(wave?1:Math.sin(phase+.7)),r[10]*Math.sin(phase),phase],i*4);});gl.uniform4fv(uniforms['motion[0]'],motion);gl.uniform1f(uniforms.strength,Math.min(1,t/.45));gl.disable(gl.SCISSOR_TEST);gl.clear(gl.COLOR_BUFFER_BIT);gl.enable(gl.SCISSOR_TEST);
  for(const [cx,cy,rx,ry] of config.regions){const left=Math.max(0,Math.floor(((cx-rx)/1280-ox)/sx*canvas.width)),right=Math.min(canvas.width,Math.ceil(((cx+rx)/1280-ox)/sx*canvas.width)),top=Math.max(0,Math.floor((cy-ry)/853/sy*canvas.height)),bottom=Math.min(canvas.height,Math.ceil((cy+ry)/853/sy*canvas.height));if(right<=left||bottom<=top)continue;gl.scissor(left,canvas.height-bottom,right-left,bottom-top);gl.drawArrays(gl.TRIANGLES,0,6);}
  canvas.dataset.effectTime=t.toFixed(3);
 }
 function tick(now){frame=0;if(dead||!running)return;const interval=matchMedia('(max-width:800px)').matches?1000/24:1000/30;if(now-lastDraw>=interval){draw((elapsed+now-started)/1000);lastDraw=now;}frame=requestAnimationFrame(tick);}
 function pause(){if(running)elapsed+=performance.now()-started;running=false;cancelAnimationFrame(frame);frame=0;svg?.pauseAnimations();if(!dead)canvas.dataset.effectState='paused';}
 function resume(){if(dead||running||gl.isContextLost())return;running=true;started=performance.now();lastDraw=0;canvas.dataset.effectState='playing';svg?.unpauseAnimations();frame=requestAnimationFrame(tick);}
 function resize(){if(!dead){fit();draw((elapsed+(running?performance.now()-started:0))/1000);}}
 async function upload(){let bitmap;try{bitmap=await createImageBitmap(image);}catch{}if(dead){bitmap?.close();return;}tw=bitmap?.width||image.naturalWidth;th=bitmap?.height||image.naturalHeight;gl.bindTexture(gl.TEXTURE_2D,texture);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,bitmap||image);bitmap?.close();resize();}
 const observer=new ResizeObserver(resize);observer.observe(scene);image.addEventListener('load',upload);
 function destroy(){if(dead)return;pause();dead=true;observer.disconnect();image.removeEventListener('load',upload);gl.deleteTexture(texture);gl.deleteBuffer(buffer);gl.deleteProgram(program);gl.getExtension('WEBGL_lose_context')?.loseContext();canvas.remove();svg?.remove();delete stage.dataset.projectEffect;}
 canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();pause();canvas.hidden=true;});
 await upload();if(dead)return {resume,pause,destroy};scene.append(canvas);stage.dataset.projectEffect=config.name;canvas.dataset.effectState='paused';return {resume,pause,destroy};
}
