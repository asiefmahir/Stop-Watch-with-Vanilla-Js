const stopwatchCounterStart = document.getElementById("start");
const stopwatchCounterReset = document.getElementById("reset");
const stopwatchCounterPause = document.getElementById("pause");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let watchIsRunning;
let timer = null;
let sec = 0;
let min;

function start() {
	if (!watchIsRunning) {
		watchIsRunning = true;
		timer = setInterval(() => {
			sec++;
			let { second, min } = getMin(sec);
			minutes.textContent = min < 10 ? "0" + min : min;
			seconds.textContent = second < 10 ? "0" + second : second;
		}, 1000);
	}
}

function reset() {
	watchIsRunning = false;
	clearInterval(timer);
	min = sec = ms = 0;
	minutes.textContent = "00";
	seconds.textContent = "00";
}

function pause() {
	watchIsRunning = false;
	clearInterval(timer);
}

const getMin = (sec) => {
	min = parseInt(sec / 60);
	let remainder = sec % 60;
	let second = parseInt(remainder);
	return {
		min,
		second,
	};
};
stopwatchCounterStart.addEventListener("click", start);
stopwatchCounterPause.addEventListener("click", pause);
stopwatchCounterReset.addEventListener("click", reset);
