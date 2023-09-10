// JavaScript to update the counter every second
function updateUTCTime() {
    const currentTime = new Date();
    const secondsTime = Math.round(currentTime.getTime() / 1000); // Convert milliseconds to seconds
    document.getElementById("time").textContent = secondsTime;

    console.log(currentTime); // Remove quotes around 'currentTime'

    // Set up a timer to update the time every second
    setTimeout(updateUTCTime, 1000);
}

// Call the updateUTCTime function to initially display the time
updateUTCTime();

function updateDay() {
    const currentTime = new Date();
    const dayOfWeek = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const currentDay = dayOfWeek[currentTime.getUTCDay()];
    document.getElementById("day").textContent = currentDay;

    console.log(currentDay);

    setTimeout(updateDay,1000);
}
updateDay();