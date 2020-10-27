function paint(x, y, h) {
    let frontwalls = (x * x) * 2 - (2 * 1.2);
    let sidewalls = 2 * (x * y) - (2 * (1.5 * 1.5));
    let roof = (x * y) * 2 + (2 * (x * h / 2));
    let greenpaint = (frontwalls + sidewalls) / 3.4;
    let redpaint = roof / 4.3;
    console.log(greenpaint.toFixed(2))
    console.log(redpaint.toFixed(2))
}
paint(6, 10, 5.2)