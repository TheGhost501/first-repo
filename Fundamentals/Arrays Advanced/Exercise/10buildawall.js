function wall(input) {
    let array = input.map(Number).sort((a, b) => a - b);
    let end = 30 - array[0];
    let daily = [];
    let totalUsed = 0;
    for (let i = 1; i <= end; i++) {
        let segments = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j] < 30) {
                array[j] = array[j] + 1;
                segments += 195;
            }
        }
        daily.push(segments);
        totalUsed += segments;
    }

    console.log(daily.join(', '));
    console.log(totalUsed * 1900 + ' pesos');

}
wall([0, 1, 2, 3, 30, 29])