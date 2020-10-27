function tickets(input) {
    let movie = input.shift();
    let students = 0;
    let standarts = 0;
    let kids = 0;
    let totaltickets = 0;
    while (movie !== 'Finish') {
        let seats = +input.shift();
        let ppl = 0;
        let ticket = input.shift();
        while (ticket !== 'End') {
            ppl++;
            switch (ticket) {
                case 'student': students++; break;
                case 'standard': standarts++; break;
                case 'kid': kids++; break;
            }
            totaltickets++;
            if (seats === ppl) { break; } 
            ticket = input.shift();
        }
        let full = ppl / seats * 100;
        console.log(`${movie} - ${full.toFixed(2)}% full.`);
        movie = input.shift();
    }
    let proStudents = students / totaltickets * 100;
    let proStandart = standarts / totaltickets * 100;
    let proKids = kids / totaltickets * 100;
    console.log(`Total tickets: ${totaltickets}`);
    console.log (`${proStudents.toFixed(2)}% student tickets.`);
    console.log (`${proStandart.toFixed(2)}% standard tickets.`);
    console.log (`${proKids.toFixed(2)}% kids tickets.`);
}
tickets([
    'The Matrix',
    '20',
    'student', 'standard',
    'kid', 'kid',
    'student', 'student',
    'standard', 'student',
    'End',

    'The Green Mile',
    '17', 'student',
    'standard', 'standard',
    'student', 'standard',
    'student', 'End',

    'Amadeus', '3',
    'standard', 'standard',
    'standard', 'Finish'
])