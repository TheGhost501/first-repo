function day(string) {
let output;
    switch (string) {
        case 'Monday': output = '1'; break;
        case 'Tuesday': output = '2'; break;
        case 'Wednesday': output = '3'; break;
        case 'Thursday': output = '4'; break;
        case 'Friday': output = '5'; break;
        case 'Saturday': output = '6'; break;
        case 'Sunday': output = '7'; break;
        default: output = 'error'; break;
    }
    return output;
}

console.log(day('Thursday'));