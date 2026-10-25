import {createParadoxPoints,paradoxState,paradoxLayout,transformParadoxPoint,PARADOX_RADIUS,PARADOX_COLORS,PARADOX_STEPS} from './banach-tarski-core.js';

const canvas=document.querySelector('#kinetic-sculpture');
const trigger=document.querySelector('#sculpture-trigger');
const cover=canvas?.closest('.cover-panel');
const context=canvas?.getContext('2d',{alpha:true});
if(context&&trigger&&cover) {
  const compact=matchMedia('(max-width:800px)');
  const reduced=matchMedia('(prefers-reduced-motion:reduce)');
  const points=createParadoxPoints(compact.matches?640:960);
  let width=1,height=1,frame=0,last=0,clock=0,rotationX=-.15,rotationY=.25;
  let visible=true,paused=reduced.matches||document.body.classList.contains('motion-paused');
  let drag=null,suppressClick=false,manualStep=0;
  const steps=[...document.querySelectorAll('[data-paradox-step]')];
  function schedule(){if(!frame&&visible&&!document.hidden)frame=requestAnimationFrame(tick);}
  function sphere(x,y,opacity){
    if(opacity<.005)return;
    const gradient=context.createRadialGradient(x-42,y-50,5,x-15,y-15,PARADOX_RADIUS*1.4);
    gradient.addColorStop(0,'#ffffff');gradient.addColorStop(.42,'#f3f1e6');gradient.addColorStop(.78,'#c6cfb5');gradient.addColorStop(1,'#738568');
    context.save();context.globalAlpha=opacity*.09;context.fillStyle='#536142';
    context.beginPath();context.ellipse(x,y+137,78,7,0,0,Math.PI*2);context.fill();
    context.globalAlpha=opacity*.86;context.fillStyle=gradient;context.strokeStyle='#7f917066';context.lineWidth=.8;
    context.beginPath();context.arc(x,y,PARADOX_RADIUS,0,Math.PI*2);context.fill();context.stroke();
    context.globalAlpha=opacity*.26;context.strokeStyle='#7a896d';
    context.beginPath();context.ellipse(x,y,PARADOX_RADIUS,36,0,0,Math.PI*2);context.stroke();
    context.beginPath();context.ellipse(x,y,42,PARADOX_RADIUS,-.42,0,Math.PI*2);context.stroke();context.restore();
  }
  function paint(){
    const state=paradoxState(clock),layout=paradoxLayout(state,compact.matches),box=layout.box;
    const ratio=Math.min(devicePixelRatio||1,1.5);
    context.setTransform(ratio,0,0,ratio,0,0);context.clearRect(0,0,width,height);
    const scale=Math.min(width/box.width,height/box.height);
    context.translate((width-box.width*scale)/2-box.x*scale,(height-box.height*scale)/2-box.y*scale);context.scale(scale,scale);
    sphere(layout.source.x,layout.source.y,state.sourceOpacity);
    for(const centre of layout.doubles)sphere(centre.x,centre.y,state.doubleOpacity);
    const sx=Math.sin(rotationX),cx=Math.cos(rotationX),sy=Math.sin(rotationY),cy=Math.cos(rotationY);
    const projected=points.map(point=>{
      const p=transformParadoxPoint(point,state),g=state.groups[point.group];
      const x=p.x-g.x,z=p.z,y=p.y-g.y;
      const xx=x*cy+z*sy,zz=z*cy-x*sy;
      const centre=layout.groups[point.group];
      return {x:centre.x+xx,y:centre.y+y*cx-zz*sx,z:y*sx+zz*cx,group:point.group};
    }).sort((a,b)=>a.z-b.z);
    for(const p of projected){
      const depth=(p.z/PARADOX_RADIUS+1)*.5;
      context.globalAlpha=.23+.74*depth;context.fillStyle=PARADOX_COLORS[p.group];
      context.beginPath();context.arc(p.x,p.y,1.15+depth*1.65,0,Math.PI*2);context.fill();
    }
    context.globalAlpha=1;
    canvas.__renderCount=(canvas.__renderCount||0)+1;
    if(canvas.dataset.ready!=='true'){canvas.dataset.ready='true';canvas.dataset.renderer='canvas';canvas.dataset.morphing='false';trigger.classList.add('is-rendered');}
    if(canvas.dataset.form!==state.phase){
      canvas.dataset.form=state.phase;
      steps.forEach((step,i)=>{if(i===state.index)step.setAttribute('aria-current','step');else step.removeAttribute('aria-current');});
      trigger.setAttribute('aria-label','Banach–Tarski 悖论概念示意，当前为'+['一个球','分组重排','两个等半径的球'][state.index]+'。点击推进，拖动旋转。');
    }
  }
  function tick(time){frame=0;if(!visible||document.hidden)return;const dt=Math.min(70,time-(last||time));if(last&&dt<32){schedule();return;}last=time;
    if(!paused&&!drag){clock=(clock+dt/16000)%1;rotationY+=dt*.000035;}
    paint();if(!paused)schedule();
  }
  function resize(){
    const rect=trigger.getBoundingClientRect();width=Math.max(1,rect.width);height=Math.max(1,rect.height);
    const ratio=Math.min(devicePixelRatio||1,1.5),pixelsWide=Math.round(width*ratio),pixelsHigh=Math.round(height*ratio);
    if(canvas.width!==pixelsWide||canvas.height!==pixelsHigh){canvas.width=pixelsWide;canvas.height=pixelsHigh;paint();}
    schedule();
  }
  trigger.addEventListener('click',()=>{if(suppressClick){suppressClick=false;return;}manualStep=(paradoxState(clock).index+1)%3;clock=PARADOX_STEPS[manualStep];paint();schedule();});
  trigger.addEventListener('pointerdown',event=>{if(event.pointerType!=='mouse'||event.button!==0)return;drag={x:event.clientX,y:event.clientY,rx:rotationX,ry:rotationY,moved:false};trigger.setPointerCapture(event.pointerId);});
  trigger.addEventListener('pointermove',event=>{if(!drag)return;const dx=event.clientX-drag.x,dy=event.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>5)drag.moved=true;if(drag.moved){rotationX=drag.rx+dy*.007;rotationY=drag.ry+dx*.007;schedule();}});
  function release(event){if(!drag)return;suppressClick=drag.moved;drag=null;if(event.pointerId!==undefined&&trigger.hasPointerCapture(event.pointerId))trigger.releasePointerCapture(event.pointerId);}
  trigger.addEventListener('pointerup',release);trigger.addEventListener('pointercancel',release);trigger.addEventListener('lostpointercapture',release);window.addEventListener('blur',release);
  document.addEventListener('motion:change',()=>{paused=reduced.matches||document.body.classList.contains('motion-paused');last=0;schedule();});
  new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible){last=0;schedule();}}).observe(trigger);
  new ResizeObserver(resize).observe(trigger);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden){last=0;schedule();}});
  window.addEventListener('pagehide',()=>{cancelAnimationFrame(frame);frame=0;});
  resize();
}
