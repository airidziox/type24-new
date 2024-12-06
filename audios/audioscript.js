"use strict";
const play = document.querySelectorAll(".play");
const audio1 = document.querySelector("#hyperkidAudio");
const audio2 = document.querySelector("#justdanceAudio");
const audio3 = document.querySelector("#samestarsAudio");
const video1 = document.querySelector("#burningdustVideo");
const video2 = document.querySelector("#snoopdoggVideo");
function playAudioVideo(x) {
    x.play();
}
function pauseAudioVideo(x) {
    x.pause();
}
play[0].onclick = () => {
    playAudioVideo(audio1);
    pauseAudioVideo(audio2);
    pauseAudioVideo(audio3);
};
play[1].onclick = () => {
    playAudioVideo(audio2);
    pauseAudioVideo(audio1);
    pauseAudioVideo(audio3);
};
play[2].onclick = () => {
    playAudioVideo(audio3);
    pauseAudioVideo(audio2);
    pauseAudioVideo(audio1);
};
play[3].onclick = () => {
    playAudioVideo(video1);
    pauseAudioVideo(video2);
};
play[4].onclick = () => {
    playAudioVideo(video2);
    pauseAudioVideo(video1);
};
