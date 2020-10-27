function bills(input) {
    let period = Number(input.shift());
    let monthly = Number(input.shift());
    let electricity = 0;
    let water = 0;
    let internet = 0;
    let other = 0;
    for (let i = 1; i <= period; i++) {
        electricity += monthly;
        water += 20;
        internet += 15;
        other += (monthly + 20 + 15) * 1.2;
        monthly = Number(input.shift());

    }
    let average = (electricity + water + internet + other) / period;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${other.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);

}