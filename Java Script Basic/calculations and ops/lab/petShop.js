function petshop(input) {
    let dog = Number(input.shift());
    let pet = Number(input.shift());
    let results = (dog * 2.5 + pet * 4);

console.log(`${results.toFixed(2)} lv.`);

}
petshop(['5', '4'])