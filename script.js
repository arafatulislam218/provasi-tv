function menu(){let n=document.querySelector('nav');if(!n)return;n.style.display=n.style.display==='flex'?'none':'flex';n.style.position='absolute';n.style.top='76px';n.style.right='15px';n.style.background='#fff';n.style.padding='18px';n.style.flexDirection='column';n.style.boxShadow='0 12px 30px #0002';}
function filterNews(){let q=document.getElementById('search').value.toLowerCase();document.querySelectorAll('#newslist article').forEach(a=>a.style.display=a.innerText.toLowerCase().includes(q)?'block':'none')}
function filterCat(c){document.querySelectorAll('#newslist article').forEach(a=>a.style.display=a.dataset.cat===c?'block':'none')}
function showAll(){document.querySelectorAll('#newslist article').forEach(a=>a.style.display='block')}
function sendForm(){alert('ধন্যবাদ! ডেমো ফর্মটি কাজ করেছে। আসল ইমেইল/WhatsApp সংযোগ পরে যুক্ত করা যাবে।');return false}
