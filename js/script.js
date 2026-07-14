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

const text = "Happy Birthday...\n\nMy Favorite Human ❤️";

let i = 0;

function typeWriter(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,70);

    }else{

        document.getElementById("subtitle").style.opacity = 1;

        setTimeout(()=>{

            document.getElementById("intro").style.opacity="0";

            setTimeout(()=>{

                document.getElementById("intro").style.display="none";

            },1000);

        },2500);

    }

}

window.onload = typeWriter;

let percent = 0;

const loading = setInterval(() => {

    percent++;

    document.getElementById("loadingPercent").innerHTML = percent + "%";

    if(percent >= 100){

        clearInterval(loading);

        document.getElementById("loadingText").style.display="none";
        document.getElementById("loadingPercent").style.display="none";

        typeWriter();

    }

},25);

const letterText = `

Happy Birthday, My Favorite Human. 🤍

I'm always wish all the best for u

Sehattt selaluu biar bisa barengg akuu teruss yaaa....

Bahagiaa selaluu yaa...

I'm still here for uu sayaanggg....

And u must knoowww.

Banyak banget hal yang aku suka dari kamu.

Aku suka cara kamu bujuk aku kalau aku lagi ngambek.

Aku suka cara kamu meyakinkan aku kalau semuanya akan baik-baik ajaa.

Aku suka karena kamu selalu ikuti hal random nya aku.

Aku suka karena kamu selalu bisa bikin hari biasa jadii spesial.

Thank you...

for always staying.

for always choosing me.

for becoming my safest place.

Semoga di umur yang baru ini kamu selalu sehat, selalu bahagia, selalu dikelilingi hal-hal baik.

Aku berharap kita masih bisa ngerayain banyak ulang tahun lagi bersama.

I love you, more than words can explain.

❤️

`;

function openLetter(){

    document.querySelector(".envelope").style.display="none";

    document.getElementById("letterPaper").style.display="block";

    typeLetter();

}

let indexLetter = 0;

function typeLetter(){

    if(indexLetter < letterText.length){

        document.getElementById("typingLetter").innerHTML += letterText.charAt(indexLetter);

        indexLetter++;

        setTimeout(typeLetter,25);

    }

}

const endingText = [

"Thank you...",

"For every random day.",

"For every smile.",

"For every hug.",

"For always choosing me.",

"I love you.",

"Happy Birthday ❤️"

];

document.getElementById("endingButton").onclick = () => {

document.getElementById("endingMovie").style.display="flex";

playEnding();

}

let endingIndex=0;

function playEnding(){

if(endingIndex<endingText.length){

document.getElementById("movieTyping").innerHTML=endingText[endingIndex];

endingIndex++;

setTimeout(playEnding,2200);

}else{

confetti({

particleCount:250,

spread:150

});

}

}