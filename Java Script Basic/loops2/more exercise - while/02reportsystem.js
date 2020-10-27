function report(imp) {
    let count = 1;
    let required = imp.shift();
    let payment = imp.shift();
    let totalPayed = 0;
    let cardPayments = 0;
    let cashPayments = 0;
    let timesCard = 0;
    let timesCash = 0;
    while (payment !== 'End') {
        if (count % 2 === 0) {
            if (payment < 10) {
                console.log('Error in transaction!')
            } else {
                cardPayments += Number(payment);
                totalPayed += Number(payment);
                timesCard++;
                console.log('Product sold!');
                
            }
        } else {
            if (payment > 100) {
                console.log('Error in transaction!')
            } else {
                cashPayments += Number(payment);
                totalPayed += Number(payment);
                timesCash++;
                console.log('Product sold!');
            }
        }
        if (totalPayed >= required) {
            console.log(`Average CS: ${(cashPayments / timesCash).toFixed(2)}`);
            console.log(` Average CC: ${(cardPayments / timesCard).toFixed(2)}`); break;
        } else {
            count++;
            payment = imp.shift();
        }
    }
    if (payment === 'End') {
        console.log('Failed to collect required money for charity.');

    }
}
report([500, 120, 8, 63, 256, 78, 317])
report([600, 86, 150, 98, 227, 'End'])