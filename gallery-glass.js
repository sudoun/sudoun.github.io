// A quiet scroll edge: no image distortion, decoration, or idle animation.
export function createGalleryGlass(){
 const supported=typeof CSS!=='undefined'&&typeof CSS.supports==='function'&&(CSS.supports('backdrop-filter','blur(1px)')||CSS.supports('-webkit-backdrop-filter','blur(1px)'));
 if(!supported)return {arm(){},reset(){},render(){}};
 const preferences=['(prefers-reduced-transparency:reduce)','(prefers-contrast:more)','(prefers-reduced-motion:reduce)'].map(query=>matchMedia(query));
 const panels=[...document.querySelectorAll('#gallery>.exhibit-panel')],header=document.querySelector('.exhibit-header'),layer=document.createElement('div');
 layer.id='gallery-glass';layer.className='gallery-glass-layer';layer.dataset.effect='soft-edge';layer.hidden=true;layer.inert=true;layer.setAttribute('aria-hidden','true');
 for(const depth of ['light','near']){const pane=document.createElement('span');pane.className='gallery-glass-pane';pane.dataset.depth=depth;layer.append(pane);}
 document.body.append(layer);
 let layout,departure;
 const blocked=()=>preferences.some(query=>query.matches)||document.body.classList.contains('motion-paused');
 function reset(){departure=null;layer.hidden=true;}
 function arm(index){
  if(departure||!layout||blocked()||document.querySelector('dialog[open]'))return;
  const [rects,stacked,root]=layout,rect=rects[index],panel=panels[index];if(!rect||!panel)return;
  const start=stacked?(parseFloat(getComputedStyle(panel).scrollMarginTop)||0)+(parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0):root.left+(root.width-rect.width)/2;
  departure={index,stacked,start,moved:false};
  const rgb=getComputedStyle(panel).backgroundColor.match(/[\d.]+/g);
  layer.style.setProperty('--edge-tint',rgb?.length>=3?'rgb('+rgb.slice(0,3).join(' ')+' / .025)':'transparent');
 }
 const smooth=(a,b,value)=>{const t=Math.max(0,Math.min(1,(value-a)/(b-a)));return t*t*(3-2*t);};
 function render(rects,stacked,root){
  layout=[rects,stacked,root];
  if(!departure){layer.hidden=true;return;}
  if(departure.stacked!==stacked||blocked()||document.hidden){reset();return;}
  const rect=rects[departure.index],offset=(stacked?rect.top:rect.left)-departure.start,direction=offset<0?-1:1;
  const neighbor=rects[departure.index-direction],distance=neighbor?Math.abs(stacked?neighbor.top-rect.top:neighbor.left-rect.left):(stacked?rect.height:rect.width);
  const progress=Math.min(1,Math.abs(offset)/Math.max(1,distance));
  if(progress>.01)departure.moved=true;
  if(progress>=.995||(progress<.004&&departure.moved)){reset();return;}
  if(progress<.012){layer.hidden=true;return;}
  // The departure boundary begins below the persistent mobile language controls.
  const headerEdge=stacked&&header&&getComputedStyle(header).position==='sticky'?Math.max(0,header.getBoundingClientRect().bottom):0;
  const box=stacked?{left:12,top:headerEdge,right:innerWidth-12,bottom:innerHeight-65}:{left:0,top:root.top,right:innerWidth,bottom:root.bottom};
  const penetration=stacked?(direction<0?box.top-rect.top:rect.bottom-box.bottom):(direction<0?box.left-rect.left:rect.right-box.right);
  if(penetration<=0){layer.hidden=true;return;}
  let left=Math.max(box.left,rect.left),right=Math.min(box.right,rect.right),top=Math.max(box.top,rect.top),bottom=Math.min(box.bottom,rect.bottom);
  if(stacked){if(direction<0)bottom=Math.min(bottom,box.top+64);else top=Math.max(top,box.bottom-64);}
  else{const width=Math.min(144,innerWidth*.1);if(direction<0)right=Math.min(right,box.left+width);else left=Math.max(left,box.right-width);}
  if(right-left<2||bottom-top<2){layer.hidden=true;return;}
  const strength=smooth(0,stacked?24:36,penetration)*smooth(.012,.18,progress)*smooth(0,.16,1-progress);
  layer.dataset.direction=stacked?(direction<0?'top':'bottom'):(direction<0?'left':'right');
  layer.dataset.origin=String(departure.index);layer.dataset.progress=progress.toFixed(3);
  // Keep the ancestor opaque. Fading a backdrop root prevents descendants
  // from consistently sampling the actual artwork underneath it.
  layer.style.setProperty('--edge-visibility',strength.toFixed(4));
  Object.assign(layer.style,{left:left+'px',top:top+'px',width:right-left+'px',height:bottom-top+'px',opacity:'1'});
  layer.hidden=false;
 }
 preferences.forEach(query=>query.addEventListener('change',reset));
 document.addEventListener('motion:change',reset);document.addEventListener('visibilitychange',reset);window.addEventListener('pagehide',reset);
 return {arm,reset,render};
}
