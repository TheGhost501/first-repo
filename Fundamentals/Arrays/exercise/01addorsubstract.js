function addsub(array) {
    let newArray = [];
    let firstSum = 0;
    let secondSum = 0;
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        firstSum += element;
        if (element % 2 === 0) {
            element += i;
        } else {
            element -= i;
        }
        newArray.push(element);
        secondSum += element;
    }
    console.log(newArray);
    console.log(firstSum);
    console.log(secondSum);
       
}
addsub([5, 15, 23, 56, 35])