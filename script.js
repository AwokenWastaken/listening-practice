const audio = document.getElementById("audio");
const playButton = document.getElementById("play");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("current");
const duration = document.getElementById("duration");
const volumeButton = document.getElementById("volume");


// PLAY / PAUSE
playButton.addEventListener("click", () => {

    if (audio.paused) {
        audio.play();
        playButton.innerHTML = "⏸";
    } else {
        audio.pause();
        playButton.innerHTML = "▶";
    }

});


// LOAD AUDIO LENGTH
audio.addEventListener("loadedmetadata", () => {
    duration.textContent = formatTime(audio.duration);
});


// UPDATE BAR
audio.addEventListener("timeupdate", () => {

    if (!isNaN(audio.duration)) {

        progress.value =
        (audio.currentTime / audio.duration) * 100;

        currentTime.textContent =
        formatTime(audio.currentTime);
    }

});


// MOVE THROUGH AUDIO
progress.addEventListener("input", () => {

    audio.currentTime =
    (progress.value / 100) * audio.duration;

});


// BACK 10 SECONDS
document.getElementById("back").onclick = () => {

    audio.currentTime -= 10;

};


// FORWARD 10 SECONDS
document.getElementById("forward").onclick = () => {

    audio.currentTime += 10;

};


// MUTE
volumeButton.onclick = () => {

    audio.muted = !audio.muted;

    volumeButton.innerHTML =
    audio.muted ? "🔇" : "🔊";

};


// SHARE
document.getElementById("share").onclick = async () => {

    if (navigator.share) {

        await navigator.share({
            title:"Interview with Customs Officer",
            url:window.location.href
        });

    } else {

        alert("Copy this link: " + window.location.href);

    }

};



function formatTime(seconds){

    if(isNaN(seconds)){
        return "0:00";
    }

    let minutes =
    Math.floor(seconds / 60);

    let secondsLeft =
    Math.floor(seconds % 60);

    if(secondsLeft < 10){
        secondsLeft="0"+secondsLeft;
    }

    return minutes + ":" + secondsLeft;

}
