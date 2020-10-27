function bomb(input, bombNum) {
    let number = bombNum.shift();
    let power = bombNum.shift();
    while (input.indexOf(number) >= 0) {
        let location = input.indexOf(number);
        if (location - power < 0) {
            input.splice(0, (location + 1 + power));
        } else {
        input.splice((location - power), (power * 2 + 1));
        }
    }
    let sum = 0;
    for (let num of input) {
        sum += num;
    }
    return sum;
}
console.log(bomb([1, 4, 4, 9, 8, 9, 1], [1, 2]));