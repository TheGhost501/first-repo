function same(number) {
    let text = number.toString();
    let end = text.length;
    let sameNum = Number(text[0]);
    let areSame = true;
    let sum = sameNum;
    for (let i = 1; i < end; i++) {
        let curNum = Number(text[i]);
        if (sameNum !== curNum) {
            areSame = false;
        } 
        sum += curNum;
    }
    console.log(areSame);
    console.log(sum);
}
same(1231)