function reverse(n, inputArr) {
    let arr = [];
    for (i = 0; i < n; i++) {
        arr.push(inputArr[i])
    }
    let output = '';
    for (i = n - 1; i >= 0; i--) {
        output += `${arr[i]} `;
    }
    console.log(output);
    
}
reverse(3, [10, 20, 30, 40, 50])