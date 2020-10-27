function smallestOfThree(first, second, third) {
    let smallest = first;
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < smallest) {
            smallest = arguments[i];

        }
    }
    console.log(smallest);

}
smallestOfThree(2, 3, 5)