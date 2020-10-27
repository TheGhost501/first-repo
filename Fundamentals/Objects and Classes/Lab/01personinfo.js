function info(firstName, lastName, age) {

    let person = { firstName: firstName, lastName: lastName, age: age };
    let entries = Object.entries(person);
    for (let [name, value] of entries) {
        console.log(`${name}: ${value}`);

    }

}
info('Peter', 'Pan', '20')