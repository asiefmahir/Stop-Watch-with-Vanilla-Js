class Stopwatch {
	constructor() {
		// this.uiMiliSeconds = document.getElementById('mili-seconds');
		// this.uiSeconds = document.getElementById('seconds');
		// this.uiMinutes = document.getElementById('minutes');
		// this.uiHours = document.getElementById('hours');

		// this.buttonStart = document.getElementById('start');
		// this.buttonStop = document.getElementById('stop');
		// this.buttonReset = document.getElementById('reset');

		this.miliSeconds = 0;
		this.seconds = 0;
		this.minutes = 0;
		this.hours = 0;

		this.runID = undefined;

		this.runWatchStatus = false;
	}

	runWatch() {
		if (this.runWatchStatus) return;
		this.runID = setInterval(this.updateWatch.bind(this), 10);
		this.runWatchStatus = true;
		this.addRunClass();
		this.addResetClass();
	}

	stopWatch() {
		if (!this.runWatchStatus) return;
		clearInterval(this.runID);
		this.runWatchStatus = false;
		this.addStopClass();
	}

	resetWatch() {
		if (this.runWatchStatus) return;
		this.miliSeconds = 0;
		this.seconds = 0;
		this.minutes = 0;
		this.hours = 0;
		this.runID = undefined;
		this.uiMiliSeconds.innerText = "00";
		this.uiSeconds.innerText = "00";
		this.uiMinutes.innerText = "00";
		this.uiHours.innerText = "00";
	}

	updateMiliSeconds() {
		this.miliSeconds = Number(this.miliSeconds) + 1;
	}
	updateSeconds() {
		this.seconds = Number(this.seconds) + 1;
	}
	updateMinutes() {
		this.minutes = Number(this.minutes) + 1;
	}
	updateHours() {
		this.hours = Number(this.hours) + 1;
	}

	showMiliSeconds() {
		if (this.miliSeconds.toString().length == 1) {
			this.miliSeconds = "0" + this.miliSeconds;
		}
		this.uiMiliSeconds.innerText = this.miliSeconds;
	}
	showSeconds() {
		if (this.seconds.toString().length == 1) {
			this.seconds = "0" + this.seconds;
		}
		this.uiSeconds.innerText = this.seconds;
	}
	showMinutes() {
		if (this.minutes.toString().length == 1) {
			this.minutes = "0" + this.minutes;
		}
		this.uiMinutes.innerText = this.minutes;
	}
	showHours() {
		if (this.hours.toString().length == 1) {
			this.hours = "0" + this.hours;
		}
		this.uiHours.innerText = this.hours;
	}

	updateWatch() {
		if (this.hours < 25) {
			if (this.minutes < 60) {
				if (this.seconds < 60) {
					if (this.miliSeconds < 100) {
						this.updateMiliSeconds();
						this.showMiliSeconds();
					} else {
						this.miliSeconds = "00";
						this.uiMiliSeconds.innerText = this.miliSeconds;
						this.updateSeconds();
						this.showSeconds();
					}
				} else {
					this.seconds = "00";
					this.uiSeconds.innerText = this.seconds;
					this.updateMinutes();
					this.showMinutes();
				}
			} else {
				this.minutes = "00";
				this.uiMinutes.innerText = this.minutes;
				this.updateHours();
				this.showHours();
			}
		} else {
			this.stopWatch();
		}
	}

	addRunClass() {
		this.buttonStart.classList.add("active");
		this.buttonStart.classList.remove("allowed");
		this.buttonStart.classList.add("not-allowed");
		this.buttonStop.classList.remove("not-allowed");
		this.buttonStop.classList.add("allowed");
		this.buttonReset.classList.remove("allowed");
		this.buttonReset.classList.add("not-allowed");
	}
	addStopClass() {
		this.buttonStart.classList.remove("active");
		this.buttonStart.classList.remove("not-allowed");
		this.buttonStart.classList.add("allowed");

		this.buttonStop.classList.remove("allowed");
		this.buttonStop.classList.add("not-allowed");
		this.buttonReset.classList.remove("not-allowed");
		this.buttonReset.classList.add("allowed");
	}

	addResetClass() {
		this.buttonReset.classList.remove("allowed");
		this.buttonReset.classList.add("not-allowed");
	}
}

const mywatch = new Stopwatch();

mywatch.buttonStart.addEventListener("click", (e) => {
	e.preventDefault();
	mywatch.runWatch();
});

mywatch.buttonStop.addEventListener("click", (e) => {
	e.preventDefault();
	mywatch.stopWatch();
});

mywatch.buttonReset.addEventListener("click", (e) => {
	e.preventDefault();
	mywatch.resetWatch();
});
