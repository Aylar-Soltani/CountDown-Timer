const event = '30 april 2022'
const countdown = setInterval(function() {
    const eventDate = new Date(event);
    const currentDate = new Date();
    const totalSeconds = (eventDate- currentDate)/1000;
    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(totalSeconds/(60*60*24));
    const hours = Math.floor (totalSeconds/(60*60))%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;
    // Output the result in an element:
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    // if the countdown is finished disply:
    if (totalSeconds<0) {
      document.getElementById("container").innerHTML = "EXPIRED";
}
} ,1000);
countdown();

