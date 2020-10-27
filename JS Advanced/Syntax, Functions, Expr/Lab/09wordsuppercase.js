function upperWords(input) {
    let pattern = /\w+/gm;
    let validNames = [];
    let validName = null;
    while ((validName = pattern.exec(input)) !== null) {
        validNames.push(validName[0].toUpperCase());
    }
   
    console.log(validNames.join(', '));
    
   }
console.log(upperWords('Hi, how are you?'));