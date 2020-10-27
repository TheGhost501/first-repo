function cinema(input) {
    let type = input.shift();
    let rows = Number(input.shift());
    let columns = Number(input.shift());
    let income = 0.0;
    switch(type){
        case 'Premiere':
            income = columns * rows *12; break;
        case 'Normal':
            income = columns * rows *7.5; break;
        case 'Discount':
            income = columns * rows *5; break;
    }
    console.log(`${income.toFixed(2)}
     leva`);
}