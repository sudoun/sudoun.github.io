// Public files only; registration waits until the first page has finished loading.
if('serviceWorker' in navigator&&(location.hostname==='sudoun.github.io'||new URLSearchParams(location.search).has('cache-test'))){
 const register=()=>setTimeout(()=>{
  const run=()=>navigator.serviceWorker.register('./sw.js',{scope:'./',updateViaCache:'none'}).catch(()=>{/* Network and private browsing remain usable without storage. */});
  if('requestIdleCallback' in window)requestIdleCallback(run,{timeout:1500});else run();
 },2500);
 if(document.readyState==='complete')register();else window.addEventListener('load',register,{once:true});
}
