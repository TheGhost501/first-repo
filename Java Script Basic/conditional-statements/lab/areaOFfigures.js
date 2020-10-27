function figuresarea(input) {
    let shape = input.shift();
    let area = 0;
    if (shape === 'square') {
    let a = Number(input.shift());
    let area = a * a;  console.log(area.toFixed(3))}
    else if (shape === 'rectangle') {
    let sideA = Number(input.shift());
    let sideB = Number(input.shift());
    let area = sideA * sideB; console.log(area.toFixed(3)) }
    else if (shape === 'circle') {
    let r = Number(input.shift());
    let area = Math.PI * r * r;  console.log(area.toFixed(3))}
    else if (shape === 'triangle') {
    let sideh = Number(input.shift());
    let h = Number(input.shift());
    let area = sideh * h / 2; console.log(area.toFixed(3)) }

    
}
figuresarea(['square', '5'])
figuresarea(['rectangle', '7' , '2.5'])
figuresarea(['circle', '6'])
figuresarea(['triangle', '4.5' , '20'])