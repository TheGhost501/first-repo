function record(input) {
    let record = Number(input.shift());
    let distance = Number(input.shift());
    let meter = Number(input.shift());
    let speed = meter * distance;
    let delay = Math.floor(distance / 15) * 12.5;
    let totaltime = speed + delay;
    let difference = Math.abs(record - totaltime);
    if (record > totaltime) {console.log(`Yes, he succeeded! The new world record is ${totaltime.toFixed(2)} seconds.`)}
    else {console.log(`No, he failed! He was ${difference.toFixed(2)} seconds slower.`)}

}
record([`10464`,`1500`,`20`])
record([`55555.67`,`3017`,`5.03`])