function greater(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    if(a>b) {console.log(a)}
    else {console.log(b)}
}
greater(['4', '5'])
greater(['8', '10'])
greater(['10', '10'])