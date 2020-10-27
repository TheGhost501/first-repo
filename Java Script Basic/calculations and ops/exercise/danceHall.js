function dancehall(input) {
    let l = Number(input.shift());
    let w = Number(input.shift());
    let a = Number(input.shift());
    let hall = (l*100) * (w*100);
    let acm = a * 100;
    let wardrobe = acm * acm; 
    let bench = hall / 10;
    let freearea = hall - wardrobe - bench;
    let dancers = Math.floor(freearea / (40 + 7000));
    console.log(dancers)
}
dancehall(['50' , '25' , '2'])