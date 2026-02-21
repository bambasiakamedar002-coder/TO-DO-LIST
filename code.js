let text = document.querySelector(".zoneEcriture input");
let btn = document.querySelector(".btn");
let zonestockage = document.querySelector(".zonestockage");
let btnReset = document.querySelector(".btn-reset");
let li
let Tache = document.querySelector(".option h3 span");
let compteur = 0;
let compteuricon = 0;
let icon = document.querySelector(".icon");
let body = document.querySelector("body");
let interface = document.querySelector(".interface");
let TITRE = document.querySelector(".TITRE");
let option = document.querySelector(".option");
let totalPara = document.querySelector("h3");
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
        totalPara.classList.toggle("h3dark")
        interface.classList.toggle("interfacedark")
        TITRE.classList.toggle("titredark")
        btn.classList.toggle("btndark")
        btnReset.classList.toggle("btnResetdark")
        body.classList.toggle("bodydark")
        zonestockage.classList.toggle("bodydark li")
})
