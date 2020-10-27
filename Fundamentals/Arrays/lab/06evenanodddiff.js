function difference(arr) {

        for (i = 0; i < arr.length; i++) {
            arr[i] = Number(arr[i]);
        }
        let oddSum = 0;
        let evenSum = 0;
        for (let num of arr) {
            if ( num % 2 === 0) {
                evenSum += num;
            } else {
                oddSum += num;
            }
        }
        let diff = evenSum - oddSum;
        console.log(diff);
        
}
difference([3,5,7,9])