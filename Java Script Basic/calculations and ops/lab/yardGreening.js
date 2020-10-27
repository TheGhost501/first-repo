function greening(input) {
    let squarem = Number(input.shift());
    let price = squarem * 7.61; 
    let discount = price * 0.18;
    let final = price - discount;
    console.log(`The final price is: ${final.toFixed(2)} lv.
The discount is: ${discount.toFixed(2)} lv.`)
}
greening(['540'])
greening(['135'])
