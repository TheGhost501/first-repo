function book(input) {

    let book = input.shift();
    let totalbooks = +input.shift();
    let counter = 1;
    let next;
    while (counter <= totalbooks) {
        next = input.shift();
        if (next == book) { break; }
        counter++;
    }
    if (next == book) { console.log(`You checked ${counter -1} books and found it.`) }
    else {
        console.log('The book you search is not here!');
        console.log(`You checked ${totalbooks} books.`)
    }
}
book(['The Spot', 4, 'Hunger Games', 'Harry Potter','Torronto',  'Spotify',])
book(['Troy', 8, 'Stronger', 'Life Style', 'Troy'])
