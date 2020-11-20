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
if(video.currentTime < video.duration  )
	video.currentTime += 5;
else{
	video.currentTime = 0;
}
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("Mute");
	if (video.muted === false) {
       video.muted = true;
			 this.innerHTML = "Unmute";
}
	else {
        video.muted = false;
				this.innerHTML = "Mute"
    }
});

document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log("Volume Adjusted");
	 video.volume = this.value / 100;
	 vol=video.volume;
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	 video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	 video.classList.remove("oldTime");
});
