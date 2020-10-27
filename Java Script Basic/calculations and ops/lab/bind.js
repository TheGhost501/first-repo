function personalInfo(arguments) {
    let firstName = arguments.shift();
    let lastName = arguments.shift();
    let  age = Number(arguments.shift());
    let town = arguments.shift(); 
    console.log(`You are ${firstName} ${lastName}, a
     ${age}-years old person from ${town}.`);

}
personalInfo(['Ilian', 'Ivanov', '24', 'Sofia'])