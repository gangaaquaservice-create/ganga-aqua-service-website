const products = [
 {id:"water",title:"Mineral Water",sub:"Unbranded water bottles • 1L, 500ml and 200ml",icon:"💧",items:[
  ["1L Bottle","size","1L"],["500ml Bottle","size small","500ml"],["200ml Bottle","size xs","200ml"]]},
 {id:"cooled",title:"Cooled Water Jars",sub:"Cooled drinking-water jars in different colours",icon:"🫙",items:[
  ["Sky Blue Jar","cool blue","Sky blue"],["Pink Jar","cool pink","Pink"],["Orange Jar","cool orange","Orange"]]},
 {id:"empty",title:"Empty Jars & Dispensers",sub:"10L and 20L jars • with/without tap • dispensers",icon:"🫙",items:[
  ["20L Empty Jar • No Tap","empty","20L • No tap"],["20L Jar • With Tap","empty tap","20L • Tap"],["10L Empty Jar • No Tap","empty small","10L • No tap"],["10L Jar • With Tap","empty small tap","10L • Tap"],["Manual Dispenser","dispenser","Tabletop dispenser"]]},
 {id:"cold",title:"Cold Drinks",sub:"Selected leading brands and varieties",icon:"🥤",items:[
  ["Pepsi","brand pepsi","Pepsi"],["Sting","brand sting","Sting"],["Maaza","brand maaza","Maaza"],["Sprite","brand sprite","Sprite"],["Limca","brand limca","Limca"],["7UP","brand seven","7UP"],["Thums Up","brand thums","Thums Up"],["Bindu Jeera Soda","brand soda","Bindu Jeera Soda"]]},
 {id:"snacks",title:"Biscuits, Chocolates, Wafers & Chips",sub:"Britannia, Parle and popular snack varieties",icon:"🍪",items:[
  ["Britannia Biscuits","pack britannia","Britannia"],["Parle Biscuits","pack parle","Parle"],["Wafers","snackpack","Wafers"],["Chips","snackpack chips","Chips"],["Chocolate","choco","Chocolate"]]},
 {id:"kharata",title:"Kharata",sub:"Floor brooms and handled broom styles",icon:"🧹",items:[
  ["Long Twig Kharata","broom","Long twig broom"],["Handled Kharata","broom handled-broom","Handled broom"],["Heavy Kharata","broom heavy","Heavy floor broom"]]},
 {id:"mops",title:"Mops",sub:"Everyday floor-cleaning mop options",icon:"🧽",items:[
  ["Floor Mop","mop","Floor mop"],["Wet Mop","mop wet","Wet mop"]]},
 {id:"wipers",title:"Wipers",sub:"Floor and glass cleaning wipers",icon:"🧹",items:[
  ["Floor Wiper","wiper","Floor wiper"],["Glass Wiper","wiper glass","Glass wiper"]]},
 {id:"sweets",title:"Sweets & Traditional Snacks",sub:"Laddu, Chikki and Barfi",icon:"🍬",items:[
  ["Laddu","laddu","Laddu"],["Chikki","sweet chikki","Chikki"],["Barfi","sweet barfi","Barfi"]]},
 {id:"dishes",title:"Use & Throw Dishes",sub:"Plates • bowls • glasses • tea cups",icon:"🍽️",items:[
  ["Plates","dish","Disposable plates"],["Bowls","dish bowl","Disposable bowls"],["Glasses","cup","Disposable glasses"],["Tea Cups","tea","Disposable tea cups"]]}
];

const grid = document.getElementById("productGrid");
grid.innerHTML = products.map(p => `
 <article class="card">
   <div class="product-icon">${p.icon}</div>
   <h3>${p.title}</h3>
   <p>${p.sub.replace("Selected leading brands and varieties","Leading brands").replace("Britannia, Parle and popular snack varieties","Britannia • Parle • wafers • chips")}</p>
   <button class="arrow-btn" data-id="${p.id}" aria-label="View ${p.title}">→</button>
 </article>`).join("");

const modal = document.getElementById("productModal");
const title = document.getElementById("modalTitle");
const sub = document.getElementById("modalSub");
const gallery = document.getElementById("gallery");

function visual(cls){
  if(cls==="size") return `<div class="visual"><div class="prod-bottle size-b"></div></div>`;
  if(cls==="size small") return `<div class="visual"><div class="prod-bottle size-s"></div></div>`;
  if(cls==="size xs") return `<div class="visual"><div class="prod-bottle size-xs"></div></div>`;
  if(cls==="cool blue") return `<div class="visual"><div class="cool-jar blue"></div></div>`;
  if(cls==="cool pink") return `<div class="visual"><div class="cool-jar pink"></div></div>`;
  if(cls==="cool orange") return `<div class="visual"><div class="cool-jar orange"></div></div>`;
  if(cls.includes("tap")) return `<div class="visual"><div class="empty-jar"><i class="tap"></i></div></div>`;
  if(cls.startsWith("empty")) return `<div class="visual"><div class="empty-jar"></div></div>`;
  if(cls==="dispenser") return `<div class="visual"><div class="dispenser"></div></div>`;
  if(cls.includes("brand")){
    let name=cls.split(" ")[1]||"brand";
    return `<div class="visual"><div class="brand-bottle ${name}"><span>${name.toUpperCase()}</span></div><div class="brand-bottle ${name}"><span>${name.toUpperCase()}</span></div></div>`;
  }
  if(cls.includes("pack")) return `<div class="visual"><div class="snack-pack ${cls.includes("britannia")?"britannia":"parle"}"></div></div>`;
  if(cls.includes("snackpack")) return `<div class="visual"><div class="snack-pack"></div></div>`;
  if(cls.includes("choco")) return `<div class="visual"><div class="choco"></div></div>`;
  if(cls.includes("broom")) return `<div class="visual"><div class="broom"></div></div>`;
  if(cls.includes("mop")) return `<div class="visual"><div class="mop"></div></div>`;
  if(cls.includes("wiper")) return `<div class="visual"><div class="wiper"></div></div>`;
  if(cls.includes("laddu")) return `<div class="visual"><div class="laddu"></div></div>`;
  if(cls.includes("sweet")) return `<div class="visual"><div class="sweet ${cls.includes("chikki")?"chikki":"barfi"}"></div></div>`;
  if(cls.includes("tea")) return `<div class="visual"><div class="tea"></div></div>`;
  return `<div class="visual"><div class="dish-stack"><div class="plate"></div><div class="cup"></div></div></div>`;
}
function openProduct(id){
 const p=products.find(x=>x.id===id); if(!p)return;
 title.textContent=p.title; sub.textContent=p.sub;
 gallery.innerHTML=p.items.map(x=>`<div class="gallery-item">${visual(x[1])}<div class="gallery-label">${x[0]}<div><span class="tag">${x[2]}</span></div></div></div>`).join("");
 modal.classList.add("open"); modal.setAttribute("aria-hidden","false"); document.body.style.overflow="hidden";
}
document.addEventListener("click",e=>{const b=e.target.closest(".arrow-btn"); if(b)openProduct(b.dataset.id);});
function closeModal(){modal.classList.remove("open");modal.setAttribute("aria-hidden","true");document.body.style.overflow="";}
document.getElementById("modalClose").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
