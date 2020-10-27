function sum(number) {
    let item = Number(number);
    let sum = 0;
    let end = (number.toString()).length;
    
    for (i = 0; i < end; i++) {
        sum += item % 10;
        item = parseInt(item / 10);
    }
    console.log(sum);
    
}
sum(245678)