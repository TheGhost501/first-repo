function area(input) {
    let type = typeof (input);
    let output;
    if (type === 'number') {
        let area = Math.pow(input, 2) * Math.PI;
        output = area.toFixed(2);

    } else {
        output = `We can not calculate the circle area, because we receive a ${type}.`;
    }

    return output;
}
console.log(area(undefined));
