// Local texture deformation: one copy of the existing artwork, no cutout ghosts
// or replacement background. Four small scissor regions keep the GPU work local.
const SHEETS=[
 {id:'upper-left',center:[596,64],radius:[53,43],pin:[598,91],height:62,period:6.2,phase:.3},
 {id:'upper-middle',center:[706,56],radius:[52,52],pin:[711,95],height:79,period:7.1,phase:1.8},
 {id:'upper-right',center:[965,97],radius:[65,65],pin:[982,146],height:100,period:6.7,phase:3.4},
 {id:'lower-right',center:[965,551],radius:[66,54],pin:[978,590],height:76,period:7.8,phase:5.1}
];
const VERTEX=`attribute vec2 position;varying vec2 screenUV;void main(){screenUV=vec2(position.x*.5+.5,.5-position.y*.5);gl_Position=vec4(position,0.,1.);}`;
const FRAGMENT=`precision highp float;
uniform sampler2D artwork;uniform vec2 cropScale,cropOffset;
uniform vec2 center,radius,pin;uniform float height,angle,lift,curl;
varying vec2 screenUV;
void main(){
 vec2 uv=screenUV*cropScale+cropOffset;
 vec2 p=uv*vec2(1280.,853.);
 float distance=length((p-center)/radius);
 float weight=1.-smoothstep(.58,1.,distance);
 float freeEdge=clamp((pin.y-p.y)/height,0.,1.);
 vec2 local=p-pin;
 // The lower attachment stays still; the free edge flexes and sways.
 vec2 displacement=vec2(-local.y*angle+curl*freeEdge*freeEdge,local.x*angle*.45+lift*freeEdge);
 vec2 source=(p-displacement*weight)/vec2(1280.,853.);
 gl_FragColor=texture2D(artwork,source);
}`;

