function employees(array) {
    class Employee {
        constructor(name) {
            this.name = name;
            console.log(`Name: ${name} -- Personal Number: ${name.length}`);
            
        }
    }
    for (let i = 0; i < array.length; i++) {
        let employeeName = array[i];
        new Employee(employeeName);
        
        
    }
}
employees(['Silas Butler', 'Adnaan Buckley', 'Juan Peterson', 'Brendan Villarreal'])