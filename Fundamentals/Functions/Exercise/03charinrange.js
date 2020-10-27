function charRange(charA, charB) {
    let first = charA.charCodeAt();
    let second = charB.charCodeAt();
    let start = first; 
    let end = second;
    if (second < first) {
         start = second; 
         end = first;
    }
    let string = '';
    for (let i = start + 1; i < end; i++) {
        string += `${String.fromCharCode(i)} `;
        
    }   

    console.log(string);
    
}
charRange('a', 'd')