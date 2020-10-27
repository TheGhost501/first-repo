function bake(input) {
    let bakers = +input.shift();
    let totalPastry = 0;
    let totalMoney = 0;
    for (baker = 1; baker <= bakers; baker++) {
        let bakerName = input.shift();
        let pastry = input.shift();
        let cookies = 0;
        let cakes = 0;
        let waffles = 0;
        while (pastry !== 'Stop baking!') {
            let pastryNum = +input.shift();
            totalPastry += pastryNum;
            if (pastry === 'cookies') {
                cookies += pastryNum;
                totalMoney += pastryNum * 1.5;
            } else if (pastry == 'cakes') {
                cakes += pastryNum;
                totalMoney += pastryNum * 7.8;
            } else if (pastry == 'waffles') {
                waffles += pastryNum;
                totalMoney += pastryNum * 2.3;
            }
            pastry = input.shift();
        }
        console.log(`${bakerName} baked ${cookies} cookies, ${cakes} cakes and ${waffles} waffles.`);
        cookies = 0;
        cakes = 0;
        waffles = 0;

    }


    console.log(`All bakery sold: ${totalPastry}`);
    console.log(`Total sum for charity: ${totalMoney.toFixed(2)} lv.`)
}
bake([3, 'Iva','cookies', 5, 'cakes', 3, 'Stop baking!',  'George', 'cakes', 7, 'waffles',  2, 'Stop baking!','Ivan', 'cookies', 6, 'Stop baking!' ])