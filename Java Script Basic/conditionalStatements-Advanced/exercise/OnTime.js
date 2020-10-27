function time(input) {
    let examHrs = +input.shift();
    let examMin = +input.shift();
    let arrivalHrs = +input.shift();
    let arrivalMin = +input.shift();
    let exam = (examHrs * 60) + examMin;
    let arrival = (arrivalHrs * 60) + arrivalMin;
    let diff = exam - arrival;
    if (diff < 0) {
        console.log('Late');
        if (diff > -60) {
            console.log(`${Math.abs(diff)} minutes after the start`);
        } else {
            let hours = Math.floor(Math.abs(diff) / 60);
            let mins = Math.abs(diff) % 60;
            if (mins < 10) {
                console.log(`${hours}:0${mins} hours after the start`);
            } else { console.log(`${hours}:${mins} hours after the start`); }
        }
    } else if (diff <= 30) {
        console.log('On time');
         if (diff !==0) console.log(`${diff} minutes before the start`);
    } else {
        console.log('Early');
        if (diff < 60) { console.log(`${diff} minutes before the start`) }
        else {
            let hours = Math.floor(diff / 60);
            let mins = diff % 60;
            if (mins < 10) {
                console.log(`${hours}:0${mins} hours before the start`);
            } else { console.log(`${hours}:${mins} hours before the start`); }
        }
    }
}
time([9, 30, 9, 50,])
time([9, 00, 8, 30, ])
time([16, 00,15, 00])
time([9, 00, 10, 30])
time([14,00,13, 55 ])
time([11 ,30, 8, 12 ])
time([10, 00, 10, 00])
time([11, 30, 10 , 55])
time([11,30, 12, 29, ])

