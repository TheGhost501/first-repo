function isPrime(input) {
    let isPrime = true;
    for (let i = 2; i < input - 1; i++) {
        if (input % i === 0) {
            isPrime = false;
        }
    }
    console.log(isPrime);
    
}