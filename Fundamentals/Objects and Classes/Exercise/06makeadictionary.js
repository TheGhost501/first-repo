function dictionary(items) {
    let wordsArray = {};
    for (let i = 0; i < items.length; i++) {
        let word = JSON.parse(items[i]);
        let term = Object.keys(word)[0];
        let definition = Object.values(word)[0];
        let alreadyIn = false;
        for (let entry in wordsArray) {
            if (entry.term === term) {
                entry.definition = definition;
                alreadyIn = true;
            }
        }
        if (!alreadyIn) {
            let entry = { term: term, definition: definition };
            wordsArray.push(entry);
        }


    }
    wordsArray.sort((a, b) => {
        return a.term.localeCompare(b.term);
    })
    
   let output = [];
   for (let word in wordsArray) {
       output.push(`Term: ${word.term} => Definition: ${word.definition}`);
   };


   return output.join('\n');



}
console.log(dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
));
