/* orininal : https://codepen.io/anon/pen/LpzXPL/ */

// Set the date we're counting down to
var countDownDate = new Date("May 2, 2024 09:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  let countdownDays = document.getElementById("days");
  let countdownHours = document.getElementById("hours");
  let countdownMinutes = document.getElementById("minutes");
  let countdownSeconds = document.getElementById("seconds");

  countdownDays.innerHTML = days;
  countdownHours.innerHTML = hours;
  countdownMinutes.innerHTML = minutes;
  countdownSeconds.innerHTML = seconds;
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    //document.getElementById("demo").innerHTML = `<div class="exp">Started on 30 Jan 2023</div>`;

    countdownDays.innerHTML = "00";
    countdownHours.innerHTML = "00";
    countdownMinutes.innerHTML = "00";
    countdownSeconds.innerHTML = "00";
  }
  //location.reload();
}, 1000);
