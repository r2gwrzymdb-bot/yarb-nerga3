function next(n){
  show(n);
}

function show(n){
  document.querySelectorAll(".scene").forEach(s=>s.classList.remove("active"));
  document.getElementById("s"+n).classList.add("active");
}

function restart(){
  show(1);
}

function yes(){
  show(4);
  hearts(60);
}

function no(){
  show(5);
}

function hearts(count){
  for(let i=0;i<count;i++){
    const h=document.createElement("div");
    h.innerHTML="💖";
    h.style.position="absolute";
    h.style.left=Math.random()*100+"vw";
    h.style.top="80vh";
    h.style.fontSize=(10+Math.random()*20)+"px";
    h.style.animation="float 3s linear forwards";
    document.body.appendChild(h);

    setTimeout(()=>h.remove(),3000);
  }
}