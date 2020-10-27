function division234(input) {
    let n = +input.shift();
    let div2 = 0;
    let div3 = 0;
    let div4 = 0;
    for (i = 0; i < n; i++) {
        let number = +input.shift();
     if (number % 4 === 0) { div4 += 1; }
     if (number % 3 === 0) { div3 += 1; }
     if (number % 2 === 0) { div2 += 1; }

    }
    let pro2 = div2 / n * 100;
    let pro3 = div3 / n * 100;
    let pro4 = div4 / n * 100;
    console.log(pro2.toFixed(2)+'%')
    console.log(pro3.toFixed(2)+'%')
    console.log(pro4.toFixed(2)+'%')
}
division234([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])
