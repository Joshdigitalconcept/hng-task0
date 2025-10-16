// Update time on load and every second
function updateTime() {
    const timeElement = document.getElementById('current-time');
    if (timeElement) {
        timeElement.textContent = Date.now();
    }
}
updateTime();
setInterval(updateTime, 1000); // Updates every second