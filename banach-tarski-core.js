// A storyboard of the theorem's statement, not a computed decomposition.
// Abstract set names have no drawable geometric boundary or point samples.
export const PARADOX_RADIUS=112;
export const PARADOX_PHASES=['whole','decomposed','doubled'];
export const PARADOX_STEPS=[.04,.39,.76];
export const PARADOX_STATEMENTS=[
  '原球 B：一个半径为 r 的实心球。',
  '有限集合分解：包含不可测集合。',
  '定理结论：两个完整实心球，各自半径仍为 r。'
];
const ease=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x);};
export function paradoxState(progress=0) {
  const t=((progress%1)+1)%1;
  const partition=ease((t-.18)/.10),conclusion=ease((t-.52)/.10),reset=ease((t-.90)/.10);
  const index=t<.23||t>=.95?0:t<.57?1:2;
  return {progress:t,index,phase:PARADOX_PHASES[index],
    sourceOpacity:(1-partition)*(1-reset)+reset,
    symbolOpacity:partition*(1-conclusion)*(1-reset),
    doubleOpacity:conclusion*(1-reset)};
}
export function paradoxLayout(_state,compact=false) {
  return {
    box:compact?{x:0,y:0,width:420,height:480}:{x:100,y:65,width:650,height:455},
    source:compact?{x:210,y:235}:{x:425,y:290},
    doubles:compact?[{x:142.5,y:131},{x:277.5,y:351}]:[{x:275,y:300},{x:575,y:300}],
    symbols:compact?[{x:130,y:175,label:'A₁'},{x:285,y:175,label:'A₂'},{x:130,y:315,label:'⋯'},{x:285,y:315,label:'Aₙ'}]:[{x:230,y:290,label:'A₁'},{x:360,y:290,label:'A₂'},{x:490,y:290,label:'⋯'},{x:620,y:290,label:'Aₙ'}]
  };
}
export function createParadoxStillSvg(compact=false) {
  const {source:{x,y},box:b}=paradoxLayout(paradoxState(0),compact);
  return '<svg xmlns="http://www.w3.org/2000/svg" width="'+b.width+'" height="'+b.height+'" viewBox="'+[b.x,b.y,b.width,b.height].join(' ')+'"><defs><radialGradient id="ball" cx="30%" cy="23%" r="80%"><stop stop-color="#ffffff"/><stop offset=".42" stop-color="#eef0e2"/><stop offset=".78" stop-color="#bdcbaa"/><stop offset="1" stop-color="#697f5b"/></radialGradient></defs><ellipse cx="'+x+'" cy="'+(y+137)+'" rx="78" ry="7" fill="#536142" opacity=".09"/><circle cx="'+x+'" cy="'+y+'" r="112" fill="url(#ball)" stroke="#7f9170" stroke-opacity=".35"/><g fill="none" stroke="#7a896d" stroke-width=".65" opacity=".36"><ellipse cx="'+x+'" cy="'+y+'" rx="112" ry="36"/><ellipse cx="'+x+'" cy="'+y+'" rx="42" ry="112" transform="rotate(-24 '+x+' '+y+')"/></g><path d="M'+x+' '+y+'h112" stroke="#526744" stroke-width="1"/><circle cx="'+x+'" cy="'+y+'" r="2" fill="#526744"/><g fill="#425538" font-family="Georgia,serif" font-style="italic"><text x="'+(x-38)+'" y="'+(y+10)+'" font-size="28">B</text><text x="'+(x+56)+'" y="'+(y-8)+'" font-size="19">r</text></g></svg>';
}
