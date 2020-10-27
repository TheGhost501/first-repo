function login(input) {
    let username = input.shift();
    let password = '';
    let text = input.shift();

    for (let i = (username.length - 1); i >= 0; i--) {

        password += `${username[i]}`;
    }
    for (y = 1; y <= 4; y++) {
        if (text == password) {
            console.log(`User ${username} logged in.`);
            break;
        } else if (y === 4) {
            console.log(`User ${username} blocked!`); break;
        } else { console.log(`Incorrect password. Try again.`);
        text = input.shift();
    }
    }
}
login(['momo','omom'])