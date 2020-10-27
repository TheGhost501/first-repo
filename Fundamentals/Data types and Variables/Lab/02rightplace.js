function words(firstString, char, secondString) {
    let res = firstString.replace('_',char);
    let output = res === secondString ? 'Matched' : 'Not Matched';
    console.log(output);
    
}
words('Str_ng', 'I', 'Strong')
words('Str_ng', 'i', 'String')