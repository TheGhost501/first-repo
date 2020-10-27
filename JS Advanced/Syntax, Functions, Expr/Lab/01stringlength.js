function length(string1, string2, string3) {
    let stringSum = string1.length + string2.length + string3.length;
    let average = stringSum / 3;

    return `${stringSum}\n${Math.floor(average)}`;

}
console.log(length('chocolate', 'ice cream', 'cake'));