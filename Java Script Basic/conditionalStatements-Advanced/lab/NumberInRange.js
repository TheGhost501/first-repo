function range(input) {
    let a = Number(input.shift());
    if (a >= -100 && a <=100 && a != 0) {console.log('Yes');}
    else {console.log('No');}
}
range([4])