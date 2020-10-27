function puppy(input) {
    let dogfood = Number(input.shift());
    let dogfoodgrams = dogfood * 1000;
    let eat = input.shift();
    let totalfood = 0;
    while (eat !== 'Adopted') {
        totalfood += Number(eat);
        eat = input.shift();
    }
    let diff = Math.abs(dogfoodgrams - totalfood);
    if (dogfoodgrams >= totalfood) 
    { console.log(`Food is enough! Leftovers: ${diff} grams.`); }
    else { console.log(`Food is not enough. You need ${diff} grams more.`) }
}
puppy([4, 130, 345, 400, 180, 230, 120, 'Adopted'])