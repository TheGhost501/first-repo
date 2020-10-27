function sortKs(arr) {
    let key = arr.shift();

    console.log(arr.slice(0, key).join(' '));
    console.log(arr.slice(arr.length - key, arr.length).join(' '));

}
sortKs([2, 7, 8, 9])