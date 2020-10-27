function pets(input) {
    let days = +input.shift();
    let totalfood = +input.shift();
    let cookies = 0;
    let dogfood = 0;
    let catfood = 0;

    for( i = 1; i <= days; i++) {
        let dog = +input.shift();
        let cat = +input.shift();
        if (i !== 1 && i % 3 === 0) {
            cookies += (dog + cat) * 0.1;
        }
        dogfood += dog;
        catfood += cat;
    } 


    let foodeaten = dogfood + catfood ;
    let totalprocent = (foodeaten / totalfood) * 100;
    let dogprocent = (dogfood / foodeaten) * 100;
    let catprocent = (catfood / foodeaten) * 100;

    console.log(`Total eaten biscuits: ${cookies.toFixed(0)}gr.`)
    console.log(`${totalprocent.toFixed(2)}% of the food has been eaten.`)
    console.log(`${dogprocent.toFixed(2)}% eaten from the dog.`)
    console.log(`${catprocent.toFixed(2)}% eaten from the cat.`)

}
pets([3,1000,300,  20, 100,30, 110, 40])