function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.speak = () => {
                return `${name}, age ${age} says Meow`;

            }
        }
    }
    let cats = [];
    for (let i = 0; i < array.length; i++) {
        let catData = array[i].split(' ');
        let [name, age] = [catData[0], catData[1]];
        cats.push(new Cat(name, age));

    }
    for (let cat of cats) {
        console.log((cat.speak()));
        
    }
}
cats(['Mellow 2', 'Tom 5']);