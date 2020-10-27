function cardGame(array) {

    function sortDecks(input) {
        let players = {};

        for (let draw of input) {
            let playerName = draw.split(': ')[0];
            let cards = draw.split(': ')[1].split(', ');
            if (!players.hasOwnProperty(playerName)) {
                players[playerName] = cards;
            } else {
                players[playerName] = players[playerName].concat(cards);
            }
        }

        for (let key in players) {
            let element = players[key];
            players[key] = Array.from(new Set(element));
        }

        return players;
    }

    let playerDecks = sortDecks(array);
    let output = '';

    for (let player in playerDecks) {
        let deck = playerDecks[player];
        let playerScore = 0;
        for (let i = 0; i < deck.length; i++) {
            let card = deck[i];
            let cardValue = 0;
            let cardPower = 0;

            if (Number(card[0]) >= 2 && Number(card[0]) < 10) {
                cardValue = Number(card[0]);
            } else if (card[0] === '1') {
                cardValue = 10;
            } else if (card[0] === 'J') {
                cardValue = 11;
            } else if (card[0] === 'Q') {
                cardValue = 12;
            } else if (card[0] === 'K') {
                cardValue = 13;
            } else if (card[0] === 'A') {
                cardValue = 14;
            }

            switch (card[card.length - 1]) {
                case 'S':
                    cardPower = 4; break;
                case 'H':
                    cardPower = 3; break;
                case 'D':
                    cardPower = 2; break;
                case 'C':
                    cardPower = 1; break;
            }

            playerScore += cardValue * cardPower;
        }

        output += `${player}: ${playerScore}\n`;
    }

    return output;
}
console.log(cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]
));
