function toyshop (input) {
    let excursion = Number(input.shift());
    let puzzle = Number(input.shift());
    let doll = Number(input.shift());
    let bear = Number(input.shift());
    let minion = Number(input.shift());
    let truck = Number(input.shift());
    let sum = puzzle * 2.6 + doll * 3 + bear * 4.1 + minion * 8.20 + truck * 2;
    let toynumber = puzzle + doll + minion + truck + bear;
    let discount = 0.0;
    if (toynumber>= 50) {
        discount = sum * 0.25;   
    }
    let totalprice = sum - discount;
    let rent = totalprice * 0.10;
    let final = totalprice - rent;
    if (final >= excursion) {
        let remain = final - excursion;
        console.log(`Yes! ${remain.toFixed(2)} lv left.`);
    } else {
        let result = (excursion - final);
        console.log (`Not enough money! ${result.toFixed(2)} lv needed.`)
    }

}
toyshop(['40.8' ,'20','25','30','50','10'])
toyshop(['320' ,'8','2','5','5','1'])