function distance(x1, y1, x2, y2) {
    let firstPart = Math.pow((x2 - x1), 2);
    let secondPart = Math.pow((y2 - y1), 2);
    let distance = Math.sqrt(firstPart + secondPart);
    console.log(distance)
}
distance(2.34, 15.66, -13.55, -2.9985)