// Content softens only while leaving the viewport. Position, rather than a
// timeout, controls the material, including a half-finished gesture at rest.
export function createGalleryGlass() {
  const supported=typeof CSS!=='undefined'&&typeof CSS.supports==='function'&&(CSS.supports('backdrop-filter','blur(1px)')||CSS.supports('-webkit-backdrop-filter','blur(1px)'));
  if(!supported)return {arm(){},reset(){},render(){}};
  const transparency=matchMedia('(prefers-reduced-transparency:reduce)');
  const contrast=matchMedia('(prefers-contrast:more)');
  const reduced=matchMedia('(prefers-reduced-motion:reduce)');
  const panels=[...document.querySelectorAll('#gallery > .exhibit-panel')];
  const effects={products:'paper',soda:'ripple',facedrop:'slices',nearstage:'light',rubik:'blocks',quant:'scan',film:'iris',margin:'paper'};
  const layer=document.createElement('div');
  layer.id='gallery-glass';layer.className='gallery-glass-layer';layer.hidden=true;
  layer.setAttribute('aria-hidden','true');layer.inert=true;
  const pane=document.createElement('span');pane.className='gallery-glass-pane';layer.append(pane);
  document.body.append(layer);
  let layout,departure;
  const hide=()=>{layer.hidden=true;};
  function clearMaterial(){if(departure){departure.panel.classList.remove('is-departing');['--exit-power','--exit-signed'].forEach(name=>departure.panel.style.removeProperty(name));}}
  function reset(){
    clearMaterial();
    departure=null;hide();
  }
  function arm(index){
    if(departure||!layout||document.querySelector('dialog[open]')||reduced.matches||transparency.matches||contrast.matches||document.body.classList.contains('motion-paused'))return;
    const [rects,stacked,root]=layout,rect=rects[index];if(!rect)return;
    const panel=panels[index],effect=effects[panel.id]||'glass';
    const start=stacked?(parseFloat(getComputedStyle(panel).scrollMarginTop)||0)+(parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop)||0):root.left+(root.width-rect.width)/2;
    departure={index,stacked,start,moved:false,panel,effect};
    panel.dataset.transition=effect;layer.dataset.effect=effect;layer.dataset.project=panel.dataset.projectId||panel.id;
  }
  function polygon(points,direction){
    return 'polygon('+points.map(([x,y])=>{if(direction==='right')x=100-x;else if(direction==='top')[x,y]=[y,x];else if(direction==='bottom')[x,y]=[y,100-x];return x+'% '+y+'%';}).join(',')+')';
  }
  function shape(effect,direction,progress,power){
    let points;
    if(effect==='paper')points=[[0,0],[100-power*20,7+power*5],[100-power*20,93-power*5],[0,100]];
    else if(effect==='slices')points=[[0,0],[100,0],[100,16],[58,16],[58,32],[92,32],[92,49],[45,49],[45,66],[86,66],[86,83],[61,83],[61,100],[0,100]];
    else if(effect==='blocks')points=[[0,0],[45,0],[45,20],[100,20],[100,40],[65,40],[65,60],[100,60],[100,80],[45,80],[45,100],[0,100]];
    else if(effect==='light')points=[[0,0],[100,38],[100,62],[0,100]];
    if(points){pane.style.clipPath=polygon(points,direction);return;}
    if(effect==='iris'){
      const radius=(92-progress*58).toFixed(2)+'%';
      pane.style.clipPath=['left','right'].includes(direction)?'ellipse('+radius+' 72% at '+(direction==='left'?'0%':'100%')+' 50%)':'ellipse(72% '+radius+' at 50% '+(direction==='top'?'0%':'100%')+')';return;
    }
    pane.style.removeProperty('clip-path');
  }
  function render(rects,stacked,root){
    layout=[rects,stacked,root];
    if(!departure){hide();return;}
    if(departure.stacked!==stacked||transparency.matches||contrast.matches||reduced.matches||document.body.classList.contains('motion-paused')||document.hidden){reset();return;}
    const rect=rects[departure.index],offset=(stacked?rect.top:rect.left)-departure.start;
    const direction=offset<0?-1:1,neighbor=rects[departure.index-direction];
    const distance=neighbor?Math.abs(stacked?neighbor.top-rect.top:neighbor.left-rect.left):(stacked?rect.height:rect.width);
    const progress=Math.min(1,Math.abs(offset)/Math.max(1,distance));
    if(progress>.01)departure.moved=true;
    if(progress>=.995||(progress<.004&&departure.moved)){reset();return;}
    if(progress<.012){clearMaterial();hide();return;}
    const box=stacked?{left:12,top:0,right:innerWidth-12,bottom:innerHeight-65}:{left:0,top:root.top,right:innerWidth,bottom:root.bottom};
    let left=Math.max(box.left,rect.left),right=Math.min(box.right,rect.right),top=Math.max(box.top,rect.top),bottom=Math.min(box.bottom,rect.bottom);
    if(stacked){if(direction<0)bottom=Math.min(bottom,box.top+112);else top=Math.max(top,box.bottom-112);}
    else {if(direction<0)right=Math.min(right,box.left+Math.min(260,innerWidth*.2));else left=Math.max(left,box.right-Math.min(260,innerWidth*.2));}
    if(right-left<2||bottom-top<2){hide();return;}
    const smooth=(a,b,value)=>{const t=Math.max(0,Math.min(1,(value-a)/(b-a)));return t*t*(3-2*t);};
    const strength=smooth(.012,.15,progress)*smooth(0,.16,1-progress);
    const power=strength*Math.sin(progress*Math.PI),edge=stacked?(direction<0?'top':'bottom'):(direction<0?'left':'right');
    const panel=departure.panel;panel.classList.add('is-departing');panel.dataset.exitDirection=edge;
    panel.style.setProperty('--exit-power',power.toFixed(4));panel.style.setProperty('--exit-signed',(power*direction).toFixed(4));
    layer.dataset.direction=edge;
    layer.style.setProperty('--transition-progress',progress.toFixed(4));layer.style.setProperty('--transition-power',power.toFixed(4));
    layer.style.setProperty('--scan-position',(progress*100).toFixed(2)+'%');
    layer.style.setProperty('--ripple-size',(100+progress*80).toFixed(2)+'%');
    shape(departure.effect,edge,progress,power);
    layer.dataset.origin=String(departure.index);layer.dataset.progress=progress.toFixed(3);
    Object.assign(layer.style,{left:left+'px',top:top+'px',width:right-left+'px',height:bottom-top+'px',opacity:strength.toFixed(3)});
    layer.hidden=false;
  }
  [transparency,contrast,reduced].forEach(query=>query.addEventListener('change',reset));
  document.addEventListener('motion:change',reset);
  document.addEventListener('visibilitychange',reset);
  window.addEventListener('pagehide',reset);
  return {arm,reset,render};
}
