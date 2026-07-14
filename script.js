const audio = document.getElementById("audio");

const play = document.getElementById("play");

const progress = document.getElementById("progress");

const current = document.getElementById("current");

const duration = document.getElementById("duration");


play.onclick = () => {

    if(audio.paused){

        audio.play();

        play.innerHTML="⏸";

    } else {

        audio.pause();

        play.innerHTML="▶";

    }

};



audio.addEventListener("loadedmetadata",()=>{

    duration.innerHTML=formatTime(audio.duration);

});


audio.addEventListener("timeupdate",()=>{

    progress.value =
    (audio.currentTime/audio.duration)*100;

    current.innerHTML =
    formatTime(audio.currentTime);

});



progress.oninput=()=>{

    audio.currentTime =
    (progress.value/100)*audio.duration;

};



document.getElementById("back").onclick=()=>{

    audio.currentTime-=10;

};


document.getElementById("forward").onclick=()=>{

    audio.currentTime+=10;

};



document.getElementById("volume").onclick=()=>{

    audio.muted=!audio.muted;

};



document.getElementById("share").onclick=()=>{

    navigator.share({

        title:"Interview with Customs Officer",

        url:window.location.href

    });

};



function formatTime(seconds){

    let min=Math.floor(seconds/60);

    let sec=Math.floor(seconds%60);

    if(sec<10) sec="0"+sec;

    return min+":"+sec;

}
