function dungeon(base) {
    let string = base.shift();
    let health = 100;
    let coins = 0;
    let array = string.split('|');
    let roomCount = 0;
    let alive = true;
    for (let room of array) {
        let roomItems = room.split(' ');
        let item = roomItems.shift();
        let value = Number(roomItems.shift());
        roomCount++;
        switch (item) {
            case 'potion':
                if (health + value > 100) {
                    value = 100 - health;
                }
                health += value;
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += value;
                console.log(`You found ${value} coins.`);
                break;
            default:
                health -= value;
                if (health <= 0) {
                    alive = false;

                } else { console.log(`You slayed ${item}.`); }

                break;
        }
        if (!alive) {
            console.log(`You died! Killed by ${item}.`);
            console.log(`Best room: ${roomCount}`);
            break;
        }
    }

    if (alive) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);           
    }

}
dungeon(['cat 10|potion 30|orc 10|chest 10|snake 25|chest 110'])