function save(input) {
    let income = +input.shift();
    let months = +input.shift();
    let expense = +input.shift();
    let backup = income * 0.3;
    let savings = income - (expense + backup);
    let procent = savings / income * 100;
    console.log(`She can save ${procent.toFixed(2)}%`)
    console.log((savings * months).toFixed(2))

}
save([1500, 3,800, ])