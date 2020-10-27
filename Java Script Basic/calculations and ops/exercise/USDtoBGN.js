function convert(input) {
    let USD  = Number(input.shift())
    let BGN = USD * 1.79549
    console.log(BGN.toFixed(2))

}

convert(['20'])
convert(['100'])
convert(['12.5'])
