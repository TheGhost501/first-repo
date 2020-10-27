function clever(input) {
    let age = +input.shift();
    let washer = +input.shift();
    let toyprice = +input.shift();
    let money = 0;
    let toys = 0;
    for (i = 1; i <= age; i++) {
        if ( i % 2 == 0) {money = money + (10 * (i /2) - 1);}
        else { toys = toys + toyprice;}
    }
    let savings = money + toys;
    let diff = Math.abs(savings - washer);
if (savings >= washer) {console.log(`Yes! ${diff.toFixed(2)}`)}
else {console.log(`No! ${diff.toFixed(2)}`)}

}
clever([10, 170.00, 6])
clever([21, 1570.98, 3])