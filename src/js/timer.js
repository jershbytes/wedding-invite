// Simple countdown timer logic
const weddingDate = new Date('December 25, 1999 15:00:00').getTime();

let countdown = setInterval(function () {
    let now = new Date().getTime();
    let timeleft = weddingDate - now;

    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.getElementById("countdown-timer").innerHTML =
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    if (timeleft < 0) {
        clearInterval(countdown);
        document.getElementById("countdown-timer").innerHTML = "We Are Married!";
    }
}, 1000);
