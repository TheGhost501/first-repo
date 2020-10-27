function condense(arr) {
    let condensed = [];
    if (arr.length === 1) {
        console.log(arr[0]);

    } else {
        while (arr.length !== 1) {
            for (let i = 0; i < arr.length - 1; i++) {
                condensed[i] = arr[i] + arr[i + 1];
            }
            condensed.length = arr.length - 1;
            arr = condensed;
        }
        console.log(condensed[0]);
        
    }
}
condense([5, 0, 4, 1, 2])