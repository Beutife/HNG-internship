// JavaScript to update the counter every second
function updateUTCTime() {
    const currentTime = new Date();
    const utcTime = currentTime.toUTCString();
    document.getElementById("time").textContent = utcTime;

    console.log(currentTime); // Remove quotes around 'currentTime'

    // Set up a timer to update the time every second
    setTimeout(updateUTCTime, 1000);
}

// Call the updateUTCTime function to initially display the time
updateUTCTime();