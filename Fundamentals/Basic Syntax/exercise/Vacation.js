function vacation(people, type, day) {
    let price = 0;
    if (type === 'Students') {
        if (day === 'Friday') {
            price = people * 8.45;
        } else if (day === 'Saturday') {
            price = people * 9.8;
        } else { price = people * 10.46; }
        if (people >= 30) {
            price *= 0.85;
        }
    } else if (type === 'Business') {
        if (day === 'Friday') {
            price = people * 10.9;
        } else if (day === 'Saturday') {
            price = people * 15.6;
        } else { price = people * 16; }
        if (people >= 100) {
            price = price - ((price / people) * 10);
        }
    } else {
        if (day === 'Friday') {
            price = people * 15;
        } else if (day === 'Saturday') {
            price = people * 20;
        } else { price = people * 22.5; }
        if (people >= 10 && people <= 20) {
            price *= 0.95;
        }
    } console.log('Total price: ' + price.toFixed(2))
}
vacation(30,
    "Students",
    "Sunday"
    )