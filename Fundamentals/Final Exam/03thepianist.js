function piano(array) {
    let numberOfTunes = Number(array[0]);
    let pieces = array.slice(1, numberOfTunes + 1);
    let commandsArr = array.slice(numberOfTunes + 1, array.indexOf('Stop'));
    let album = {};
    for (let line of pieces) {
        let [piece, composer, key] = line.split('|');
        album[piece] = { composer, key };
    }

    for (let line of commandsArr) {
        let lineArr = line.split('|');
        let command = lineArr[0];
        let pieceName = lineArr[1];
        if (command === 'Add') {
            let composer = lineArr[2];
            let key = lineArr[3];
            if (album[pieceName]) {
                console.log(`${pieceName} is already in the collection!`);
            } else {
                album[pieceName] = { composer, key };
                console.log(`${pieceName} by ${composer} in ${key} added to the collection!`);
            }
        } else if (command === 'Remove') {
            if (album[pieceName]) {
                delete album[pieceName];
                console.log(`Successfully removed ${pieceName}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        } else if (command === 'ChangeKey') {
            let newKey = lineArr[2];
            if (album[pieceName]) {
                album[pieceName].key = newKey;
                console.log(`Changed the key of ${pieceName} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${pieceName} does not exist in the collection.`);
            }
        }
    }

    let sorted = Object.keys(album).sort((a, b) => {
        let composerA = album[a].composer;
        let composerB = album[b].composer;
        if (a.localeCompare(b) == b.localeCompare(a)) {
            return composerA.localeCompare(composerB);
        } else {
            return a.localeCompare(b);
        }
    });

    for (let piece of sorted) {
        console.log(`${piece} -> Composer: ${album[piece].composer}, Key: ${album[piece].key}`);
    }
}
piano(['3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]);
piano(['4',
    'Eine kleine Nachtmusik|Mozart|G Major',
    'La Campanella|Liszt|G# Minor',
    'The Marriage of Figaro|Mozart|G Major',
    'Hungarian Dance No.5|Brahms|G Minor',
    'Add|Spring|Vivaldi|E Major',
    'Remove|The Marriage of Figaro',
    'Remove|Turkish March',
    'ChangeKey|Spring|C Major',
    'Add|Nocturne|Chopin|C# Minor',
    'Stop'
]);