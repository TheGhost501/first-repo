function threeNumbers(first, second, third) {

    let sum = (first, second) => first + second;
    let result = sum(first, second);
    let subtracted = (result, third) => result - third;
    console.log(subtracted(result, third));

}
threeNumbers(23, 6, 10)