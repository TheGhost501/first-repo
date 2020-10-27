function graduation2(input) {
    let name = input.shift();
    let counter = 1;
    let sum = 0;
    while (counter <= 12) {
        let grade = +input.shift();
        if (grade < 4) {
            console.log(`${name} has been excluded at ${counter} grade`); break;
        }
        sum += grade;
        counter++;
    }
    let average = sum / 12;
       if (counter == 13) { console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`) }
}
graduation2(['Mimi', 5, 6, 5, 6, 5, 6, 6, 2, 3])