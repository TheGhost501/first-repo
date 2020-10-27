function furniture(array) {
    let pattern = />>([a-zA-z]+)<<(\d+\.?\d+)!(\d+)/gm;
    let lines = array.slice(0, array.indexOf('Purchase')).join('\n');
    let furnitureArray = Array.from(lines.matchAll(pattern));
    let totalMoneySpend = 0;
    let output = 'Bought furniture:';
    for (let current of furnitureArray) {
        let name = current[1];
        let price = Number(current[2]);
        let quantity = Number(current[3]);
        output +=`\n${name}`;
        totalMoneySpend += price * quantity;
    }
    output +=`\nTotal money spend: ${totalMoneySpend.toFixed(2)}`;
    console.log(output);
}
furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']
);