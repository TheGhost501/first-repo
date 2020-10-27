function compare(array1, array2) {
    for (let itemOne of array1) {
        for (let itemTwo of array2) {
            if (itemOne === itemTwo) {
                console.log(itemOne);
                
            }
        }
    }
}
compare(['Hey', 'hello', 2, 4, 'Peter', 'e'], ['Petar', 10, 'hey', 4, 'hello', '2'] )