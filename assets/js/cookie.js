(()=>{
const K="ck-ok";try{if(localStorage.getItem(K))return}catch(e){}
const d=document.createElement("div");d.className="ckb";d.setAttribute("role","region");d.setAttribute("aria-label","Cookie");
d.innerHTML='<p>Мы используем cookie, чтобы сайт работал корректно.</p><button class="btn btn--s" type="button">Принять</button>';
d.querySelector("button").addEventListener("click",()=>{try{localStorage.setItem(K,"1")}catch(e){}d.remove()});
document.body.append(d);
})();
