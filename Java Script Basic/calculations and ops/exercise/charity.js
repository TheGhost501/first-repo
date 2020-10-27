function charity(input) {
    let days = Number(input.shift());
    let chefs = Number(input.shift());
    let cakes = Number(input.shift());
    let waffles = Number(input.shift());
    let pancakes = Number(input.shift());
    let oneday = cakes * 45 + waffles * 5.8 + pancakes * 3.2;
    let totalday = oneday * chefs;
    let total = totalday * days;
    let final = total - (total / 8);
    console.log(final.toFixed(2))
}
charity(['20','8','14','30','16'])
charity(['131','5','9','33','46'])