const inicio=new Date("2026-08-23T00:00:00");

function openLetter(){
  document.getElementById("cover").style.display="none";
  const story=document.getElementById("story");
  story.classList.remove("hidden");
  window.scrollTo({top:0,behavior:"smooth"});
  for(let i=0;i<18;i++)setTimeout(makeHeart,i*80);
}

function updateClock(){
  let x=Math.max(0,new Date()-inicio);
  const sec=1000,min=sec*60,hour=min*60,day=hour*24;
  const d=Math.floor(x/day);x%=day;
  const h=Math.floor(x/hour);x%=hour;
  const m=Math.floor(x/min);x%=min;
  const s=Math.floor(x/sec);
  document.getElementById("d").textContent=d;
  document.getElementById("h").textContent=h;
  document.getElementById("m").textContent=m;
  document.getElementById("s").textContent=s;
}
updateClock();setInterval(updateClock,1000);

function makeHeart(){
 const e=document.createElement("div");
 e.className="float-heart";
 e.textContent=Math.random()>.5?"♥":"♡";
 e.style.left=Math.random()*100+"vw";
 e.style.fontSize=(12+Math.random()*20)+"px";
 e.style.animationDuration=(4+Math.random()*5)+"s";
 document.body.appendChild(e);
 setTimeout(()=>e.remove(),9000);
}
setInterval(makeHeart,1200);

const audio=document.getElementById("audio");
let playing=false;
function toggleMusic(){
 if(!playing){
   audio.play().then(()=>{playing=true;document.getElementById("musicBtn").textContent="❚❚"})
   .catch(()=>alert("Agrega 'labios-de-cereza-2.mp3' junto a index.html para activar la música."));
 }else{
   audio.pause();playing=false;document.getElementById("musicBtn").textContent="♫";
 }
}

function yes(){
 const a=document.getElementById("answer");
 a.classList.remove("hidden");
 a.scrollIntoView({behavior:"smooth"});
 for(let i=0;i<70;i++)setTimeout(makeHeart,i*35);
}
