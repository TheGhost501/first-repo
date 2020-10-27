function change(string) {
    let stringArr = string.split(' ').filter((a) => { if (a != '') { return true } });
    let totalSum = 0;
    for (let word of stringArr) {
        let currentSum = 0;
        let firstLetter = word[0];
        let number = Number(word.substring(1, word.length - 1));
        let secondLetter = word[word.length - 1];
        let firstPosition = (firstLetter.toLowerCase().charCodeAt() - 96);
        let secondPosition = (secondLetter.toLowerCase().charCodeAt() - 96);
        if (firstLetter.toUpperCase() === firstLetter) {
            currentSum += number / firstPosition;
        } else if (firstLetter.toLowerCase() === firstLetter) {
            currentSum += number * firstPosition;
        }

        if (secondLetter.toUpperCase() === secondLetter) {
            currentSum -= secondPosition;
        } else if (secondLetter.toLowerCase() === secondLetter) {
            currentSum += secondPosition;
        }

        totalSum += currentSum;
    }

console.log(totalSum.toFixed(2));

}
change('a1A');