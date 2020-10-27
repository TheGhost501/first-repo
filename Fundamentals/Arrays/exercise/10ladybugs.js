function ladyBugs(stringsArray) {
    let lenght = stringsArray.shift();
    let array = new Array(lenght).fill(0);
    let location = stringsArray.shift();
    let bugsLocation = location.split(' ');

    for (let index of bugsLocation) {
        i = Number(index);
        if (i >= 0 && i < array.length)
            array[i] = 1;
    }

    for (let meta of stringsArray) {
        let move = meta.split(' ');
        let bugIndex = Number(move.shift());
        let direction = move.shift();
        let positions = Number(move.shift());
        let newPosition;
        if (array[bugIndex] === 1) {
            if (positions < 0) {
                positions = Math.abs(positions);
                if (direction === 'left') {
                    direction = 'right';
                } else {
                    direction = 'left';
                }
            }

            if (direction === 'left') {
                positions *= -1;
            }
            array[bugIndex] = 0;
            newPosition = bugIndex + positions;
            while (array[newPosition] === 1) {
                newPosition += positions;
                if (newPosition < 0 || newPosition >= array.length) {
                    break;
                }
            }
            if (newPosition >= 0 && newPosition < array.length) {
                array[newPosition] = 1;
            }
        }

    }
    console.log(array.join(' '))
}

ladyBugs([3, '0 1', '0 right 1', '2 right 1'])
ladyBugs([5, '3', '3 left 2', '1 left -2'])