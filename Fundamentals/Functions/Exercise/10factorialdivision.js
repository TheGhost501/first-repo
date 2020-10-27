function factorialDivision(num1, num2) {
    function factorial(number) {
        let fact = 1;
        if (number !== 0) {
            fact = 1;
            for (let i = 1; i <= number; i++) {
                fact *= i;
            }
        }
        return fact;
    }
    let factOne = factorial(num1);
    let factTwo = factorial(num2);
    let sum = factOne / factTwo;
    console.log(sum.toFixed(2));
    
}
factorialDivision(5, 2)