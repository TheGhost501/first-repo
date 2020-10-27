function legendary(string) {
    let inventory = { fragments: 0, shards: 0, motes: 0 };
    let items = string.split(' ');
    for (let i = 0; i < items.length; i += 2) {
        if (inventory['fragments'] >= 250 || inventory['shards'] >= 250 || inventory['motes'] >= 250) {
            break;
        }
            let quantity = items[i];
        let item = (items[i + 1]).toLowerCase();
        if (inventory[item] == undefined) {
            inventory[item] = 0;
        }

        inventory[item] += Number(quantity);
    }

    let legendaryItem = '';
    if (inventory['fragments'] >= 250) {
        legendaryItem = 'Valanyr';
        inventory['fragments'] -= 250;
    } else if (inventory['shards'] >= 250) {
        legendaryItem = 'Shadowmourne';
        inventory['shards'] -= 250;
    } else if (inventory['motes'] >= 250) {
        legendaryItem = 'Dragonwrath';
        inventory['motes'] -= 250;
    }
    let keyMaterials = ['fragments', 'motes', 'shards'].sort((a, b) => {
        if (inventory[a] == inventory[b]) {
            return a.localeCompare(b);
        } else {
            return inventory[b] - inventory[a];
        }
    })
    let junk = Object.keys(inventory).filter(a => {
        if (a == 'fragments' || a == 'shards' || a == 'motes') {
            return false;
        } else {
            return true;
        }
    });

    junk.sort((a, b) => a.localeCompare(b));

    let output = '';
    output += `${legendaryItem} obtained!\n`;
    for (let material of keyMaterials) {
        output += `${material}: ${inventory[material]}\n`;
    }
    for (let material of junk) {
        output += `${material}: ${inventory[material]}\n`;
    }

    return output;
}
console.log(legendary('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'));
console.log(legendary('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'));


