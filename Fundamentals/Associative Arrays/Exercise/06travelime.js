function travelTime(array) {

    let travelList = {};

    for (let destination of array) {
        let items = destination.split(' > ');
        let country = items[0];
        let town = items[1];
        let price = items[2];

        if (travelList[country] === undefined) {
            travelList[country] = {};
        }

        if (travelList[country][town] < price) {
            price = travelList[country][town];
        }

        travelList[country][town] = price;
    }

    let sorted = Object.keys(travelList).sort((a, b) => a.localeCompare(b));
    let output = '';

    for (let country of sorted) {
        output += `${country} ->`;
        let sortedTowns = Object.keys(travelList[country]).sort((a, b) => travelList[country][a] - travelList[country][b]);

        for (let town of sortedTowns) {
            output += ` ${town} -> ${travelList[country][town]}`;
        }

        output += '\n';
    }

    return output;
}
console.log(travelTime([
    "Bulgaria > Sofia > 200",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 500"
]
));
