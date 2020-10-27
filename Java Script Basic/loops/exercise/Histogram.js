function histogram(input) {
    let n = +input.shift();
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;
    for (i = 1; i <= n; i++) {
        let number = +input.shift();
        if (number < 200) { p1 += 1; }
        else if (number >= 200 && number < 400) { p2 += 1; }
        else if (number >= 400 && number < 600) { p3 += 1; }
        else if (number >= 600 && number < 800) { p4 += 1; }
        else { p5 += 1; }
    }
    let proP1 = p1 / n * 100;
    let proP2 = p2 / n * 100;
    let proP3 = p3 / n * 100;
    let proP4 = p4 / n * 100;
    let proP5 = p5 / n * 100;
    console.log(proP1.toFixed(2) +'%')
    console.log(proP2.toFixed(2) +'%')
    console.log(proP3.toFixed(2) +'%')
    console.log(proP4.toFixed(2) +'%')
    console.log(proP5.toFixed(2) +'%')
}
histogram([3,1,2,999])