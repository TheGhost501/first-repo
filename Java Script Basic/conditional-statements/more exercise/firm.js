function firm(Maxhrs, days, overtime) {
    let totalhrs = ((days * 0.9) * 8) + overtime * (days * 2);
    let diff = Math.abs(totalhrs - Maxhrs);
    if (totalhrs >= Maxhrs) {
        console.log(`Yes!${Math.floor(diff)} hours left.`)
    } else {
        console.log(`Not enough time!${Math.ceil(diff)} hours needed.`)
    }
}
firm(90, 7, 3)
firm(99, 3, 1)