function run(input) {
    let record = +input.shift();
    let distance = +input.shift();
    let mINsec = +input.shift();
    let delay = distance / 50;
    if (delay < 1) { delay = 0 }
    else {delay = Math.floor(delay);}
    let time = distance * mINsec;
    let totaltime = time + (delay * 30);
    let difference = totaltime - record;
    if (totaltime < record) {console.log(`Yes! The new record is ${totaltime.toFixed(2)} seconds.`)}
    else {console.log(`No! He was ${difference.toFixed(2)} seconds slower.`)}
}
run([5554.36,
    1340,
    3.23])