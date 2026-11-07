const menu=document.querySelector('.menu-toggle'),mobileNav=document.querySelector('.mobile-nav');
function closeMenu(){mobileNav.hidden=true;menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Abrir menú');}
menu.addEventListener('click',()=>{const open=mobileNav.hidden;mobileNav.hidden=!open;menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!mobileNav.hidden){closeMenu();menu.focus();}});
const academy=document.querySelector('.academy');academy.addEventListener('click',()=>{const panel=document.querySelector('#academy-panel');panel.hidden=!panel.hidden;academy.setAttribute('aria-expanded',String(!panel.hidden));});
function frame(url,title){const f=document.createElement('iframe');f.src=url;f.title=title;f.allow='encrypted-media; fullscreen; picture-in-picture';f.allowFullscreen=true;f.referrerPolicy='strict-origin-when-cross-origin';return f;}
function loadVideo(box){if(!box.querySelector('iframe'))box.replaceChildren(frame(`https://www.youtube.com/embed/${box.dataset.video}?playsinline=1&rel=0&start=${box.dataset.start||0}`,box.dataset.title));box.querySelector('iframe').focus();}
document.querySelectorAll('.video-poster').forEach(b=>b.addEventListener('click',()=>loadVideo(b.closest('.video-shell'))));
document.querySelectorAll('[data-play-target]').forEach(b=>b.addEventListener('click',()=>loadVideo(document.getElementById(b.dataset.playTarget))));
const player=document.querySelector('.music-player'),embed=document.querySelector('#music-embed');
document.querySelectorAll('.track-play').forEach(b=>b.addEventListener('click',()=>{
 document.querySelectorAll('.release-row').forEach(row=>row.classList.remove('selected'));b.closest('.release-row').classList.add('selected');
 const url=b.dataset.provider==='youtube'?`https://www.youtube.com/embed/${b.dataset.source}?playsinline=1&rel=0`:`https://w.soundcloud.com/player/?url=${encodeURIComponent(b.dataset.source)}&auto_play=false&color=%23747feb&hide_related=true&show_comments=false&show_reposts=false&visual=false`;
 embed.replaceChildren(frame(url,b.dataset.title+' — ALLEN KS'));player.hidden=false;player.classList.toggle('youtube',b.dataset.provider==='youtube');document.querySelector('#now-playing').textContent=b.dataset.title;embed.querySelector('iframe').focus();
}));
document.querySelector('.close-player').addEventListener('click',()=>{embed.replaceChildren();player.hidden=true;const row=document.querySelector('.release-row.selected');row?.querySelector('button').focus();row?.classList.remove('selected');});
for(const el of document.querySelectorAll('[data-show-date]'))if(Date.parse(el.dataset.showDate)<=Date.now())el.remove();
