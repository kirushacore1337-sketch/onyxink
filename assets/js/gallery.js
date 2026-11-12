(()=>{
const btns=[...document.querySelectorAll(".fl button")],items=[...document.querySelectorAll(".work[data-s]")],dlg=document.createElement("dialog");
dlg.className="lb";dlg.innerHTML='<img alt=""><div><span></span><button class="btn btn--s" type="button">Закрыть</button></div>';
document.body.append(dlg);
const img=dlg.querySelector("img"),cap=dlg.querySelector("span");
btns.forEach(b=>b.addEventListener("click",()=>{btns.forEach(x=>x.setAttribute("aria-pressed",String(x===b)));items.forEach(i=>i.hidden=b.dataset.f!=="all"&&i.dataset.s!==b.dataset.f)}));
items.forEach(i=>i.addEventListener("click",()=>{const s=i.querySelector("img");img.src=s.src;img.alt=s.alt;cap.textContent=i.querySelector("span").textContent;dlg.showModal()}));
dlg.querySelector("button").addEventListener("click",()=>dlg.close());
dlg.addEventListener("click",e=>{if(e.target===dlg)dlg.close()});
})();
