function proccess(input) {
    let result = input.filter((num, i) => i % 2 == 1)
        .map(x => 2 * x)
        .reverse();
    return result.join(' ');

}
console.log(proccess([10, 15, 20, 25]));
