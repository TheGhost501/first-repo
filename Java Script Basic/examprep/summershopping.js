function shopping(input) {
    let budget = +input.shift();
    let towel = +input.shift();
    let discount = +input.shift();
    let umbrella = towel * (2.0/3);
    let flipFlops = umbrella * 0.75;
    let bag = (flipFlops + towel) * 1.0/3;
    let total = bag + towel + umbrella + flipFlops;
    let discounted = total - (total * (discount/100));
    let remaining = Math.abs(budget - discounted);
    if (budget >= discounted)
    {console.log(`Annie's sum is ${discounted.toFixed(2)} lv. She has ${remaining.toFixed(2)} lv. left.`)}
    else {console.log(`Annie's sum is ${discounted.toFixed(2)} lv. She needs ${remaining.toFixed(2)} lv. more.`)}
}
shopping([40, 15, 5, ])
shopping([30, 17, 3, ])