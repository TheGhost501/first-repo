function print(array) {
    let delimeter = array.pop();
    console.log(array.join(delimeter));
}
print(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!',
    '_']
)