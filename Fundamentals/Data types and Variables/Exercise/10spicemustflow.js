function spice(startingYield) {
    let yield = startingYield;
    let totalYield = 0;
    let days = 0;
    while (yield >= 100) {
        days++;
        totalYield += yield;
        yield -= 10;
        if (totalYield - 26 < 0) {
            totalYield = 0;
        } else {
            totalYield -= 26;
        }
    }
    totalYield -= 26;
    if (totalYield - 26 < 0) {
        totalYield = 0;
    }
    console.log(days);
    console.log(totalYield);
    

}
spice(450)