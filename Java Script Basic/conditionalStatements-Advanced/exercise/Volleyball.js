function volleyball(input) {
    let year = input.shift();
    let holiday = +input.shift();
    let weekends = +input.shift();
    let sofia = (48 - weekends) * (3.0/4);
    let holplays = holiday * (2.0/3);
    let total = sofia + weekends + holplays;
    if (year == 'leap') {total *= 1.15};
    console.log(Math.floor(total))

}
volleyball(['normal',  3,  2, ])
volleyball(['leap',  2,  3, ])
volleyball(['normal',  11,  6, ])
volleyball(['leap',  0,  1, ])
volleyball(['normal',  6,  13, ])