export async function createPaperSway(scene,image){
 const canvas=document.createElement('canvas');canvas.className='art-paper-canvas';canvas.setAttribute('aria-hidden','true');canvas.dataset.paperState='loading';canvas.dataset.paperCount=String(SHEETS.length);
 const gl=canvas.getContext('webgl',{alpha:true,antialias:false,depth:false,stencil:false,preserveDrawingBuffer:false,powerPreference:'low-power'});
 if(!gl)return {resume(){},pause(){},destroy(){}};
 let dead=false,frame=0,elapsed=0,started=0,lastDraw=0,running=false,textureWidth=1280,textureHeight=853;
 function compile(type,source){const shader=gl.createShader(type);gl.shaderSource(shader,source);gl.compileShader(shader);if(!gl.getShaderParameter(shader,gl.COMPILE_STATUS))throw Error('Paper shader compile failed');return shader;}
 const vertex=compile(gl.VERTEX_SHADER,VERTEX),fragment=compile(gl.FRAGMENT_SHADER,FRAGMENT),program=gl.createProgram();gl.attachShader(program,vertex);gl.attachShader(program,fragment);gl.linkProgram(program);
 if(!gl.getProgramParameter(program,gl.LINK_STATUS))throw Error('Paper program link failed');gl.deleteShader(vertex);gl.deleteShader(fragment);gl.useProgram(program);
 const buffer=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,buffer);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),gl.STATIC_DRAW);
 const position=gl.getAttribLocation(program,'position');gl.enableVertexAttribArray(position);gl.vertexAttribPointer(position,2,gl.FLOAT,false,0,0);
 const names=['artwork','cropScale','cropOffset','center','radius','pin','height','angle','lift','curl'],uniforms=Object.fromEntries(names.map(name=>[name,gl.getUniformLocation(program,name)]));
 const texture=gl.createTexture();gl.bindTexture(gl.TEXTURE_2D,texture);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,gl.LINEAR);gl.uniform1i(uniforms.artwork,0);gl.clearColor(0,0,0,0);
 async function upload(){
  let bitmap;try{bitmap=await createImageBitmap(image);}catch{/* Older browsers can upload the decoded image directly. */}
  if(dead){bitmap?.close();return;}
  textureWidth=bitmap?.width||image.naturalWidth;textureHeight=bitmap?.height||image.naturalHeight;
  gl.bindTexture(gl.TEXTURE_2D,texture);gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,bitmap||image);bitmap?.close();fit();draw(elapsed/1000);
 }
 let scaleX=1,scaleY=1,offsetX=0;
 function fit(){
  if(dead)return;const bounds=scene.getBoundingClientRect();
  // DPR is intentionally capped at 1: the clear source still remains underneath.
  const width=Math.max(1,Math.min(1600,Math.round(bounds.width))),height=Math.max(1,Math.round(bounds.height*width/Math.max(1,bounds.width)));
  if(canvas.width!==width||canvas.height!==height){canvas.width=width;canvas.height=height;}
  gl.viewport(0,0,width,height);
  const cover=Math.max(width/textureWidth,height/textureHeight),paintedWidth=textureWidth*cover,paintedHeight=textureHeight*cover;
  scaleX=width/paintedWidth;scaleY=height/paintedHeight;offsetX=(1-scaleX)/2;
  gl.uniform2f(uniforms.cropScale,scaleX,scaleY);gl.uniform2f(uniforms.cropOffset,offsetX,0);
 }
 function draw(time){
  if(dead||gl.isContextLost())return;gl.disable(gl.SCISSOR_TEST);gl.clear(gl.COLOR_BUFFER_BIT);gl.enable(gl.SCISSOR_TEST);
  const states=[];
  for(const sheet of SHEETS){
   const [cx,cy]=sheet.center,[rx,ry]=sheet.radius;
   const left=Math.max(0,Math.floor(((cx-rx)/1280-offsetX)/scaleX*canvas.width)),right=Math.min(canvas.width,Math.ceil(((cx+rx)/1280-offsetX)/scaleX*canvas.width));
   const top=Math.max(0,Math.floor((cy-ry)/853/scaleY*canvas.height)),bottom=Math.min(canvas.height,Math.ceil((cy+ry)/853/scaleY*canvas.height));
   if(right<=left||bottom<=top)continue;
   const phase=time*Math.PI*2/sheet.period+sheet.phase;
   const angle=Math.sin(phase)*.035,lift=Math.sin(phase+.7)*2.4,curl=Math.sin(phase*1.35+.4)*2.8;
   gl.scissor(left,canvas.height-bottom,right-left,bottom-top);gl.uniform2f(uniforms.center,cx,cy);gl.uniform2f(uniforms.radius,rx,ry);gl.uniform2f(uniforms.pin,...sheet.pin);gl.uniform1f(uniforms.height,sheet.height);gl.uniform1f(uniforms.angle,angle);gl.uniform1f(uniforms.lift,lift);gl.uniform1f(uniforms.curl,curl);gl.drawArrays(gl.TRIANGLES,0,6);
   states.push({id:sheet.id,angle:Math.round(angle*10000)/10000,lift:Math.round(lift*100)/100});
  }
  canvas.dataset.paperTime=time.toFixed(3);canvas.dataset.paperPose=JSON.stringify(states);
 }
 function tick(now){
  frame=0;if(dead||!running)return;
  const interval=matchMedia('(max-width:800px)').matches?1000/24:1000/30;
  if(now-lastDraw>=interval){draw((elapsed+now-started)/1000);lastDraw=now;}
  frame=requestAnimationFrame(tick);
 }
 function pause(){if(running)elapsed+=performance.now()-started;running=false;cancelAnimationFrame(frame);frame=0;if(!dead)canvas.dataset.paperState='paused';}
 function resume(){if(dead||running||gl.isContextLost())return;running=true;started=performance.now();lastDraw=0;canvas.dataset.paperState='playing';frame=requestAnimationFrame(tick);}
 function resize(){if(!dead){fit();draw((elapsed+(running?performance.now()-started:0))/1000);}}
 function destroy(){if(dead)return;pause();dead=true;observer.disconnect();image.removeEventListener('load',reload);gl.deleteTexture(texture);gl.deleteBuffer(buffer);gl.deleteProgram(program);gl.getExtension('WEBGL_lose_context')?.loseContext();canvas.remove();}
 async function reload(){await upload();resize();}
 const observer=new ResizeObserver(resize);observer.observe(scene);image.addEventListener('load',reload);
 canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();pause();canvas.hidden=true;});
 await upload();if(dead)return {resume,pause,destroy};fit();draw(0);canvas.dataset.paperState='paused';scene.append(canvas);
 return {resume,pause,destroy};
}
