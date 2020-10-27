function flowers(magnolia, zumbiul, rose, cactus, present) {
    let flower1 = magnolia * 3.25;
    let flower2 = zumbiul * 4;
    let flower3 = rose * 3.5;
    let flower4 = cactus * 8;
    let totalflowers = (flower1 + flower2 + flower3 + flower4) * 0.95;
    let diff = 0;
    if (totalflowers >= present) {
        diff = totalflowers - present;
        console.log(`She is left with ${Math.floor(diff)} leva.`);
    } else {
        diff = present - totalflowers;
        console.log(`She will have to borrow ${Math.ceil(diff)} leva.`)
    }
}
flowers(2, 3, 5, 1, 50)
flowers(15, 7, 5, 10, 100)