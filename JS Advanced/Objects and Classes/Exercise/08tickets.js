function tickets(array, sorting) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }
    let tickets = [];

    for (let line of array) {
        let [destination, price, status] = line.split('|');
        let ticket = new Ticket(destination, price, status);
        tickets.push(ticket);
    }
    let sorted = tickets.sort((a, b) => {
        let first = a[sorting];
        let second = b[sorting];
        if (sorting == 'price') {
            return first - second;
        } else {
            return first.localeCompare(second);
        }
    });
    return sorted;
}
console.log(tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'price'));