function minMax(input) {
    let times = +input.shift();
    let smallest = +input.shift();
    let bigest = smallest;
    
    for(n = 0; n < times; n++ ) {
        let number = +input.shift();
        if(number > bigest){bigest = number;}
        if(number < smallest) {smallest = number;}

    } console.log(`Max number: ${bigest}`);
    console.log (`Min number: ${smallest}`);
}
minMax([
    '5',
    '10',
    '20',
    '304',  
    '0' ,
    '50'])