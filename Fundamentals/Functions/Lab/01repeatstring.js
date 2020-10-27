function print(one, two) {
    let sum = string(one, two);
    console.log(sum);

    function string(str, num) {

        let result = '';
        for (let i = 1; i <= num; i++) {
            result += str;
        }
        return result
    }
}
print('abc', 3)