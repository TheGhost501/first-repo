function mu(string) {
    let health = 100;
    let coins = 0;
    let input = string.split('|');
    let bestRoom = 0;
    let alive = true;
    for (let i = 0; i < input.length; i++) {

        if (alive == false) {
            break;
        }

        bestRoom++;
        let command = input[i].split(' ');
        let item = command[0];
        let value = Number(command[1]);
        switch (item) {
            case 'potion':
                if (value + health > 100) {
                    value = 100 - health;
                }
                 health += value;
                console.log(`You healed for ${value} hp.\nCurrent health: ${health} hp.`);

                break;
            case 'chest':
                coins += value;
                console.log(`You found ${value} bitcoins.`);

                break;
            default:
                health -= value;
                if (health <= 0) {
                    console.log(`You died! Killed by ${item}.\nBest room: ${bestRoom}`);
                    alive = false;
                } else {
                    console.log(`You slayed ${item}.`);

                }
                break;
        }
    }

        if (alive) {
            console.log(`You've made it!\nBitcoins: ${coins}\nHealth: ${health}`);
            
        }
}
mu('rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000');
