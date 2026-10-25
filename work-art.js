import {safePublicUrl} from './site-core.js';

const products=window.DALE_PRODUCTS?.products||[];
const artworks=[...document.querySelectorAll('.project-art[data-artwork]')].map(stage=>({stage,panel:stage.closest('.exhibit-panel'),image:stage.querySelector('img'),product:products.find(p=>p.id===stage.dataset.artwork),requested:false}));
const saveData=navigator.connection?.saveData===true;
let warmTimer;
function warmNext(art){
  clearTimeout(warmTimer);
  if(saveData||/(^|-)2g$|^3g$/.test(navigator.connection?.effectiveType||''))return;
  warmTimer=setTimeout(()=>{
    if(document.hidden||!art.panel.classList.contains('is-current'))return;
    const next=artworks[artworks.indexOf(art)+1];if(next)loadArtwork(next,'low');
  },500);
}
function loadArtwork(art,priority='high'){
  if(!art)return;
  const image=art.image;image.fetchPriority=priority;
  if(art.requested)return;
  art.requested=true;art.stage.dataset.artState='loading';
  image.addEventListener('load',async()=>{
    try{await image.decode();}catch{/* A successfully loaded still can paint directly. */}
    art.stage.dataset.artState='ready';
    if(art.panel.classList.contains('is-current'))warmNext(art);
  },{once:true});
  image.addEventListener('error',()=>{art.stage.dataset.artState='error';},{once:true});
  if(image.dataset.srcset)image.srcset=image.dataset.srcset;
  image.src=image.dataset.src;
}
function sync(){
  const target=document.querySelector('#gallery')?.dataset.targetPanel;
  const art=artworks.find(item=>item.panel.classList.contains('is-current')&&(!target||item.panel.id===target));
  if(art)loadArtwork(art);
}
document.addEventListener('gallery:target',event=>loadArtwork(artworks.find(art=>art.panel.id===event.detail?.id)));
document.addEventListener('gallery:change',sync);
document.addEventListener('gallery:settled',sync);
window.addEventListener('pageshow',sync);
sync();

// Original film playback is a separate, explicit action. Artwork never turns
// into a recording and no video resource is requested by gallery navigation.
const player=document.querySelector('#demo-player'),video=document.querySelector('#demo-player-video');
document.querySelectorAll('[data-art-demo]').forEach(button=>button.addEventListener('click',()=>{
  const product=products.find(p=>p.id===button.dataset.artDemo);
  if(!product?.demo||!player||!video)return;
  document.querySelector('#demo-player-title').textContent=product.name;
  document.querySelector('#demo-player-description').textContent=product.demoDescription;
  document.querySelector('#demo-player-note').textContent=product.demoNote||'';
  document.querySelector('#demo-player-error').hidden=true;
  const destination=document.querySelector('#demo-player-destination'),url=safePublicUrl(product.url);
  destination.hidden=!url;if(url)destination.href=url;else destination.removeAttribute('href');
  video.poster=artworks.find(art=>art.product.id===product.id)?.image.currentSrc||product.preview;
  video.muted=true;video.src=product.demo;player.showModal();
  video.play().catch(()=>{/* Native controls retain explicit playback. */});
}));
if(player&&video){
  document.querySelector('[data-demo-close]').addEventListener('click',()=>player.close());
  player.addEventListener('close',()=>{video.pause();video.removeAttribute('src');video.load();});
  player.addEventListener('click',event=>{
    if(event.target!==player)return;const r=player.getBoundingClientRect();
    if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)player.close();
  });
  video.addEventListener('error',()=>{if(video.getAttribute('src'))document.querySelector('#demo-player-error').hidden=false;});
  document.addEventListener('visibilitychange',()=>{if(document.hidden)video.pause();});
  window.addEventListener('pagehide',()=>video.pause());
}
