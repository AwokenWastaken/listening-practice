const audio = document.getElementById("audio");

const play = document.getElementById("play");

const back = document.getElementById("back");

const forward = document.getElementById("forward");

const volume = document.getElementById("volume");

const progress = document.getElementById("progress");

const current = document.getElementById("current");

const duration = document.getElementById("duration");



play.onclick = function(){

    if(audio.paused){

        audio.play();

        play.innerHTML="⏸";

    }

    else{

        audio.pause();

        play.innerHTML="▶";

    }

};



audio.onloadedmetadata = function(){

    duration.innerHTML =
    time(audio.duration);

};



audio.ontimeupdate = function(){

    progress.value =
    (audio.currentTime / audio.duration) * 100;


    current.innerHTML =
    time(audio.currentTime);

};



progress.oninput=function(){

    audio.currentTime =
    (progress.value / 100) * audio.duration;

};



back.onclick=function(){

    audio.currentTime -= 10;

};



forward.onclick=function(){

    audio.currentTime += 10;

};



volume.onclick=function(){

    audio.muted = !audio.muted;

    volume.innerHTML =
    audio.muted ? "🔇" : "🔊";

};



document.getElementById("share").onclick=function(){

    if(navigator.share){

        navigator.share({

            title:"Interview with Customs Officer",

            url:window.location.href

        });

    }

    else{

        alert(window.location.href);

    }

};



function time(seconds){

    if(isNaN(seconds)){

        return "0:00";

    }


    let min =
    Math.floor(seconds/60);


    let sec =
    Math.floor(seconds%60);


    if(sec < 10){

        sec="0"+sec;

    }


    return min+":"+sec;

}
