function resetPass(array) {
    let password = array.shift();
    let line = array.shift();

    while (line != 'Done') {
        let [command, firstArg, secondArg] = line.split(' ');

        switch (command) {
            case 'TakeOdd':
                let tempPassword = '';
                for (let i = 1; i < password.length; i += 2) {
                    tempPassword += password[i];

                }
                console.log(tempPassword);
                password = tempPassword;
                break;
            case 'Cut':
                let startIndex = Number(firstArg);
                let length = Number(secondArg);
                let substring = password.substring(startIndex, startIndex + length);
                password = password.replace(substring, '');
                console.log(password);

                break;
            case 'Substitute':
                let temp = password;

                while (temp.includes(firstArg)) {
                    temp = temp.replace(firstArg, secondArg);
                }
                if (password.includes(firstArg)) {
                    console.log(temp);
                } else {
                    console.log('Nothing to replace!');
                }
                password = temp;
                break;
        }
        line = array.shift();
    }

    console.log(`Your password is: ${password}`);
}
resetPass([
    'Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
    'TakeOdd',
    'Cut 15 3',
    'Substitute :: -',
    'Substitute | ^',
    'Done'
])