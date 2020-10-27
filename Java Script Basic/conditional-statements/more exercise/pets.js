function pets(days, food, dogperday, catperday, turtleperday) {
    let dog = dogperday * days;
    let cat = catperday * days;
    let turtle = (turtleperday * days) / 1000;
    let totalfood = dog + cat + turtle;
    let diff = 0;
    if (totalfood <= food) {
        diff = food - totalfood;
        console.log(`${Math.floor(diff)} kilos of food left.`)
    } else {
        diff = totalfood - food;
        console.log(`${Math.ceil(diff)} more kilos of food are needed.`)
    }
}
pets(2, 10, 1, 1, 1200)
pets(5, 10, 2.1, 0.8, 321)