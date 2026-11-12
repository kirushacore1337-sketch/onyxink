(()=>{
const p=document.body.dataset.p,
L=[["index","Главная"],["portfolio","Работы"],["about","Мастер"],["pricing","Цены"],["contacts","Контакты"]],
nav=L.map(([h,t])=>`<a href="${h}.html"${h===p?' aria-current="page"':""}>${t}</a>`).join("");
const hd=document.getElementById("hd");
hd.className="hd";
hd.innerHTML=`<div class="c hd__in"><a class="logo" href="index.html">ONYX<i>INK</i></a><nav id="nav" aria-label="Основное">${nav}</nav><a class="btn btn--s" href="pricing.html#book">Записаться</a><button class="bur" aria-label="Меню" aria-expanded="false"></button></div>`;
const b=hd.querySelector(".bur");
b.addEventListener("click",()=>b.setAttribute("aria-expanded",String(hd.classList.toggle("open"))));
hd.querySelectorAll("#nav a").forEach(a=>a.addEventListener("click",()=>{hd.classList.remove("open");b.setAttribute("aria-expanded","false")}));
const ft=document.getElementById("ft");
ft.className="ft";
ft.innerHTML=`<div class="c"><div class="ft__g"><div><a class="logo" href="index.html">ONYX<i>INK</i></a><p style="margin-top:1rem;max-width:22rem">Авторская татуировка. Один мастер, одна студия, ни одной случайной линии.</p></div><div><h4>Разделы</h4><ul>${L.map(([h,t])=>`<li><a href="${h}.html">${t}</a></li>`).join("")}</ul></div><div><h4>Связь</h4><ul><li><a href="tel:+79990000000">+7 (999) 000-00-00</a></li><li><a href="https://t.me/onyxink">Telegram: @onyxink</a></li><li><a href="mailto:hello@onyxink.ru">hello@onyxink.ru</a></li></ul></div></div><small>© 2026 Onyx Ink. Все права защищены.</small></div>`;
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll(".rise").forEach(el=>io.observe(el));
})();
