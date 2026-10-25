// A transient, narrow frost at each moving card boundary. No duplicated scenes,
// textures, continuous RAF loop, or per-frame blur-radius animation.
export function createGalleryGlass() {
  const supported=typeof CSS!=='undefined'&&typeof CSS.supports==='function'&&(CSS.supports('backdrop-filter','blur(1px)')||CSS.supports('-webkit-backdrop-filter','blur(1px)'));
  if(!supported)return {arm(){},start(){},stop(){},suspend(){},render(){}};
  const reduced=matchMedia('(prefers-reduced-motion:reduce)');
  const transparency=matchMedia('(prefers-reduced-transparency:reduce)');
  const contrast=matchMedia('(prefers-contrast:more)');
  const layer=document.createElement('div');
  layer.id='gallery-glass';layer.className='gallery-glass-layer';layer.hidden=true;
  layer.setAttribute('aria-hidden','true');layer.inert=true;
  const panes=Array.from({length:2},()=>{const pane=document.createElement('span');pane.className='gallery-glass-pane';pane.hidden=true;layer.append(pane);return pane;});
  document.body.append(layer);
  let moving=false,armed=false,hideTimer,suppressedUntil=performance.now()+300;
  const allowed=()=>!reduced.matches&&!transparency.matches&&!contrast.matches&&!document.hidden&&!document.body.classList.contains('motion-paused');
  function stop(immediate=false){
    moving=false;armed=false;layer.classList.remove('is-active');clearTimeout(hideTimer);
    if(immediate){layer.hidden=true;return;}
    hideTimer=setTimeout(()=>{layer.hidden=true;},220);
  }
  function arm(){armed=true;suppressedUntil=0;}
  function start(){if(!armed||!allowed()||performance.now()<suppressedUntil)return;clearTimeout(hideTimer);moving=true;}
  function suspend(){suppressedUntil=performance.now()+300;stop(true);}
  function render(rects,stacked,root){
    if(!moving||!allowed())return;
    const box=stacked?{left:12,top:0,width:innerWidth-24,height:innerHeight-65}:{left:22,top:root.top,width:innerWidth-44,height:root.height};
    const breadth=stacked?88:Math.min(156,Math.max(100,innerWidth*.095));
    const extent=stacked?box.height:box.width,origin=stacked?box.top:box.left;
    const boundaries=[];
    for(let i=0;i<rects.length-1;i++){
      const seam=stacked?(rects[i].bottom+rects[i+1].top)/2:(rects[i].right+rects[i+1].left)/2;
      const offset=seam-origin;
      if(offset>-breadth/2&&offset<extent+breadth/2)boundaries.push({offset,index:i});
    }
    // Card dimensions allow at most two visible boundaries. Keep that fixed
    // ceiling even on unusual zoom/viewport sizes.
    const visible=boundaries.sort((a,b)=>Math.abs(a.offset-extent/2)-Math.abs(b.offset-extent/2)).slice(0,2).sort((a,b)=>a.index-b.index);
    if(!visible.length){layer.hidden=true;return;}
    layer.classList.toggle('is-stacked',stacked);
    Object.assign(layer.style,{left:box.left+'px',top:box.top+'px',width:box.width+'px',height:Math.max(0,box.height)+'px'});
    panes.forEach((pane,i)=>{
      const boundary=visible[i];pane.hidden=!boundary;if(!boundary)return;
      pane.dataset.boundary=String(boundary.index);
      Object.assign(pane.style,{
        width:(stacked?box.width:breadth)+'px',height:(stacked?breadth:Math.max(0,box.height-8))+'px',
        transform:stacked?'translate3d(0,'+(boundary.offset-breadth/2)+'px,0)':'translate3d('+(boundary.offset-breadth/2)+'px,4px,0)'
      });
    });
    layer.hidden=false;layer.classList.add('is-active');
  }
  [reduced,transparency,contrast].forEach(query=>query.addEventListener('change',()=>stop(true)));
  document.addEventListener('motion:change',()=>{if(!allowed())stop(true);});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)stop(true);});
  window.addEventListener('pagehide',()=>stop(true));
  return {arm,start,stop,suspend,render};
}
