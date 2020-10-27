function average(input) {
    let n = input.shift();
    let count = 1;
    sum = 0;
    while (count <= n) {
        sum += Number(input.shift());
        count++;
    }
    console.log((sum / n).toFixed(2));
    
}
average([2,6,4])