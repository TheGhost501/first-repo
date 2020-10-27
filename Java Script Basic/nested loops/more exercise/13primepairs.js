function primePairs(array) {
    let firstStart = Number(array.shift());
    let secondStart = Number(array.shift());
    let firstDiff = Number(array.shift());
    let secondDiff = Number(array.shift());
    let firstEnd = firstStart + firstDiff;
    let secondEnd = secondStart + secondDiff;
    for (let pairOne = firstStart; pairOne <= firstEnd; pairOne++) {
        let prime = true;
        for (let i = 2, s = Math.sqrt(pairOne); i <= s; i++) {
            if (pairOne % i === 0) {
                prime = false;
            }
        }
        if (prime) {
            for (let pairTwo = secondStart; pairTwo <= secondEnd; pairTwo++) {
                let primeTwo = true;
                for (let q = 2, r = Math.sqrt(pairTwo); q <= r; q++) {
                    if (pairTwo % q === 0) {
                        primeTwo = false;
                    }
                }
                if (primeTwo) {
                    console.log('' + pairOne + pairTwo);
                }
            }
        } else {
            continue;
        }

    }

}
primePairs([10, 20, 5, 5])