const loader=document.getElementById("loader");
const music=document.getElementById("music");
const openBtn=document.getElementById("openBtn");

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},700);

},1800);

});

openBtn.onclick=()=>{

music.play();

document
.getElementById("letter")
.scrollIntoView({

behavior:"smooth"

});

}

function openImage(src){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=src;

}

function closeImage(){

document.getElementById("lightbox").style.display="none";

}

const reveals=document.querySelectorAll(".reveal");

window.addEventListener("scroll",()=>{

reveals.forEach(reveal=>{

const top=reveal.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(top<windowHeight-120){

reveal.classList.add("active");

}

});

});