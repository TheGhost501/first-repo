function numsum(input){
    let text = input.shift();
    let sum = 0;
    while (text !== 'Stop')
    {num = +text
        sum += num;
        text = input.shift();}
    console.log (sum)
}
numsum(['10','20','30','45','Stop'])