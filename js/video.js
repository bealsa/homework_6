var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
	console.log(video);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	let vol= document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
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

document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log("Volume Adjusted");
	 video.volume = this.value / 100;
});

document.querySelector("old").addEventListener("click", function() {
	console.log("Volume Adjusted");
	 video.volume = this.value / 100;
});
