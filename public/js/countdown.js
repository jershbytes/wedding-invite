// countdown.js

// Set the date we're counting down to
const weddingDate = new Date('2024-12-01T16:00:00'); // Set your wedding date and time here

// Update the countdown every second
const countdown = setInterval(function() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the countdown element
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is over, display "We're Married!"
    if (distance < 0) {
        clearInterval(countdown);
        document.getElementById("countdown").style.display = 'none';
        document.getElementById("marriedMessage").style.display = 'block';
    }
}, 1000);
