function perfectNum(number) {
    let sumOfDivs = 0;
    for (let i = 1; i < number; i++){
        if (number % i === 0) {
            sumOfDivs += i;
        }
    }
    if (sumOfDivs === number) {
        console.log('We have a perfect number!');
        
    } else {
        console.log(`It's not so perfect.`);
        
    }
}
perfectNum(15)