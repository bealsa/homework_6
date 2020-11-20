var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slow Down");
	video.playbackRate -= .10;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Speed Up");
	video.playbackRate += (1 - video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip Ahead");
	video.currentTime += 5;
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	video.muted = true;
});
