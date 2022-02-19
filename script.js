    const countDown = () => {
    const launching = new Date('Dec 03 2024 23:42:00 GMT-0300').getTime();
    const today = new Date().getTime();
    const minus = launching - today;

    const day = Math.floor(minus / (1000 * 24 * 60 * 60));
    const hour = Math.floor((minus / (1000 * 60 * 60)) % 24);
    const minute = Math.floor((minus / (1000 * 60)) % 60);
    const second = Math.floor((minus / 1000) % 60);

    document.querySelector('[date-day]').innerText = day;
    document.querySelector('[date-hour]').innerText = formatTime(hour);
    document.querySelector('[date-minute]').innerText = formatTime(minute);
    document.querySelector('[date-second]').innerText = formatTime(second);

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }
}

setInterval(countDown, 1000);