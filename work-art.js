import {artworkSource} from './art-source.js';
import {createArtworkMotion} from './work-art-motion.js';

const compact=matchMedia('(max-width:800px)'),gallery=document.querySelector('#gallery');
const artworks=[...document.querySelectorAll('.project-art[data-artwork]')].map(stage=>({stage,panel:stage.closest('.exhibit-panel'),image:stage.querySelector('img'),source:'',failed:false}));
let warmTimer;
const limited=()=>navigator.connection?.saveData===true||/(^|-)2g$|^3g$/.test(navigator.connection?.effectiveType||'');
function warmNext(art){
 clearTimeout(warmTimer);
 if(limited())return;
 warmTimer=setTimeout(()=>{
  if(document.hidden||limited()||!art.panel.classList.contains('is-current'))return;
  const next=artworks[artworks.indexOf(art)+1];if(next)loadArtwork(next,'low');
 },500);
}
function loadArtwork(art,priority='high',retry=false){
 if(!art)return;
 const image=art.image,source=artworkSource(image.dataset.src,image.dataset.srcset,compact.matches);
 image.fetchPriority=priority;
 if(art.source===source.src&&(!art.failed||!retry))return;
 art.source=source.src;art.failed=false;art.stage.dataset.artState='loading';
 // Do not append a cache-busting query when recovering; reuse the public asset.
 if(retry){image.removeAttribute('src');image.removeAttribute('srcset');}
 if(source.srcset)image.srcset=source.srcset;else image.removeAttribute('srcset');
 image.src=source.src;
}
// Ambient motion uses the already decoded still; 3G alone need not disable it.
const motion=createArtworkMotion(artworks,()=>navigator.connection?.saveData===true);
for(const art of artworks){
 art.image.addEventListener('load',async()=>{
  try{await art.image.decode();}catch{/* The successful image can still paint. */}
  if(!art.image.complete||!art.image.naturalWidth)return;
  art.failed=false;art.stage.dataset.artState='ready';motion.sync();
  if(art.panel.classList.contains('is-current'))warmNext(art);
 });
 art.image.addEventListener('error',()=>{art.failed=true;art.stage.dataset.artState='error';motion.sync();});
}
function sync(retry=false){
 const target=gallery?.dataset.targetPanel;
 const art=artworks.find(item=>item.panel.classList.contains('is-current')&&(!target||item.panel.id===target));
 if(art)loadArtwork(art,'high',retry);
 motion.sync();
}
document.addEventListener('gallery:target',event=>{clearTimeout(warmTimer);motion.pause();const art=artworks.find(art=>art.panel.id===event.detail?.id);loadArtwork(art,'high',true);if(art?.panel.classList.contains('is-current'))motion.sync();});
document.addEventListener('gallery:change',()=>sync(true));
document.addEventListener('gallery:settled',()=>sync(true));
window.addEventListener('pageshow',()=>sync(true));
window.addEventListener('online',()=>sync(true));
compact.addEventListener('change',()=>sync(true));
navigator.connection?.addEventListener?.('change',()=>{clearTimeout(warmTimer);sync();});
sync();
