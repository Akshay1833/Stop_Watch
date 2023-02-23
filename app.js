displayTime = document.getElementById("displayTime");
let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;

function stopWatch() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        mintues++;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    displayTime.innerHTML = hours + ":" + minutes + ":" + seconds;
}

function start() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopWatch, 1000);
}

function stop() {
    if (timer !== null) {
        clearInterval(timer);
    }
}

function reset() {
    if (timer != null) {
        clearInterval(timer);
        hours = 0;
        mintues = 0;
        seconds = 0;
    }
    displayTime.innerHTML = hours + ":" + minutes + ":" + seconds;
}
