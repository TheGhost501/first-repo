function fishing(input) {
    let money = Number(input.shift());
    let season = input.shift();
    let fishermen = Number(input.shift());
    let price = 0.0;
    switch (season) {
        case 'Spring': 
             if (fishermen <=6) { price = 3000 * 0.9;}
             else if (fishermen >=7 && fishermen <=11){ price = 3000 * 0.85;}
             else {price = 3000 * 0.75;};break;
        case 'Summer': 
              if (fishermen <=6) { price = 4200 * 0.9;}
             else if (fishermen >=7 && fishermen <=11){ price = 4200 * 0.85;}
              else {price = 4200 * 0.75;};break;
        case 'Autumn': 
             if (fishermen <=6) { price = 4200 * 0.9;}
             else if (fishermen >=7 && fishermen <=11){ price = 4200 * 0.85;}
             else {price = 4200 * 0.75;};break;
        case 'Winter': 
             if (fishermen <=6) { price = 2600  * 0.9;}
             else if (fishermen >=7 && fishermen <=11){ price = 2600  * 0.85;}
             else {price = 2600  * 0.75;};break;
    }
    let total = 0.0;
    if (fishermen % 2 == 0 && !(season == 'Autumn')) {total = price * 0.95;}
    else {total = price}
    let final = Math.abs(money - total);
    if (money >= total) {console.log(`Yes! You have ${final.toFixed(2)} leva left.`)}
    else {console.log(`Not enough money! You need ${final.toFixed(2)} leva.`)}
}
fishing(['3000', 'Summer', '11' ])
fishing(['3600', 'Autumn', '6' ])
fishing(['2000', 'Winter', '13' ])
  