import {t} from './i18n.js';
export function warmContactConnection(profile){
 if(!/^https:\/\/formsubmit\.co\/ajax\/[^/?#]+$/.test(profile.contactEndpoint||'')||document.querySelector('[data-contact-connection]'))return;
 const link=document.createElement('link');link.rel='preconnect';link.href='https://formsubmit.co';link.crossOrigin='anonymous';link.dataset.contactConnection='';document.head.append(link);
}
export function initializeEmailContact(form,profile){
 if(!form)return;
 const status=document.querySelector('#form-status'),button=document.querySelector('#contact-submit');
 let pending=false,lastStatus='';
 const show=key=>{lastStatus=key;status.textContent=t(key);};
 document.addEventListener('locale:change',()=>{if(status.textContent&&lastStatus)status.textContent=t(lastStatus);button.textContent=t(pending?'contactSending':'submit');});
 form.addEventListener('submit',async event=>{
  event.preventDefault();if(pending||!form.reportValidity())return;
  if(form.elements.namedItem('_honey')?.value)return;
  if(navigator.onLine===false){show('contactOffline');return;}
  const email=form.elements.namedItem('email').value.trim();
  const endpoint=profile.contactEndpoint;
  if(!endpoint||!/^https:\/\/formsubmit\.co\/ajax\/[^/?#]+$/.test(endpoint)){
   show('contactUnavailable');return;
  }
  pending=true;button.disabled=true;button.textContent=t('contactSending');status.textContent='';lastStatus='';form.setAttribute('aria-busy','true');
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),15000);
  try{
   const body=new URLSearchParams({email,_replyto:email,_subject:(profile.name||'Website')+' · '+t('contactSubject'),_template:'table',_captcha:'false',_honey:'',项目:form.dataset.product||t('otherContact'),来源:location.origin});
   // A form-encoded POST avoids a separate CORS preflight. No automatic retry:
   // an uncertain response must not accidentally send duplicate notifications.
   const response=await fetch(endpoint,{method:'POST',headers:{'Accept':'application/json'},signal:controller.signal,keepalive:true,body});
   const result=await response.json();
   if(!response.ok||![true,'true'].includes(result.success))throw Error('Submission not accepted');
   form.reset();show('contactSuccess');
  }catch{
   show('contactFailure');
  }finally{
   clearTimeout(timer);pending=false;button.disabled=false;button.textContent=t('submit');form.removeAttribute('aria-busy');
  }
 });
}
