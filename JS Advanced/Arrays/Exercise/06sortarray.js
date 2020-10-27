function sortArray(array) {
    let output = array.sort((a, b) => {
        let one = a.length;
        let two = b.length;

        if (one === two) {
            return a.localeCompare(b);
        } else {
            return one - two;
        }
    })

    console.log(output.join('\n'));
}
sortArray(['alpha',
    'beta',
    'gamma']
);
sortArray(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George']
);
sortArray(['test',
    'Deny',
    'omen',
    'Default']
);