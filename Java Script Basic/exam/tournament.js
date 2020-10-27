function sports(input) {
    let days = Number(input.shift());
    let dayswon = 0;
    let dayslost = 0;
    let moneyraised = 0;

    for (i = 0; i < days; i++) {
        let sport = input.shift();
        let wins = 0;
        let losses = 0;
        let money = 0;
        while (sport !== 'Finish') {
            let outcome = input.shift();
            if (outcome == 'win') {
                wins++;
                money += 20;
             } else {
                losses++;
            }
            sport = input.shift();
        }
        if (wins > losses) {
            money *= 1.1;
            dayswon++;
        } else { dayslost++; }
        moneyraised += money;

    }

    if (dayswon > dayslost) {
        moneyraised *= 1.2;
        console.log(`You won the tournament! Total raised money: ${moneyraised.toFixed(2)}`)
    } else { console.log(`You lost the tournament! Total raised money: ${moneyraised.toFixed(2)}`) }
}
sports([2, 'volleyball','win','football','lose','basketball','win','Finish', 
'golf', 'win', 'tennis', 'win', 'badminton', 'win', 'Finish'])