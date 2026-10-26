// One live artwork at a time. The original still remains the first paint.
export function createArtworkMotion(artworks,limited){
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let active=null,animations=[],svg=null,timer,scrolling=false;
 const allowed=()=>!reduced.matches&&!document.hidden&&!document.body.classList.contains('motion-paused')&&!document.querySelector('dialog[open],#gallery-glass:not([hidden])')&&!limited();
 function pause(){clearTimeout(timer);for(const animation of animations)animation.pause();svg?.pauseAnimations();if(active)active.stage.dataset.artMotion='paused';}
 function clear(){pause();for(const animation of animations)animation.cancel();animations=[];svg?.remove();svg=null;if(active){delete active.stage.dataset.artMotion;active.stage.querySelector('.art-light')?.remove();}active=null;}
 function play(art){
  if(!allowed()||scrolling||art.stage.dataset.artState!=='ready'||!art.panel.classList.contains('is-current'))return;
  if(active!==art){
   clear();active=art;
   let scene=art.stage.querySelector('.art-scene');
   if(!scene){scene=document.createElement('div');scene.className='art-scene';art.image.before(scene);scene.append(art.image);}
   const phone=matchMedia('(max-width:800px)').matches,travel=phone?3:8;
   animations.push(scene.animate([{transform:'scale(1.018) translate3d(0,0,0)'},{transform:`scale(1.026) translate3d(${-travel}px,${-travel*.55}px,0)`},{transform:'scale(1.018) translate3d(0,0,0)'}],{duration:14000,iterations:Infinity,easing:'ease-in-out'}));
   const light=document.createElement('div');light.className='art-light';scene.append(light);
   animations.push(light.animate([{opacity:0,transform:'translateX(-5%)'},{opacity:.55,transform:'translateX(3%)'},{opacity:0,transform:'translateX(9%)'}],{duration:11000,iterations:Infinity,easing:'ease-in-out'}));
   if(art.stage.dataset.artwork==='slidefetch'){
    svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 1280 853');svg.setAttribute('preserveAspectRatio','xMidYMin slice');svg.setAttribute('aria-hidden','true');svg.classList.add('art-orbit');
    // These two paths follow the blue wires already present in the illustration.
    svg.innerHTML='<defs><radialGradient id="art-orb-light"><stop stop-color="#fff" stop-opacity=".65"/><stop offset="1" stop-color="#aedfff" stop-opacity="0"/></radialGradient></defs><circle cx="896" cy="277" r="39" fill="url(#art-orb-light)" class="art-orb-glint"/><circle r="3.2" fill="#fff7ba"><animateMotion dur="9s" repeatCount="indefinite" path="M550 28 C560 165 658 236 798 319 C922 393 1098 382 1117 267"/></circle><circle r="2.5" fill="#d3f0ff"><animateMotion dur="12s" begin="-5s" repeatCount="indefinite" path="M541 398 C653 342 816 367 942 269 C1055 181 1096 151 1103 196"/></circle>';
    scene.append(svg);svg.pauseAnimations();
    animations.push(svg.querySelector('.art-orb-glint').animate([{opacity:.08},{opacity:.62},{opacity:.08}],{duration:5000,iterations:Infinity,easing:'ease-in-out'}));
   }
  }
  active.stage.dataset.artMotion='playing';for(const animation of animations)animation.play();svg?.unpauseAnimations();
 }
 function sync(){
  clearTimeout(timer);
  const art=artworks.find(item=>item.panel.classList.contains('is-current'));
  if(active&&active!==art)clear();
  if(!allowed()||scrolling||!art||art.stage.dataset.artState!=='ready'){pause();return;}
  // Allow the clear still and text to paint before allocating an animated layer.
  timer=setTimeout(()=>play(art),450);
 }
 function onScroll(){scrolling=true;pause();clearTimeout(timer);timer=setTimeout(()=>{scrolling=false;sync();},200);}
 document.querySelector('#gallery')?.addEventListener('scroll',onScroll,{passive:true});
 window.addEventListener('scroll',onScroll,{passive:true});
 document.addEventListener('gallery:settled',()=>{scrolling=false;sync();});
 document.addEventListener('motion:change',sync);document.addEventListener('visibilitychange',sync);reduced.addEventListener('change',sync);
 const dialogs=[...document.querySelectorAll('dialog')];
 for(const dialog of dialogs){new MutationObserver(sync).observe(dialog,{attributes:true,attributeFilter:['open']});}
 return {sync,pause};
}
