function nElements(array) {
    let n = Number(array[array.length - 1]);
    let output = '';
    for (let i = 0; i < array.length - 1; i += n) {
        let element = array[i];
        output += `${element} `;

    }
    return output;
}
console.log(nElements(['5', '20', '31', '4', '20', '2']));
