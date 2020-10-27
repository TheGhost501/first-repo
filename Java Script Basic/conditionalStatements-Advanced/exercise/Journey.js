function journey(input){
    let budget = +input.shift();
    let season = input.shift();
    let location;
    let expense = 0.0;
    let accom;
    if (budget <= 100) {
        location = 'Bulgaria';
         switch (season){
         case 'summer':
             expense = budget * 0.3;
             accom = 'Camp'; break;
        case 'winter':
             expense = budget * 0.7;
             accom = 'Hotel'; break;}   }
    else if (budget <=1000) {
        location = 'Balkans';
         switch (season){
         case 'summer':
             expense = budget * 0.4;
             accom = 'Camp'; break;
        case 'winter':
             expense = budget * 0.8;
             accom = 'Hotel'; break; }  }
    else {
        location = 'Europe';
        expense = budget * 0.9;
        accom = 'Hotel';  }
        console.log(`Somewhere in ${location}`)
        console.log(`${accom} - ${expense.toFixed(2)}`)
    }
    journey(['50', 'summer'])
    journey(['75', 'winter'])
    journey(['312', 'summer'])
    journey(['678.53', 'winter'])
    journey(['1500', 'summer'])