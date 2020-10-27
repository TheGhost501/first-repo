function graduation(input) {
    let name = input.shift();
    let counter = 1;
    let sum = 0;
    while (counter <= 12) {
        let grade = +input.shift();
        if (grade < 4) { continue; }
        sum += grade;
        counter++; 
    }
    let average = sum / 12;
    console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`)
}