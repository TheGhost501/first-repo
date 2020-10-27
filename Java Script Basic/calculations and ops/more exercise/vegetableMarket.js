function market(vegs,fruits,vegskg,fruitskg) {
    let total = (vegs * vegskg) + (fruits * fruitskg);
    console.log((total / 1.94).toFixed(2))
}
market(0.194, 19.4, 10, 10)