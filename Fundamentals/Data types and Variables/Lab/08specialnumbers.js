function special(number) {
    for (let i = 1; i <= number; i++) {
        let current = i.toString();
        let sum = 0;
        for (x = 0; x < current.length; x++) {
            sum += Number(current[x]);
        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }

    }
}
special(15)