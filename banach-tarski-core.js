// A finite point illustration, not a construction of nonmeasurable pieces.
export const PARADOX_RADIUS = 112;
export const PARADOX_COLORS = ["#596d8d", "#a35f49", "#6d8062", "#82759b"];
export const PARADOX_PHASES = ["whole", "decomposed", "doubled"];
export const PARADOX_STEPS = [0, .36, .78];
const ease = x => { x = Math.max(0, Math.min(1, x)); return x*x*(3-2*x); };
const mix = (a,b,t) => a+(b-a)*t;
export function createParadoxPoints(count=960) {
  return Array.from({length:count},(_,i)=>{
    const y=1-2*(i+.5)/count, r=Math.sqrt(1-y*y), a=i*Math.PI*(3-Math.sqrt(5));
    return {x:Math.cos(a)*r*PARADOX_RADIUS,y:y*PARADOX_RADIUS,z:Math.sin(a)*r*PARADOX_RADIUS,group:i%4};
  });
}
export function paradoxState(progress=0) {
  const t=((progress%1)+1)%1;
  const scatter=ease((t-.14)/.22), assemble=ease((t-.40)/.25), reset=ease((t-.89)/.11);
  const offsets=[[-130,-70],[110,-90],[-105,100],[130,85]];
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
export function createParadoxStillSvg() {
  const state=paradoxState(0), points=createParadoxPoints(320).map(p=>transformParadoxPoint(p,state)).sort((a,b)=>a.z-b.z);
  const dots=points.map(p=>'<circle cx="'+p.x.toFixed(1)+'" cy="'+p.y.toFixed(1)+'" r="'+(1.25+(p.z/PARADOX_RADIUS+1)*.65).toFixed(1)+'" fill="'+PARADOX_COLORS[p.group]+'" opacity="'+(.3+(p.z/PARADOX_RADIUS+1)*.31).toFixed(2)+'"/>').join('');
  return '<svg xmlns="http://www.w3.org/2000/svg" width="800" height="650" viewBox="0 0 800 650"><defs><radialGradient id="ball" cx="32%" cy="25%"><stop stop-color="#ffffff" stop-opacity=".95"/><stop offset=".65" stop-color="#dfe6d0" stop-opacity=".46"/><stop offset="1" stop-color="#677c65" stop-opacity=".18"/></radialGradient></defs><g fill="#596253" font-family="Arial,sans-serif" text-anchor="middle"><text x="425" y="70" font-size="13" letter-spacing="3">BANACH–TARSKI</text><text x="425" y="516" font-size="11" letter-spacing="2">ONE BALL → TWO</text><text x="425" y="543" font-size="10" fill="#8b9384">A CONCEPTUAL STUDY OF INFINITY</text></g><circle cx="425" cy="290" r="112" fill="url(#ball)" stroke="#a1ad96" stroke-opacity=".45"/><g fill="none" stroke="#99a58e" stroke-width=".7" opacity=".38"><ellipse cx="425" cy="290" rx="112" ry="36"/><ellipse cx="425" cy="290" rx="42" ry="112" transform="rotate(-24 425 290)"/><ellipse cx="425" cy="290" rx="72" ry="112" transform="rotate(25 425 290)"/></g>'+dots+'<g stroke="#a2ac96" stroke-width=".8"><path d="M313 440h224m-224-4v8m224-8v8"/></g><text x="425" y="461" text-anchor="middle" font-family="Georgia,serif" font-size="14" fill="#6c7863">r</text></svg>';
}
