// Bound the decoded texture and transfer size on small screens, including DPR 3.
export function artworkSource(desktop,srcset,compact){
 const small=srcset?.split(',').map(value=>value.trim().split(/\s+/)).find(([,width])=>width==='640w')?.[0];
 return {src:compact&&small?small:desktop,srcset:compact&&small?'':srcset||''};
}
