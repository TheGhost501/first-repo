function assignemts(input) {
    let maxbad = +input.shift();
    let bad = 0.0;
    let sum = 0.0;
    let gradeSum = 0.0;
    let lastproblem = '';
    while (bad !== maxbad) {
        let name = input.shift();
        let grade = +input.shift();
        if (name == 'Enough') {
            let average = sum / gradeSum;
            console.log(`Average score: ${average.toFixed(2)}`);
            console.log(`Number of problems: ${gradeSum}`);
            console.log(`Last problem: ${lastproblem}`)
            break;
        }
        sum += grade;
        gradeSum += 1;
        if (grade <= 4) {
            bad += 1;}
            lastproblem = name;
    }

    if (bad == maxbad) { console.log(`You need a break, ${bad} poor grades.`) }

}
assignemts([3, 'Money', 6, 'Story', 4, 'Spring Time', 5, 'Bus', 6, 'Enough',])