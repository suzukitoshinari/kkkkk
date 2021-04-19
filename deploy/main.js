let display = document.getElementById("display");
let startStop = document.getElementById("startStop");
let reset = document.getElementById("reset");

let hours = 0;
let minutes = 0;
let seconds = 0;

let displayHours = 0;
let displayMinutes = 0;
let displaySeconds = 0;
let Interval;
let status = "stopped";

stopWatch = () => {
    seconds++;
    if(seconds / 60 == 1) {
        seconds = 0;
        minutes++;
        if(minutes / 60 == 1) {
            minutes = 0;
            hours++;
        }
    }

    if(seconds < 10) {
        displaySeconds = "0" + seconds;
    } else {
        displaySeconds = seconds;
    }

    if(minutes < 10) {
        displayMinutes = "0" + minutes;
    } else {
        displayMinutes = minutes;
    }

    if(hours < 10) {
        displayHours = "0" + hours;
    } else {
        displayHours = hours;
    }

    display.innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

startStop.addEventListener("click", () => {
    if(status == "stopped") {
        Interval = setInterval(stopWatch, 1000);
        startStop.textContent = "stop";
        status = "started";
    } else {
        clearInterval(Interval);
        startStop.textContent = "start";
        status = "stopped";
    }
});

reset.addEventListener("click", () => {
    clearInterval(Interval);
    startStop.textContent = "start";
    status = "stopped";
    display.textContent = "00:00:00";
    seconds = 0;
    minutes = 0;
    hours = 0;
});

