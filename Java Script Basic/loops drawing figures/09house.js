function house(input) {
    let n = Number(input.shift());
    let top = '';
    let bottom = '';
    let stars;
    if (n % 2 === 0) {
        stars = 2;
    } else {
        stars = 1;
    }
    for (let i = 1; i <= (n + 1) / 2; i++) {

        let dash = (n - stars) / 2;
        top = '-'.repeat(dash) + '*'.repeat(stars) + '-'.repeat(dash);
        console.log(top);
        stars += 2;
    }
    for (let j = 0; j <= n / 2 - 1; j++) {
        bottom = '|' + '*'.repeat(n - 2) + '|';
        console.log(bottom);


    }

}
house([24])