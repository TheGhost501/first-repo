function mine(input) {
    let bitcoinCost = 11949.16;
    let gold = 67.51;
    let money = 0;
    let firstDay = 0;
    let bitcoinCount = 0;
    for (let i = 1; i <= input.length; i++) {
        let day = Number(input[i - 1]);
        if (i % 3 === 0) {
            money += (day * 0.7) * gold;
        } else {
            money += day * gold;
        }
        if (money >= bitcoinCost) {
            if (firstDay === 0) {
                firstDay = i;
            }
            bitcoinCount += parseInt(money / bitcoinCost);
            money -= parseInt(money / bitcoinCost) * bitcoinCost;

        }
    }
    console.log(`Bought bitcoins: ${bitcoinCount}`)
    if (firstDay != 0) {
        console.log(`Day of the first purchased bitcoin: ${firstDay}`)
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`)

}

mine([3124.15, 504.212, 2511.124])