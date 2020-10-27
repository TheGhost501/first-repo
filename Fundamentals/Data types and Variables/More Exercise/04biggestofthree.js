function biggestNum() {
    let biggest = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] > biggest) {
            biggest = arguments[i];
        }
    }
    console.log(biggest);
    
}
biggestNum(1,2,3)