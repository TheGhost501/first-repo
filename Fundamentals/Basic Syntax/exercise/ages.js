function age(input) {
    if (input >= 0 && input < 3) {
        console.log('baby')
    } else if (input > 2 && input < 14) {
        console.log('child')
    } else if (input > 13 && input < 20) {
        console.log('teenager')
    } else if (input > 19 && input < 66) {
        console.log('adult')
    } else if (input >= 66) {
        console.log('elder')
    } else { console.log('out of bounds') }
} 
age(20)