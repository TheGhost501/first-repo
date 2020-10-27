function inventory(array) {
    let inventory = array.shift().split(', ');
    for (let command of array) {
        let [action, item] = command.split(' - ');
        let index = inventory.indexOf(item);

        switch (action) {
            case 'Collect':
                if (index === -1) {
                    inventory.push(item);
                }
                break;
            case 'Drop':
                if (index != -1) {
                    inventory.splice(index, 1);
                }
                break;
            case 'Combine Items':
                let items = item.split(':');
                let oldItem = items[0];
                let newItem = items[1];
                index = inventory.indexOf(oldItem);
                if (index != -1) {
                    inventory.splice(index + 1, 0, newItem);
                }

                break;
            case 'Renew':
                let renewed = inventory.splice(index, 1)
                inventory.push(renewed);
                break;
            case 'Craft!':
                return inventory.join(', ');
        }
    }
}
console.log(inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]
));
