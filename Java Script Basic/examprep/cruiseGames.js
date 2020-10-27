function seagames(input) {
    let name = input.shift();
    let games = +input.shift();
    let volleyballgames = 0;
    let volleyballpoints = 0;
    let tennisgames = 0;
    let tennispoints = 0;
    let badmintongames = 0;
    let badmintonpoints = 0;
    for (let timesPlayed = 1; timesPlayed <= games; timesPlayed++) {
        let gamename = input.shift();
        let points = +input.shift();
        if (gamename == 'volleyball') {
            points *= 1.07;
            volleyballpoints += points;
            volleyballgames++;
        } else if (gamename == 'tennis') {
            points *= 1.05;
            tennispoints += points;
            tennisgames++;
        } else {
            points *= 1.02;
            badmintonpoints += points;
            badmintongames++;
        }
    }
    let averageVolley = (volleyballpoints / volleyballgames)
    let averageTennis = (tennispoints / tennisgames)
    let averageBadmin = (badmintonpoints / badmintongames)
    let totalpoints = volleyballpoints + tennispoints + badmintonpoints;
    if ( averageVolley >= 75 && averageTennis >= 75 && averageBadmin >= 75) {
        console.log(`Congratulations, ${name}! You won the cruise games with ${Math.floor(totalpoints)} points.`)
    } else {console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(totalpoints)}.`)}
}
seagames(['Pepi',  3, 'volleyball',78,'tennis', 98, 'badminton', 105 ])
seagames(['Annie', 5, 'badminton', 34,'tennis', 76, 'badminton', 10, 'volleyball', 62, 'badminton', 56 ])