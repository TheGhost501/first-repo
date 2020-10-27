function convert (input) {
    let value = Number(input.shift());
    let entry = input.shift();
    let exit = input.shift();
    if (entry =='mm') {value /=1000;}
    else if (entry == 'cm') {value/=100;}
    if (exit == 'mm') {value *=1000;}
    else if (exit =='cm') {value *=100;}
    console.log(value.toFixed(3));
}
convert(['12', 'mm', 'm'])
convert(['150', 'm', 'cm'])
convert(['45', 'cm', 'mm'])