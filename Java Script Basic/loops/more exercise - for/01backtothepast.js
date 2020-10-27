function back(arr) {
    let spendings = Number(arr.shift());
    let finalYear = Number(arr.shift());
    let age = 18;
    for (i = 1800; i <= finalYear; i++) {
        if (i % 2 === 0) {
            spendings -= 12000;
        } else {
            spendings -= 12000 + age * 50;
        }
        age++;
    }
    if (spendings >= 0) {
        console.log(`Yes! He will live a carefree life and will have ${spendings.toFixed(2)} dollars left.`);
    } else {
        console.log(`He will need ${Math.abs(spendings).toFixed(2)} dollars to survive.`);
    }
}
back(50000, 1802)
back(100000.15, 1808)