function password(input) {
    let username = input.shift();
    let password = input.shift();
    let text = input.shift();
    while (text !== password)
    {text = input.shift();}

    console.log(`Welcome ${username}!`)
}