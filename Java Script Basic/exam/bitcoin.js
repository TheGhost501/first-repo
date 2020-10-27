function exchange(input) {
    let bitcoin = +input.shift();
    let china = +input.shift();
    let comission = +input.shift();
    let dollars = china * 0.15;
    let total = ((bitcoin * 1168) + (dollars * 1.76) )/ 1.95;
    let final = total - (total * (comission / 100));
    console.log(final.toFixed(2))
}
exchange([1,5,5])