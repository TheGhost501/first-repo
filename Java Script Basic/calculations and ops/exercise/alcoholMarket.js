function alcoholMarket(input) {
    let wiskeyprice = Number(input.shift());
    let beer = Number(input.shift());
    let wine = Number(input.shift());
    let rakia = Number(input.shift());
    let wiskey = Number(input.shift());
    let rakiaprice = wiskeyprice / 2;
    let wineprice = rakiaprice * 0.6;
    let beerprice = rakiaprice * 0.2;
    let total = wiskeyprice * wiskey + beer * beerprice + wine * wineprice + rakia * rakiaprice 
    console.log(total.toFixed(2))
}
alcoholMarket(['50','10','3.5','6.5','1'])