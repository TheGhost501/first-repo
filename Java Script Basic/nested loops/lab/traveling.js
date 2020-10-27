function travel(input) {

    let country = input.shift();

    while (country !== 'End') {
        let money = +input.shift();

        while (money > 0) {
            let added = +input.shift();
            money -= added;

        }
    console.log(`Going to ${country}!`);
    country = input.shift();
    }
}