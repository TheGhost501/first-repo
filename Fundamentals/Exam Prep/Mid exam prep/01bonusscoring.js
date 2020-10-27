function score(array) {
    let students = Number(array.shift());
    let lectures = Number(array.shift());
    let bonus = Number(array.shift());
    let studentsArray = [];

    for (let i = 0; i < students; i++) {
        let atendances = array[i];
        if (atendances > lectures) {
            array[i] = lectures;
        }
        let totalPoints = atendances / lectures * (5 + bonus);
        studentsArray[i] = totalPoints;

    }

    let mostPoints = 0;
    let indexOfMost = 0;

    for (let l = 0; l < studentsArray.length; l++) {
        let num = studentsArray[l];
        if (num > mostPoints) {
            mostPoints = num;
            indexOfMost = l;
        }

    }

    if (students === 0) {
        mostPoints = 0;
        array[indexOfMost] = 0;
    }

    return `Max Bonus: ${Math.ceil(mostPoints)}.\nThe student has attended ${array[indexOfMost]} lectures.`;


}
console.log(score([
    '0', '0', '0', '8',
    '23', '27', '28', '15',
    '17', '25', '26', '5',
    '18'
]
));
