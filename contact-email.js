export function warmContactConnection(profile){
 if(!/^https:\/\/formsubmit\.co\/ajax\/[^/?#]+$/.test(profile.contactEndpoint||'')||document.querySelector('[data-contact-connection]'))return;
 const link=document.createElement('link');link.rel='preconnect';link.href='https://formsubmit.co';link.crossOrigin='anonymous';link.dataset.contactConnection='';document.head.append(link);
}
export function initializeEmailContact(form,profile){
 if(!form)return;
 const status=document.querySelector('#form-status'),button=document.querySelector('#contact-submit');
 let pending=false;
 form.addEventListener('submit',async event=>{
  event.preventDefault();if(pending||!form.reportValidity())return;
  if(form.elements.namedItem('_honey')?.value)return;
  if(navigator.onLine===false){status.textContent='网络已断开，邮箱会保留，请联网后重试。';return;}
  const email=form.elements.namedItem('email').value.trim();
  const endpoint=profile.contactEndpoint;
  if(!endpoint||!/^https:\/\/formsubmit\.co\/ajax\/[^/?#]+$/.test(endpoint)){
   status.textContent='联系入口暂未就绪，请稍后再试。';return;
  }
  pending=true;button.disabled=true;button.textContent='正在提交…';status.textContent='';form.setAttribute('aria-busy','true');
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);
  try{
   const body=new URLSearchParams({email,_replyto:email,_subject:(profile.name||'个人网站')+' · 新的联系邮箱',_template:'table',_captcha:'false',_honey:'',项目:form.dataset.product||'其他联系',来源:location.origin});
   // A form-encoded POST avoids a separate CORS preflight. No automatic retry:
   // an uncertain response must not accidentally send duplicate notifications.
   const response=await fetch(endpoint,{method:'POST',headers:{'Accept':'application/json'},signal:controller.signal,keepalive:true,body});
   const result=await response.json();
   if(!response.ok||![true,'true'].includes(result.success))throw Error('Submission not accepted');
   form.reset();status.textContent='邮箱已提交，感谢联系。';
  }catch{
   status.textContent='暂时无法提交，邮箱仍保留在输入框中，请稍后重试。';
  }finally{
   clearTimeout(timer);pending=false;button.disabled=false;button.textContent='留下邮箱 ↗';form.removeAttribute('aria-busy');
  }
 });
}
