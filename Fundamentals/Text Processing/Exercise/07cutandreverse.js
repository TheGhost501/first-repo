function cutNReverse(string) {
    let half = string.length / 2;
    let firstHalf = string.substr(0, half);
    let secondHalf = (string.substr(half));
    firstHalf = firstHalf.split('').reverse().join('');
    secondHalf = secondHalf.split('').reverse().join('');
    return (firstHalf + '\n' + secondHalf);
}
console.log(cutNReverse('tluciffiDsIsihTgnizamAoSsIsihT'));
