function allNElements(array) {
    let n = Number(array.pop());
    for (let i = 0; i < array.length; i += n) {
     console.log(array[i]);

    }
}
allNElements(['1', 
'2',
'3', 
'4', 
'5', 
'6']
)