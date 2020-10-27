function grades(inp) {
    let students = Number(inp.shift());
    let grade = Number(inp.shift());
    let gradeSum = 0;
    let topStudents = 0;
    let studentsB = 0;
    let studentsC = 0;
    let fail = 0;
    for (i = 1; i <= students; i++) {
        if (grade < 3) {
            fail++;
        } else if (grade < 4) {
            studentsC++;
        } else if (grade < 5) {
            studentsB++;
        } else {
            topStudents++;
        }
        gradeSum += grade;
        grade = Number(inp.shift());
    }
    let average = gradeSum / students;

    console.log(`Top students: ${(topStudents / students * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${(studentsB / students * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${(studentsC / students * 100).toFixed(2)}%`);
    console.log(`Fail: ${(fail / students * 100).toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`);

}
grades([10, 3.00, 2.99, 5.68, 3.01, 4, 4, 6.00, 4.50, 2.44, 5])
grades([6, 2, 3, 4, 5, 6, 2.2])