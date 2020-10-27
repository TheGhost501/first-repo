function spaceFood(array) {
    let text = array[0];
    let regex = /(\#|\|)(?<food>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g;
    let validFood = regex.exec(text);
    let storage = {};
    let nameArr = [];
    let totalCal = 0;
    while (validFood) {
        let cals = Number(validFood.groups.cal)
        storage[`${validFood.groups.food}`] = [validFood.groups.date, cals];
        totalCal += cals;
        nameArr.push(validFood.groups.food);
        validFood = regex.exec(text);

    }
    console.log(`You have food to last you for: ${Math.floor(totalCal / 2000)} days!`);
    for (let item of nameArr) {
        console.log(`Item: ${item}, Best before: ${storage[item][0]}, Nutrition: ${storage[item][1]}`);
    }
}
spaceFood([
    ' $$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|'
]
);