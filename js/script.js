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