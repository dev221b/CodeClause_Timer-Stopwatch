var countdown;
var hours = 0;
var minutes = 0;
var seconds = 0;

function startCountdown() {
    var inputHours = parseInt(document.getElementById("input-hours").value) || 0;
    var inputMinutes = parseInt(document.getElementById("input-minutes").value) || 0;
    var inputSeconds = parseInt(document.getElementById("input-seconds").value) || 0;
  
    // Calculate total seconds
    var totalSeconds = (inputHours * 3600) + (inputMinutes * 60) + inputSeconds;
  
    // Calculate hours, minutes, and seconds from total seconds
    hours = Math.floor(totalSeconds / 3600);
    minutes = Math.floor((totalSeconds % 3600) / 60);
    seconds = totalSeconds % 60;
  
    countdown = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
    if (seconds > 0) {
        seconds--;
      } else {
        if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else {
          if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else {
            // Countdown completed
            stopCountdown();
            resetCountdown();
  alert("Time Over!");
            return;
          }
        }
    }

    document.getElementById("hours").textContent = padZero(hours);
    document.getElementById("minutes").textContent = padZero(minutes);
    document.getElementById("seconds").textContent = padZero(seconds);
}

function stopCountdown() {
  clearInterval(countdown);
  console.log("Hello")
  return;
}

function resetCountdown() {
    clearInterval(countdown);
    document.getElementById("input-hours").value = "";
    document.getElementById("input-minutes").value = "";
    document.getElementById("input-seconds").value = "";
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    return;
  }

function padZero(value) {
  return value.toString().padStart(2, "0");
}
