function tickets(budget, type, people) {
    let transport = 0;
    let tickets = 0;
    if (type === 'Normal') {
        tickets = people * 249.99
    } else {
        tickets = people * 499.99
    }
    if (people < 5) {
        transport = budget * 0.75;
    } else if (people < 10) {
        transport = budget * 0.6;
    } else if (people < 25) {
        transport = budget * 0.5;
    } else if (people < 50) {
        transport = budget * 0.40;
    } else {
        transport = budget * 0.25;
    }
    let cost = transport + tickets;
    let diff = Math.abs(budget - cost);
    if (budget >= cost) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }
}
tickets(1000, 'Normal', 1)
tickets(30000, 'VIP', 49)