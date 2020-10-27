function indetical(arr1, arr2) {
    let sum1 = 0;
    for (i = 0; i < arr1.length; i++) {
        sum1 += Number(arr1[i]);
    }
    let equal = true;
    for (j = 0; j < arr1.length; j++) {
        if (arr1[j] !== arr2[j]) {
            console.log(`Arrays are not identical. Found difference at ${j} index`);
            equal = false; break;
        }
    }
    if (equal === true) {
        console.log(`Arrays are identical. Sum: ${sum1}`);
        
    }
}
indetical(['1','2','3','4','5'], ['1','2','4','4','5'])