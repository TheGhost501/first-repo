function bar(input) {
    let income = 0;
    input.forEach(element => {
        let pattern = /%([A-Z][a-z]+)%.*<(\w+)>.*\|(\d+)\|\D*(\d+\.?\d+)\$/gm;
        let line = pattern.exec(element);
        if (line != null) {
            let price = Number(line[3]) * Number(line[4]);
            income += price;
            console.log(`${line[1]}: ${line[2]} - ${price.toFixed(2)}`);
        }
    });
    return `Total income: ${income.toFixed(2)}`;
}
console.log(bar([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
]
));