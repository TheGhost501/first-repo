function calc(fruit, grams, priceKg) {
    let kg = grams / 1000;
    let sum = kg * priceKg;
    console.log(`I need $${sum.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}
calc('sad', 1563, 2.35)