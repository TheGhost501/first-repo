function catalogue(array) {
    let cataloged = [];
    for (let string of array) {
        let index = string[0];
        let item = string.replace(' : ', ': ')
        cataloged.push({ index: index, item: item })
    }
    cataloged.sort((a, b) => (a.item).localeCompare(b.item));
    let output = '';
    let currentGroup = '';
    for (let i = 0; i < cataloged.length; i++) {
        let item = cataloged[i];
        let group = item.index;
        let newGroup = false;
        if (currentGroup != group) {
            currentGroup = group;
            newGroup = true;
        }
        if (newGroup) {
            if (output === '') {
                output += group;
            } else {
                output += `\n${group}`;
            }

            output += `\n  ${item.item}`;
        } else {
            output += `\n  ${item.item}`;
        }
    }
    return output;
}
console.log(catalogue(['Appricot : 20.4',
    'Fridge : 1500', 'TV : 1499', 'Deodorant : 10',
    'Boiler : 300', 'Apple : 1.25', 'Anti-Bug Spray : 15',
    'T-Shirt : 10']));