function destionaton(input) {
    let pattern = /(\=|\/)([A-Z][A-Za-z]{2,})\1/g;
    let validDestionations = [];
    let validName = null;
    while ((validName = pattern.exec(input)) !== null) {
        validDestionations.push(validName[2]);
    }
    let points = 0;
    for (let name of validDestionations) {
        points += name.length;
    }
    console.log(`Destinations: ${validDestionations.join(', ')}`);
    console.log(`Travel Points: ${points}`)
}
destionaton('=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=/ASF/')
