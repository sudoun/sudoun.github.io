// A continuously varying implicit solid. Inspired by the classical public-domain
// mug/torus construction by Lucas Vieira; geometry and browser renderer are ours.
export const HOMEOMORPHISM_MODEL={bodyRadius:1.08,bodyHalfHeight:1.20,rounding:.04,innerRadius:.84,handleX:1.03,handleRadius:.82,handleTube:.20,handleCut:.92,torusX:.80,torusRadius:1.13,torusTube:.38,jointSmooth:.10,filledFloor:1.80,cupFloor:-.93};
export const clamp01=n=>Math.max(0,Math.min(1,n));
export const smooth01=n=>{n=clamp01(n);return n*n*(3-2*n);};
export function deformationState(progress=0){
  const p=clamp01(progress),blend=smooth01(p/.6),indent=smooth01((p-.6)/.4);
  return {progress:p,blend,cavityFloor:HOMEOMORPHISM_MODEL.filledFloor+(HOMEOMORPHISM_MODEL.cupFloor-HOMEOMORPHISM_MODEL.filledFloor)*indent,phase:p<.01?'torus':p>.99?'mug':'deforming'};
}
export function autoMorphProgress(clock=0){
  const t=((clock%1)+1)%1;
  return t<.15?0:t<.42?smooth01((t-.15)/.27):t<.62?1:t<.92?1-smooth01((t-.62)/.30):0;
}
export function clockForProgress(progress=0){
  const p=clamp01(progress);if(p===0)return 0;if(p===1)return .43;
  let low=0,high=1;for(let i=0;i<22;i++){const mid=(low+high)/2;if(smooth01(mid)<p)low=mid;else high=mid;}
  return .15+.27*(low+high)/2;
}
function smoothMin(a,b,k){const h=clamp01(.5+.5*(b-a)/k);return b+(a-b)*h-k*h*(1-h);}
export function homeomorphismDistance(x,y,z,progress=0){
  const m=HOMEOMORPHISM_MODEL,state=deformationState(progress);
  const dx=Math.hypot(x,z)-m.bodyRadius,dy=Math.abs(y)-m.bodyHalfHeight;
  const body=Math.hypot(Math.max(dx,0),Math.max(dy,0))+Math.min(Math.max(dx,dy),0)-m.rounding;
  const handle=Math.max(Math.hypot(Math.hypot(x-m.handleX,y)-m.handleRadius,z)-m.handleTube,m.handleCut-x);
  const mug=smoothMin(body,handle,m.jointSmooth);
  const ring=Math.hypot(Math.hypot(x-m.torusX,y)-m.torusRadius,z)-m.torusTube;
  const filled=ring+(mug-ring)*state.blend;
  const cavity=Math.max(Math.hypot(x,z)-m.innerRadius,state.cavityFloor-y);
  return Math.max(filled,-cavity);
}
export function createHomeomorphismStillSvg(compact=false){
  const width=compact?420:650,height=compact?480:455,x=width/2,y=height/2-5;
  return '<svg xmlns="http://www.w3.org/2000/svg" width="'+width+'" height="'+height+'" viewBox="0 0 '+width+' '+height+'"><defs><linearGradient id="ceramic" x1=".1" y1="0" x2=".8" y2="1"><stop stop-color="#fffdf0"/><stop offset=".35" stop-color="#dfe8cb"/><stop offset=".7" stop-color="#b4c6a0"/><stop offset="1" stop-color="#6f896b"/></linearGradient><filter id="soft"><feGaussianBlur stdDeviation="7"/></filter></defs><ellipse cx="'+x+'" cy="'+(y+175)+'" rx="124" ry="8" fill="#445740" opacity=".12" filter="url(#soft)"/><g transform="rotate(-18 '+x+' '+y+')"><ellipse cx="'+x+'" cy="'+y+'" rx="133" ry="110" fill="none" stroke="url(#ceramic)" stroke-width="78"/><ellipse cx="'+x+'" cy="'+y+'" rx="93" ry="71" fill="none" stroke="#627c5b" stroke-width="2" opacity=".45"/><path d="M'+(x-145)+' '+(y-38)+'A144 123 0 0 1 '+(x+105)+' '+(y-85)+'" fill="none" stroke="#fffef6" stroke-width="7" stroke-linecap="round" opacity=".65"/></g></svg>';
}
