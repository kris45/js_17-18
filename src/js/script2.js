

var paused = true;
var timer = null;
function pauseOrUnpause() {
	if (paused) {		
		unPause();
	} else{
		pause();
	}
}

function pause() {
	clearInterval(timer);
	paused = true;
	document.getElementById("pause").innerHTML = "Unpause";
}

function unPause() {
	lastDate = new Date();
	paused = false;
	timer = setInterval(time, 1);
	document.getElementById("pause").innerHTML = "Pause";
}

function clearСlock() {
	pause();
	ms = 0;
	s = 0;
	m = 0;
	h = 0;
	displayCounters();
	document.getElementById("pause").innerHTML = "Start";
}
console.log("script2");