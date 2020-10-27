function aquarium(input) {
    let a = Number(input.shift());
    let b = Number(input.shift());
    let h = Number(input.shift());
    let c = Number(input.shift());
    let volume = a * b * h
    let litre = volume * 0.001
    let procent = c * 0.01
    let real = litre * (1 - procent)
    console.log(real.toFixed(3))
}
aquarium(['85', '75' ,'47', '17'])
aquarium(['105', '77' ,'89', '18.5'])