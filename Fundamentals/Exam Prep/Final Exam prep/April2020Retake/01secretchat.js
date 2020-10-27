function chat(input) {
    let codedText = input.shift();
    for (let line of input) {
        if (line === 'Reveal') {
            break;
        } else {
            let lineArray = line.split(':|:');
            let command = lineArray[0];
            switch (command) {
                case 'InsertSpace':
                    let index = Number(lineArray[1])
                    codedText = codedText.substring(0, index) + ' ' + codedText.substring(index);
                    console.log(codedText);
                    break;

                case 'Reverse':
                    let target = lineArray[1];
                    if (codedText.includes(target)) {
                        codedText = codedText.replace(target, '');
                        target = target.split('').reverse().join('');
                        codedText += target;
                        console.log(codedText);
                    } else {
                        console.log('error');
                    }

                    break;
                case 'ChangeAll':
                    let old = lineArray[1];
                    let newWord = lineArray[2];
                    while (codedText.includes(old)) {
                        codedText = codedText.replace(old, newWord);
                    }
                    console.log(codedText);
                    break;
            }
        }
    }
    console.log(`You have a new text message: ${codedText}`);
}
chat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ])