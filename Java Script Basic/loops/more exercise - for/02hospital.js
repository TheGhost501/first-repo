function hospital(input) {
    let days = Number(input.shift());
    let patients = Number(input.shift());
    let doctors = 7;
    let treated = 0;
    let untreated = 0;
    for (i = 1; i <= days; i++) {
        if (i % 3 === 0 && untreated > treated) {
            doctors++;
        }
        if (patients < doctors) {
            treated += patients;
        } else {
            treated += doctors;
            untreated += patients - doctors;
        }
        patients = Number(input.shift());
    }
    console.log(`Treated patients: ${treated}.`);
    console.log(`Untreated patients: ${untreated}.`);

}
hospital([4, 7, 27, 9, 1])