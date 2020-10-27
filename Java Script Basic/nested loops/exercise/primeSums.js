function prime(input) {
    let text = input.shift();
    let primes = 0;
    let nonprimes = 0;
    while (text !== 'stop') {
        let number = Number(text);

        if (number < 0) {
            console.log('Number is negative.')
        } else {
            let counter = 0;
            for (i = 1; i <= number; i++) {
                if (number % i == 0) {
                    counter++;
                }
            }
            if (counter === 2) {
                primes += number;
            } else {nonprimes += number;}
        }
        text = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primes}`);
    console.log(`Sum of all non prime numbers is: ${nonprimes}`)

}
prime([3,
    9,
    0,
    -7,
    19,
    4,
    'stop'
    ])