function calculateCone(radius, height) {
    let pi = Math.PI;
    let s = Math.sqrt((radius * radius + height * height));
    let volume = (1 / 3) * pi * Math.pow(radius, 2) * height;
    let area = pi * radius * (s + radius);
    console.log(`volume = ${volume.toFixed(4)} \narea = ${area.toFixed(4)}`);

}
calculateCone(3, 5)