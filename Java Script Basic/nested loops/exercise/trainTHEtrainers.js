function train(input) {
    let judges = +input.shift();
    let sumgrades = 0;
    let assignment = input.shift();
    let counterGrades = 0;

    while (assignment !== 'Finish') {
        let currentGrade = 0;
        for (i = 1; i <= judges; i++) {
            let grade = +input.shift();
            currentGrade += grade;
            sumgrades += grade;
            counterGrades++;
        }
        let currentFinal = currentGrade / judges;
        console.log(`${assignment} - ${currentFinal.toFixed(2)}.`)
        currentGrade = 0;
        assignment = input.shift();
    }
    let finalgrade = sumgrades / counterGrades;
    console.log(`Student's final assessment is ${finalgrade.toFixed(2)}.`)
}
train([2, 'While-Loop', 6.00, 5.50, 'For-Loop', 5.84, 5.66, 'Finish'])
train([3, 'Arrays', 4.53, 5.23, 5.00, 'Lists', 5.83, 6.00, 5.42, 'Finish'])