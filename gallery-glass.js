// Content softens only while leaving the viewport. Position, rather than a
// timeout, controls the material, including a half-finished gesture at rest.
export function createGalleryGlass() {
  const supported=typeof CSS!=='undefined'&&typeof CSS.supports==='function'&&(CSS.supports('backdrop-filter','blur(1px)')||CSS.supports('-webkit-backdrop-filter','blur(1px)'));
  if(!supported)return {arm(){},reset(){},render(){}};
  const transparency=matchMedia('(prefers-reduced-transparency:reduce)');
  const contrast=matchMedia('(prefers-contrast:more)');
  const layer=document.createElement('div');
  layer.id='gallery-glass';layer.className='gallery-glass-layer';layer.hidden=true;
  layer.setAttribute('aria-hidden','true');layer.inert=true;
  const pane=document.createElement('span');pane.className='gallery-glass-pane';layer.append(pane);
  document.body.append(layer);
  let layout,departure;
  const hide=()=>{layer.hidden=true;};
  function reset(){departure=null;hide();}
  function arm(index){
    if(departure||!layout||document.querySelector('dialog[open]'))return;
    const [rects,stacked,root]=layout,rect=rects[index];if(!rect)return;
    const panel=document.querySelectorAll('#gallery > .exhibit-panel')[index];
    const start=stacked?(parseFloat(getComputedStyle(panel).scrollMarginTop)||0)+(parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0):root.left+(root.width-rect.width)/2;
    departure={index,stacked,start,moved:false};
  }
  function render(rects,stacked,root){
    layout=[rects,stacked,root];
    if(!departure||departure.stacked!==stacked||transparency.matches||contrast.matches||document.hidden){hide();return;}
    const rect=rects[departure.index],offset=(stacked?rect.top:rect.left)-departure.start;
    const direction=offset<0?-1:1,neighbor=rects[departure.index-direction];
    const distance=neighbor?Math.abs(stacked?neighbor.top-rect.top:neighbor.left-rect.left):(stacked?rect.height:rect.width);
    const progress=Math.min(1,Math.abs(offset)/Math.max(1,distance));
    if(progress>.01)departure.moved=true;
    if(progress>=.995||(progress<.004&&departure.moved)){reset();return;}
    if(progress<.012){hide();return;}
    const box=stacked?{left:12,top:0,right:innerWidth-12,bottom:innerHeight-65}:{left:0,top:root.top,right:innerWidth,bottom:root.bottom};
    let left=Math.max(box.left,rect.left),right=Math.min(box.right,rect.right),top=Math.max(box.top,rect.top),bottom=Math.min(box.bottom,rect.bottom);
    if(stacked){if(direction<0)bottom=Math.min(bottom,box.top+112);else top=Math.max(top,box.bottom-112);}
    else {if(direction<0)right=Math.min(right,box.left+Math.min(260,innerWidth*.2));else left=Math.max(left,box.right-Math.min(260,innerWidth*.2));}
    if(right-left<2||bottom-top<2){hide();return;}
    const smooth=(a,b,value)=>{const t=Math.max(0,Math.min(1,(value-a)/(b-a)));return t*t*(3-2*t);};
    const strength=smooth(.012,.15,progress)*smooth(0,.16,1-progress);
    layer.dataset.direction=stacked?(direction<0?'top':'bottom'):(direction<0?'left':'right');
    layer.dataset.origin=String(departure.index);layer.dataset.progress=progress.toFixed(3);
    Object.assign(layer.style,{left:left+'px',top:top+'px',width:right-left+'px',height:bottom-top+'px',opacity:strength.toFixed(3)});
    layer.hidden=false;
  }
  [transparency,contrast].forEach(query=>query.addEventListener('change',reset));
  document.addEventListener('visibilitychange',reset);
  window.addEventListener('pagehide',reset);
  return {arm,reset,render};
}
