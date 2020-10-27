function time (input) {
    let hours = Number(input.shift()) * 60;
    let minutes = Number(input.shift());
    let time = hours + minutes + 15;
    let hour = Math.floor((time / 60) % 24);
    let minute = (time % 60);
    if (minute<10) {console.log(`${hour}:0${minute}`)}
    else {console.log(`${hour}:${minute}`)}

}
time([1,46])
time([0,01])
time([23,59])
time([11,08])
time([12,49])
time([26,49])

