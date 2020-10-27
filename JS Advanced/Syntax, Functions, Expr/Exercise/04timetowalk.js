function walk(steps, meter, kmH) {
    let distance = (steps * meter);
    let breaks = Math.floor(distance / 500) * 60;
    let time = (distance / (kmH / 3.6)) + breaks;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time / 60);
    let seconds = Math.ceil(time % 60);

    function leadZero(input) {
        if (input < 10) {
            return `0${input}`;
        } else {
            return input;
        }
    }
    console.log(`${leadZero(hours)}:${leadZero(minutes)}:${leadZero(seconds)}`);


}
walk(1000, 0.70, 5.5);