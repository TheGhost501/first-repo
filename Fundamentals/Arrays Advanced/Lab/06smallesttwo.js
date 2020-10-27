function smallestNums(input) {
    input.sort((a, b) => a - b);
    return (input.slice(0, 2)).join(' ');

}
console.log(smallestNums([30, 15, 50, 5]));
