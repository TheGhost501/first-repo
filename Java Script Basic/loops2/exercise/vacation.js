function vacation(input) {
    let neededMoney = +input.shift();
    let available = +input.shift();
    let days = 0.0;
    let daysspend = 0.0;
    while (daysspend !== 5) {
        let action = input.shift();
        let amount = +input.shift();
        days++; 
        switch (action) {
            case 'spend': available -= amount;
                if (available < 0) { available = 0 };
                daysspend++; break;
            case 'save': available += amount; break;
        } if (available >= neededMoney) { break; }
        if (action == 'save') {daysspend = 0;}
      
    }
    if (daysspend == 5) {
        console.log("You can't save the money.");
        console.log(days)
    } else {console.log(`You saved the money for ${days} days.`)}
}
vacation([2000,1000,'spend',1200,'save',2000,])
vacation([250,150,'spend', 50, 'spend', 50, 'save', 100, 'save',100, ])
vacation([110,60, 'spend', 10, 'spend', 10, 'spend',10, 'spend',10,'spend', 10])