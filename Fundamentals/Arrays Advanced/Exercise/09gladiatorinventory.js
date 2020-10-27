function gladiator(array) {
    let inventory = array.shift().split(' ');
    let commands = array;

    for (let i = 0; i < commands.length; i++) {
        event = commands[i].split(' ');
        let item = event[1];
        let isIn = inventory.indexOf(item);
        switch (event[0]) {
            case 'Buy':
                if (isIn === -1) {
                    inventory.push(item);
                }
                break;
            case 'Trash':
                if (isIn !== -1) {
                    inventory.splice(isIn, 1);
                }
                break;
            case 'Repair':
                if (isIn !== -1) {
                    let equipment = inventory.splice(isIn, 1);
                    inventory.push(equipment[0]);
                }
                break;
            case 'Upgrade':
                let equipment = event[1].split('-');
                isIn = inventory.indexOf(equipment[0]);
                if (isIn != -1) {
                    inventory.splice(isIn +1, 0, equipment.join(':'));
                }
                    break;

        }

    }
    return inventory.join(' ');
}
console.log(gladiator(['SWORD Shield Spear', 'Buy Bag', 'Trash Shield', 'Repair Spear', 'Upgrade SWORD-Steel']));
console.log(gladiator(['SWORD Shield Spear', 'Trash Bow', 'Repair Shield', 'Upgrade Helmet-V'] ));
