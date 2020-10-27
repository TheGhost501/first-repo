function round(number, precision) {
    if (precision > 15) { precision = 15 }
    number = number.toFixed(precision);
    console.log(parseFloat(number))

}
round(10.5,3)