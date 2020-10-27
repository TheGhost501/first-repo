function isEven(input) {
    let number = parseInt(input.shift());
    if(number % 2 == 0 ) {console.log('even')}
    else {console.log('odd')}
}
isEven(['10'])
isEven(['5'])