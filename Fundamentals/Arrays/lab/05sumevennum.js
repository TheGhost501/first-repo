function sum(arr) {
    let sum = 0;
    for (i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    for (let num of arr) {
        if (num % 2 === 0) {
            sum += num;
        }
    }
    console.log(sum);
    
}
sum(['2','4','6','8','10'])