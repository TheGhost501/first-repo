function substring(keyword, string) {
    let key = keyword.toLowerCase();
    let text = string.toLowerCase().split(' ');
    if(text.includes(key)) {
        return keyword;
    } else {
        return `${keyword} not found!`;
    }
}
console.log(substring('54g45Ve£',
    'JavaScript is the best programming 54g45ve£'
));
