console.log("start audio.js");

function play(){
    var audio;
    audio = document.querySelector("audio");
 
    audio.play();
}

function pause(){
    var audio;
    audio = document.querySelector("audio");
 
    audio.pause();
}

function skip10sec(){
    var audio;
    audio = document.querySelector("audio");
 
    audio.currentTime = audio.currentTime + 10;
}

var playButton = document.querySelector("[data-role=play]");
playButton.addEventListener("click", play);

var playButton = document.querySelector("[data-role=pause]");
playButton.addEventListener("click", pause);