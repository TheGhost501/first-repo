function merge(array1, array2) {
    let string = [];
    for (let i = 0; i < array1.length; i++) {
        if (i % 2 === 0) {
            let item = Number(array1[i]) + Number(array2[i]);
            string.push(item);
        } else {
            let item = array1[i] + array2[i];
            string.push(item);
        }       
    }
    console.log(string.join(' - '));
    
}
merge(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11'] )