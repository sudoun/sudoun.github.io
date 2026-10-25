// A finite point illustration, not a construction of nonmeasurable pieces.
export const PARADOX_RADIUS = 112;
export const PARADOX_COLORS = ["#3e637f", "#ad6149", "#647b49", "#877197"];
export const PARADOX_PHASES = ["whole", "decomposed", "doubled"];
export const PARADOX_STEPS = [0, .36, .78];
const ease = x => { x = Math.max(0, Math.min(1, x)); return x*x*(3-2*x); };
const mix = (a,b,t) => a+(b-a)*t;
export function createParadoxPoints(count=960) {
  return Array.from({length:count},(_,i)=>{
    const y=1-2*(i+.5)/count, r=Math.sqrt(1-y*y), a=i*Math.PI*(3-Math.sqrt(5));
    // Curved color bands make the four sample groups legible as they move.
    const band=((a+y*2.4)%(Math.PI*2)+Math.PI*2)%(Math.PI*2);
    return {x:Math.cos(a)*r*PARADOX_RADIUS,y:y*PARADOX_RADIUS,z:Math.sin(a)*r*PARADOX_RADIUS,group:Math.floor(band/(Math.PI/2))};
  });
}
export function paradoxState(progress=0) {
  const t=((progress%1)+1)%1;
  const scatter=ease((t-.14)/.22), assemble=ease((t-.40)/.25), reset=ease((t-.89)/.11);
  const offsets=[[-130,-45],[110,-60],[-105,65],[130,55]];
  const groups=offsets.map(([dx,dy],g)=>{
    const target=g<2?[275,300]:[575,300];
    const spread=[425+dx*scatter,290+dy*scatter];
    const x=mix(mix(spread[0],target[0],assemble),425,reset);
    const y=mix(mix(spread[1],target[1],assemble),290,reset);
    const angle=(.28+g*.23)*scatter*(1-reset);
    return {x,y,z:0,cos:Math.cos(angle),sin:Math.sin(angle),radius:PARADOX_RADIUS};
  });
  const index=t<.20||t>=.94?0:t<.64?1:2;
  return {progress:t,index,phase:PARADOX_PHASES[index],groups,scatter,assemble,reset,
    sourceOpacity:1-scatter*(1-reset),doubleOpacity:assemble*(1-reset)};
}
export function transformParadoxPoint(point,state) {
  const g=state.groups[point.group];
  return {x:g.x+point.x*g.cos+point.z*g.sin,y:g.y+point.y,z:-point.x*g.sin+point.z*g.cos,group:point.group};
}
export function paradoxLayout(state,compact=false) {
  // Only translate centers for the narrow layout; all sample radii stay equal.
  const centre=(x,y,group=0)=>compact
    ? {x:210+(x-425)*.45,y:235+(y-290)*.6+(group<2?-110:110)*state.doubleOpacity}
    : {x,y};
  return {
    box:compact?{x:0,y:0,width:420,height:480}:{x:100,y:65,width:650,height:455},
    groups:state.groups.map((g,i)=>centre(g.x,g.y,i)),
    source:compact?{x:210,y:235}:{x:425,y:290},
    doubles:compact?[{x:142.5,y:131},{x:277.5,y:351}]:[{x:275,y:300},{x:575,y:300}]
  };
}
export function createParadoxStillSvg(compact=false) {
  const state=paradoxState(0),layout=paradoxLayout(state,compact),{x,y}=layout.source,b=layout.box;
  const points=createParadoxPoints(320),buckets=Array.from({length:16},()=>[]);
  for(const p of points){const depth=Math.min(3,Math.floor((p.z/PARADOX_RADIUS+1)*2));buckets[depth*4+p.group].push(p);}
  const dots=buckets.map((bucket,i)=>'<g fill="'+PARADOX_COLORS[i%4]+'" opacity="'+(.23+Math.floor(i/4)*.24).toFixed(2)+'">'+bucket.map(p=>'<circle cx="'+(x+p.x).toFixed(1)+'" cy="'+(y+p.y).toFixed(1)+'" r="'+(1.3+Math.floor(i/4)*.5).toFixed(1)+'"/>').join('')+'</g>').join('');
  return '<svg xmlns="http://www.w3.org/2000/svg" width="'+b.width+'" height="'+b.height+'" viewBox="'+[b.x,b.y,b.width,b.height].join(' ')+'"><defs><radialGradient id="ball" cx="30%" cy="23%" r="80%"><stop stop-color="#ffffff"/><stop offset=".42" stop-color="#f3f1e6"/><stop offset=".78" stop-color="#c6cfb5"/><stop offset="1" stop-color="#738568"/></radialGradient></defs><ellipse cx="'+x+'" cy="'+(y+137)+'" rx="78" ry="7" fill="#536142" opacity=".09"/><circle cx="'+x+'" cy="'+y+'" r="112" fill="url(#ball)" fill-opacity=".86" stroke="#7f9170" stroke-opacity=".35"/><g fill="none" stroke="#7a896d" stroke-width=".65" opacity=".26"><ellipse cx="'+x+'" cy="'+y+'" rx="112" ry="36"/><ellipse cx="'+x+'" cy="'+y+'" rx="42" ry="112" transform="rotate(-24 '+x+' '+y+')"/></g>'+dots+'</svg>';
}
