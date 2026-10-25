// Persistent, narrow frost at each visible card boundary, including at rest.
// Reuses gallery layout updates; no continuous RAF loop or animated blur radius.
export function createGalleryGlass() {
  const supported=typeof CSS!=='undefined'&&typeof CSS.supports==='function'&&(CSS.supports('backdrop-filter','blur(1px)')||CSS.supports('-webkit-backdrop-filter','blur(1px)'));
  if(!supported)return {render(){}};
  const transparency=matchMedia('(prefers-reduced-transparency:reduce)');
  const contrast=matchMedia('(prefers-contrast:more)');
  const layer=document.createElement('div');
  layer.id='gallery-glass';layer.className='gallery-glass-layer';layer.hidden=true;
  layer.setAttribute('aria-hidden','true');layer.inert=true;
  const panes=Array.from({length:2},()=>{const pane=document.createElement('span');pane.className='gallery-glass-pane';pane.hidden=true;layer.append(pane);return pane;});
  document.body.append(layer);
  let layout;
  const allowed=()=>!transparency.matches&&!contrast.matches&&!document.hidden;
  function render(rects,stacked,root){
    layout=[rects,stacked,root];
    if(!allowed()){layer.hidden=true;return;}
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
    layer.hidden=false;
  }
  const refresh=()=>{if(layout)render(...layout);};
  [transparency,contrast].forEach(query=>query.addEventListener('change',refresh));
  document.addEventListener('visibilitychange',refresh);
  window.addEventListener('pageshow',refresh);
  window.addEventListener('pagehide',()=>{layer.hidden=true;});
  return {render};
}
