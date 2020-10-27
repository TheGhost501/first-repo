function degrees(input) {
    let rad = Number(input.shift())
    let degr = rad * 180 / Math.PI
    console.log(degr.toFixed(0))
}
degrees(['2.34'])