let text = document.querySelector(".zoneEcriture input");
let btn = document.querySelector(".zoneEcriture .btn");
let zonestockage = document.querySelector(".zonestockage");
let btnReset = document.querySelector(".btn-reset");
let li = document.createElement("li");
let Tache = document.querySelector(".option h3 span")
let compteur = 0;
let compteuricon = 0;
let icon = document.querySelector(".icon")
let body = document.querySelector("body")
let interface = document.querySelector(".interface")
let TITRE = document.querySelector(".TITRE")
let option = document.querySelector(".option")
let totalPara = document.querySelector(".option h3");
function whites(){
    body.style.background="rgb(68, 68, 255)"
    interface.style.background="white"
    TITRE.style.color="black"
    btn.style.background="rgb(68, 68, 255)"
    btn.style.color="white"
    btnReset.style.color="white"
    btnReset.style.background="rgb(68, 68, 255)"
    totalPara.style.color="rgb(68, 68, 255)"
    li.style.background="rgb(68, 68, 255)"
    li.style.color="white"
}
function Dark(){
    body.style.background="black"
    interface.style.background="#7C4DFF"
    TITRE.style.color="white"
    btn.style.background="black"
    btn.style.color="rgb(68, 68, 255)"
    btnReset.style.color="rgb(68, 68, 255)"
    btnReset.style.background="white"
    totalPara.style.color="white"
    li.style.background="white"
    li.style.color="rgb(68, 68, 255)"
    
    
}
btn.addEventListener("click",()=>{
    li = document.createElement("li");
    li.textContent = text.value;
    if(li.textContent===""){
    }
    else{
    zonestockage.appendChild(li)
    li.classList.add("do")
    compteur++;
    Tache.innerText = `${compteur}`
    text.value = "";
    }
})
let cptreset = 0;
btnReset.addEventListener("click",()=>{
    zonestockage.innerHTML=""
    compteur=0;
    Tache.innerText = `${compteur}`;
    
})
icon.addEventListener("click",()=>{
       
    compteuricon++
     if(compteuricon===1){
         Dark()
 }
     else{
        whites()
     }
    if(compteuricon>1){
     compteuricon=0
 }
})


