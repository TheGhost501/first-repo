function loading(number) {
    let procent = number / 10;
    let bar = '%'.repeat(procent) + '.'.repeat(10 - procent);
        if (number < 100) {
            console.log(`${number}% [${bar}]`);
            console.log('Still loading...');           
        } else {
            console.log('100% Complete!');
            console.log(`[${bar}]`);
            
        }

}
loading(70)