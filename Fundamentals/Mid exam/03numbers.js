function numbers(string) {
    let numbersArr = string.split(' ').map(x => Number(x));
    let total = 0;
    numbersArr.forEach(element => {
        total += element;
    });
    let average = total / numbersArr.length;
    let above = [];
    numbersArr.sort((a, b) => b - a);
    for (let i = 0; i < numbersArr.length; i++) {
        if (above.length >= 5) {
            break;
        }
        let num = numbersArr[i];
        if (num > average) {
            above.push(num);
        }

    } if (above.length != 0) {
        console.log(above.join(' '));
    } else {
        console.log('No');

    }


}
numbers('10 20 30 40 50'); 