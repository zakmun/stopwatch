// Get the elements from the HTML
const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

// Initialize timer variables
let seconds = 0;
let minutes = 0;
let hours = 0;

let leadingSeconds = 0;
let leadingMinutes = 0;
let leadingHours = 0;

let timerInterval = null;
let timerStatus = "stopped";

// Function to update the stopwatch and display the time
function stopWatch() {
    // Increment seconds
    seconds++;

    // Check if a minute has passed
    if(seconds / 60 === 1) {
        seconds = 0;
        minutes++;

        // Check if an hour has passed
        if(minutes / 60 === 1) {
            minutes = 0;
            hours++;
        }
    }

    // Format leading zeros for single-digit seconds, minutes, and hours
    leadingSeconds = seconds < 10 ? "0" + seconds.toString() : seconds;
    leadingMinutes = minutes < 10 ? "0" + minutes.toString() : minutes;
    leadingHours = hours < 10 ? "0" + hours.toString() : hours;

    // Display the formatted time on the timer element
    let displayTimer = document.getElementById('timer').innerText = leadingHours + ":" + leadingMinutes + ":" + leadingSeconds;
}

// Event listener for the start/stop button
startStopBtn.addEventListener("click", function() {
    // Check the current timer status
    if (timerStatus === "stopped") {
        // Start the timer
        timerInterval = window.setInterval(stopWatch, 1000);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa fa-pause" id="pause"></i>`;
        timerStatus = "started";
    } else {
        // Stop the timer
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML = `<i class="fa fa-play" id="play"></i>`;
        timerStatus = "stopped";
    }
});

// Event listener for the reset button
resetBtn.addEventListener("click", function() {
    // Stop the timer and reset variables
    window.clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;

    // Reset the timer display
    document.getElementById('timer').innerHTML = "00:00:00";
});
