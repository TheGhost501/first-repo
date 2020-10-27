function race(array) {
    let participants = array.shift().split(', ')
        .reduce((acc, cur) => {
            acc[cur] = 0;
            return acc;
        }, {});

    let namePattern = /[a-zA-Z]/gm;
    let distPattern = /\d/gm;

    let raceData = array.slice(0, array.indexOf('end of race'))
        .forEach(element => {
            let name = element.match(namePattern).join('');
            let distance = element.match(distPattern).map(Number).reduce((a, c) => a + c);
            if (participants.hasOwnProperty(name)) {
                participants[name] += distance;
            }
        });;
    let sorted = Object.keys(participants).sort((a, b) => participants[b] - participants[a]);
        
    return `1st place: ${sorted[0]}\n2nd place: ${sorted[1]}\n3rd place: ${sorted[2]}`
}
console.log(race([
    'George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]));