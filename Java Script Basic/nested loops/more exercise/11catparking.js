function happyCat(array) {
    let numberDays = Number(array.shift());
    let numberHours = Number(array.shift());
    let total = 0;

    for (let days = 1; days <= numberDays; days++) {
        let daily = 0;
        for (let hours = 1; hours <= numberHours; hours++) {
            if (days % 2 == 0 && hours % 2 !== 0) {
                daily += 2.5;
            } else if (days % 2 !== 0 && hours % 2 == 0) {
                daily += 1.25;
            } else {
                daily += 1;
            }
        }
        total += daily;
        console.log(`Day: ${days} - ${daily.toFixed(2)} leva`);
    }
    console.log(`Total: ${total.toFixed(2)} leva`);

}
happyCat([5, 2])