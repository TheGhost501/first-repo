function gamming(array) {
    let games = array.shift().split(' ');

    for (let line of array) {
        let [command, game] = line.split(' ');
        let index = games.indexOf(game);
        switch (command) {
            case 'Install':
                if (!games.includes(game)) {
                    games.push(game);
                }
                break;
            case 'Uninstall':
                if (index > -1) {
                    games.splice(index, 1);
                }
                break;
            case 'Update':
                if (index > -1) {
                    games.splice(index, 1);
                    games.push(game);
                }
                break;
            case 'Expansion':
                let [thisGame, expansion] = game.split('-');
                let newGame = [thisGame, expansion].join(':');
                if (games.includes(thisGame)) {
                    let thisIndex = games.indexOf(thisGame);
                    games.splice(thisIndex + 1, 0, newGame);
                }
                break;
        }
    }

    return games.join(' ');
}
console.log(gamming(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']
));