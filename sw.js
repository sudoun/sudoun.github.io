/* Generated public-asset manifest. No forms, POSTs, video, or third-party data. */
const ASSETS={"assets/art/slidefetch-art-1280-v1.webp":"fed52a4c82dc","assets/art/slidefetch-art-640-v1.webp":"ed9f33715753","assets/art/soda-art-1280-v1.webp":"2ed8b82800d2","assets/art/soda-art-640-v1.webp":"39e9a65a3988","assets/art/facedrop-art-1280-v1.webp":"b2f177b23b97","assets/art/facedrop-art-640-v1.webp":"2b5cc2e700a1","assets/art/nearstage-art-1280-v1.webp":"8e9f8472897f","assets/art/nearstage-art-640-v1.webp":"24bf849e3839","assets/art/rubik-art-1280-v1.webp":"25041d5080fb","assets/art/rubik-art-640-v1.webp":"6712ec63ec90","assets/art/quant-art-1280-v1.webp":"0eb0b0e751db","assets/art/quant-art-640-v1.webp":"6557edc727dd","assets/art/film-art-1280-v1.webp":"98c4d6701ef2","assets/art/film-art-640-v1.webp":"7cd8c69968b7","assets/art/margin-art-1280-v1.webp":"3b44b58109f8","assets/art/margin-art-640-v1.webp":"dc3bb520c6cc","assets/sculpture.30249cd0e9d4.js":"30249cd0e9d4","assets/paper.cb6cb806084b.js":"cb6cb806084b","assets/projects.3705991612bd.js":"3705991612bd","assets/inter-tight-medium-ui.woff2":"9a21b5c602a7","assets/inter-tight-medium.woff2":"ccb89dcebf2b","assets/newsreader-italic-ui.woff2":"16417add180f","assets/newsreader-italic.woff2":"c6118d70e5e9","assets/newsreader-regular.woff2":"33a07e595a66"};
const ASSET_CACHE='dale-public-assets-v1',PAGE_CACHE='dale-public-pages-v1';
const root=new URL('./',self.location.href),assetKeys=new Set(Object.entries(ASSETS).map(([path,revision])=>new URL(path+'?revision='+revision,root).href));
let maintenance=Promise.resolve();
function store(cacheName,key,response,limit){
 // Serialize writes and pruning so parallel image loads cannot exceed the bound.
 maintenance=maintenance.catch(()=>{}).then(async()=>{const cache=await caches.open(cacheName);await cache.put(key,response);const keys=await cache.keys();for(const old of keys.slice(0,Math.max(0,keys.length-limit)))await cache.delete(old);});
 return maintenance.catch(()=>{});
}
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 try{const cache=await caches.open(ASSET_CACHE);for(const request of await cache.keys())if(!assetKeys.has(request.url))await cache.delete(request);}catch{/* Storage is optional. */}
 await self.clients.claim();
})()));
function pageKey(url){
 const version=url.searchParams.get('v');
 if([...url.searchParams.keys()].some(key=>!['v','cache-test'].includes(key))||version&&!/^[a-z0-9-]{1,80}$/i.test(version))return null;
 const key=new URL('./',root);if(version)key.searchParams.set('v',version);return key.href;
}
async function asset(request,key,event){
 try{const cached=await caches.match(key,{cacheName:ASSET_CACHE});if(cached)return cached;}catch{/* Use the network if storage is disabled. */}
 const response=await fetch(request);
 if(response.ok&&response.type!=='opaque')event.waitUntil(store(ASSET_CACHE,key,response.clone(),32));
 return response;
}
async function navigation(request,key,event){
 let cached;try{cached=await caches.match(key,{cacheName:PAGE_CACHE});}catch{/* No persistent storage. */}
 const network=fetch(request).then(response=>{
  if(response.ok&&response.headers.get('content-type')?.includes('text/html'))event.waitUntil(store(PAGE_CACHE,key,response.clone(),4));
  return response;
 });
 if(!cached){try{return await network;}catch{return new Response('暂时无法连接，请联网后刷新。',{status:503,headers:{'Content-Type':'text/plain; charset=utf-8'}});}}
 // Only an exact previously visited version can fall back to its cached shell.
 // A new ?v=release always goes to the network, never to another version's HTML.
 let timer;const slow=new Promise(resolve=>{timer=setTimeout(()=>resolve(cached),1200);});
 const result=await Promise.race([network.catch(()=>cached),slow]);clearTimeout(timer);
 event.waitUntil(network.then(()=>{},()=>{}));return result;
}
self.addEventListener('fetch',event=>{
 const request=event.request,url=new URL(request.url);
 if(request.method!=='GET'||request.headers.has('range')||url.origin!==root.origin||!url.pathname.startsWith(root.pathname))return;
 const path=url.pathname.slice(root.pathname.length);
 if(request.mode==='navigate'&&['','index.html'].includes(path)){const key=pageKey(url);if(key)event.respondWith(navigation(request,key,event));return;}
 if(ASSETS[path]&&!url.search)event.respondWith(asset(request,new URL(path+'?revision='+ASSETS[path],root).href,event));
});
