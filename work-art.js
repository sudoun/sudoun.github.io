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
