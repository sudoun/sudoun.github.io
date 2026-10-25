import {paradoxState,paradoxLayout,PARADOX_RADIUS,PARADOX_STEPS,PARADOX_STATEMENTS} from './banach-tarski-core.js';

const canvas=document.querySelector('#kinetic-sculpture');
const trigger=document.querySelector('#sculpture-trigger');
const cover=canvas?.closest('.cover-panel');
const context=canvas?.getContext('2d',{alpha:true});
if(context&&trigger&&cover) {
  const compact=matchMedia('(max-width:800px)');
  const reduced=matchMedia('(prefers-reduced-motion:reduce)');
  let width=1,height=1,frame=0,last=0,clock=0,rotationX=-.15,rotationY=.25;
  let visible=true,paused=reduced.matches||document.body.classList.contains('motion-paused');
  let drag=null,suppressClick=false,manualStep=0;
  const steps=[...document.querySelectorAll('[data-paradox-step]')];
  function schedule(){if(!frame&&visible&&!document.hidden)frame=requestAnimationFrame(tick);}
  function sphere(x,y,opacity,label){
    if(opacity<.005)return;
    const gradient=context.createRadialGradient(x-42,y-50,5,x-15,y-15,PARADOX_RADIUS*1.4);
    gradient.addColorStop(0,'#ffffff');gradient.addColorStop(.42,'#f3f1e6');gradient.addColorStop(.78,'#c6cfb5');gradient.addColorStop(1,'#738568');
    context.save();context.globalAlpha=opacity*.09;context.fillStyle='#536142';
    context.beginPath();context.ellipse(x,y+137,78,7,0,0,Math.PI*2);context.fill();
    context.globalAlpha=opacity;context.fillStyle=gradient;context.strokeStyle='#7f917066';context.lineWidth=.8;
    context.beginPath();context.arc(x,y,PARADOX_RADIUS,0,Math.PI*2);context.fill();context.stroke();
    context.globalAlpha=opacity*.36;context.strokeStyle='#7a896d';
    context.beginPath();context.ellipse(x,y,PARADOX_RADIUS,20+Math.abs(Math.sin(rotationX))*40,0,0,Math.PI*2);context.stroke();
    context.beginPath();context.ellipse(x,y,Math.abs(Math.sin(rotationY))*PARADOX_RADIUS,PARADOX_RADIUS,-.42,0,Math.PI*2);context.stroke();
    context.globalAlpha=opacity;context.strokeStyle='#526744';context.lineWidth=1;
    context.beginPath();context.moveTo(x,y);context.lineTo(x+PARADOX_RADIUS,y);context.stroke();
    context.fillStyle='#425538';context.beginPath();context.arc(x,y,2,0,Math.PI*2);context.fill();
    context.font='italic 28px Georgia, serif';context.textAlign='center';context.fillText(label,x-34,y+10);
    context.font='italic 19px Georgia, serif';context.fillText('r',x+56,y-8);context.restore();
  }
  function paint(){
    const state=paradoxState(clock),layout=paradoxLayout(state,compact.matches),box=layout.box;
    const ratio=Math.min(devicePixelRatio||1,1.5);
    context.setTransform(ratio,0,0,ratio,0,0);context.clearRect(0,0,width,height);
    const scale=Math.min(width/box.width,height/box.height);
    context.translate((width-box.width*scale)/2-box.x*scale,(height-box.height*scale)/2-box.y*scale);context.scale(scale,scale);
    sphere(layout.source.x,layout.source.y,state.sourceOpacity,'B');
    layout.doubles.forEach((centre,i)=>sphere(centre.x,centre.y,state.doubleOpacity,['B₁','B₂'][i]));
    // Set names, not cut-out pieces, point samples, or physical motion paths.
    context.save();context.globalAlpha=state.symbolOpacity;context.textAlign='center';
    for(const [i,symbol] of layout.symbols.entries()){
      context.fillStyle=['#3e637f','#ad6149','#68755d','#877197'][i];
      context.font='italic 46px Georgia, serif';context.fillText(symbol.label,symbol.x,symbol.y+12);
    }
    const cx=compact.matches?210:425;
    context.fillStyle='#52634a';context.font='23px Georgia, serif';
    context.fillText('B = A₁ ⊔ A₂ ⊔ ⋯ ⊔ Aₙ',cx,compact.matches?85:175);
    context.font='14px Arial, sans-serif';context.fillText('SET SYMBOLS · NOT GEOMETRIC SHAPES',cx,compact.matches?405:410);
    context.restore();
    context.globalAlpha=1;
    canvas.__renderCount=(canvas.__renderCount||0)+1;
    if(canvas.dataset.ready!=='true'){canvas.dataset.ready='true';canvas.dataset.renderer='canvas';canvas.dataset.morphing='false';trigger.classList.add('is-rendered');}
    if(canvas.dataset.form!==state.phase){
      canvas.dataset.form=state.phase;
      steps.forEach((step,i)=>{if(i===state.index)step.setAttribute('aria-current','step');else step.removeAttribute('aria-current');});
      document.querySelector('#paradox-statement').textContent=PARADOX_STATEMENTS[state.index];
      trigger.setAttribute('aria-label','Banach–Tarski 定理图示。'+PARADOX_STATEMENTS[state.index]+'点击切换示意阶段；不展示实际分解。');
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
