function discovery(input) {
    let plants = {};
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let line = input[i];
        let [plant, rarity] = line.split('<->');
        plants[plant] = { rarity: Number(rarity), rating: [] };
    }

    let endIndex = input.indexOf('Exhibition');
    let commands = input.slice(n, endIndex);

    for (let line of commands) {
        let array = line.split(': ');
        let action = array[0];
        let [plant, arg2] = array[1].split(' - ');
        switch (action) {
            case 'Rate':
                if (plants.hasOwnProperty(plant)) {
                    plants[plant].rating.push(Number(arg2));
                } else {
                    console.log('error');
                }
                break;
            case 'Update':

                if (plants.hasOwnProperty(plant)) {
                    plants[plant].rarity = Number(arg2);
                } else {
                    console.log('error');
                }
                break;
            case 'Reset':

                if (plants.hasOwnProperty(plant)) {
                    plants[plant].rating = [0];
                } else {
                    console.log('error');
                }
                break;
        }
    }

    let rated = Object.keys(plants);

    for (let plant of rated) {
        let points = 0;
        let array = plants[plant].rating;
        for (let rating of array) {
            points += rating;
        }
        let number;
        if (array.length <= 0) {
            number = 1;
        } else {
            number = array.length;
        }
        plants[plant].rating = (points / number).toFixed(2);
    }

    let sorted = rated.sort((a, b) => {
        let num1 = Number(plants[a].rarity);
        let num2 = Number(plants[b].rarity);
        if (num1 === num2) {
            return plants[b].rating - plants[a].rating;
        } else {
            return num2 - num1;
        }
    });

    let output = `Plants for the exhibition:\n`;

    for (let plant of sorted) {
        output += `- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${plants[plant].rating}\n`;

    }
    return output;
}
console.log(discovery(['3',
    'Arnoldii<->4',
    'Woodii<->7',
    'Welwitschia<->2',
    'Rate: Woodii - 10',
    'Rate: Welwitschia - 7',
    'Rate: Arnoldii - 3',
    'Rate: Woodii - 5',
    'Update: Woodii - 5',
    'Exhibition'
]))