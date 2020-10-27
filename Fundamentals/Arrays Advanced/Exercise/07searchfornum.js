function search(input, parameters) {
    let [numElemets, elementsDel, elementSearch] = parameters;
    let newArray = input.splice(0, numElemets);
    newArray.splice(0, elementsDel);
    let numberCount = 0;
    for (let num of newArray) {
        if (num === elementSearch) {
            numberCount++;
        }
    }
    return `Number ${elementSearch} occurs ${numberCount} times.`;

}
console.log(search([5, 2, 3, 4, 1, 6], [5, 2, 3]));