function harvest(vine, grapes, litres, workers) {
    let winegrapes = (vine * grapes) * 0.4;
    let wines = winegrapes / 2.5;
    let diff = Math.abs(litres - wines)
    if (wines < litres) {
        console.log(`It will be a tough winter! More ${Math.floor(diff)} liters wine needed.`)
    } else  {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wines)} liters.`)
        console.log(`${Math.ceil(diff)} liters left -> ${Math.ceil(diff / workers)} liters per person.`)
    }

}
harvest(650, 2, 175, 3)
harvest(1020, 1.5, 425, 4)