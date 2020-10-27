function seats(data) {
    let lastSector = data.shift();
    let firstRows = Number(data.shift());
    let oddSeats = Number(data.shift());
    let allSeats = 0;
    for (let i = 65; i <= lastSector.charCodeAt(); i++) {
        for (let row = 1; row <= firstRows; row++) {
            let totalSeats;
            if (row % 2 !== 0) {
                totalSeats = oddSeats;
            } else {
                totalSeats = oddSeats + 2;
            }
            for (let seat = 97; seat <= totalSeats + 96; seat++) {
                let a = String.fromCharCode(i);
                let b = String.fromCharCode(seat);
                console.log(`${a}${row}${b}`);
                allSeats++;
            }

        }
        firstRows++;
    }
    console.log(allSeats);

}
seats(['B', 3, 2])
