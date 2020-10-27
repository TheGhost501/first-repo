function safe(array) {
    let a = Number(array.shift());
    let b = Number(array.shift());
    let maxPass = Number(array.shift());
    let valueA = 35;
    let valueB = 64;
    let string = '';
    let passCount = 0;
    let flag = false;
    for (let i = 1; i <= a; i++) {
        if (flag == true) {
            break;
        }
        for (let j = 1; j <= b; j++) {
            if (flag == true) {
                break;
            }
            string += `${String.fromCharCode(valueA)}${String.fromCharCode(valueB)}${i}${j}${String.fromCharCode(valueB)}${String.fromCharCode(valueA)}|`
            passCount++;
            valueA++
            valueB++
            if (valueA > 55) {
                valueA = 35;
            }
            if (valueB > 96) {
                valueB = 64;
            }
            if (passCount === maxPass) {
                flag = true; break;
        }

        }
    }
    console.log(string);

}
safe([2, 3, 10])
safe([20, 50, 10])