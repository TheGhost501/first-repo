function diamond(input) {
    let n = Number(input.shift());
    let string = '';
    let leftRight = Math.floor((n - 1) / 2);
    for (let i = 1; i <= (n + 1) / 2; i++) {
        let mid = parseInt(n - 2 * leftRight - 2);
        if (mid >= 0) {
            string = '-'.repeat(leftRight) + '*' + '-'.repeat(mid) + '*' + '-'.repeat(leftRight);
        } else {
            string = string = '-'.repeat(leftRight) + '*' + '-'.repeat(leftRight);
        }

        console.log(string);
        leftRight--;
    }
        leftRight = 1;
    for (let j = 1; j <= Math.ceil(n / 2 - 1); j++) {
        let mid = parseInt(n - 2 * leftRight - 2);
        if (mid >= 0) {
            string = '-'.repeat(leftRight) + '*' + '-'.repeat(mid) + '*' + '-'.repeat(leftRight);
        } else {
            string = string = '-'.repeat(leftRight) + '*' + '-'.repeat(leftRight);
        }

        console.log(string);
        leftRight++;
    }
}
diamond([55])