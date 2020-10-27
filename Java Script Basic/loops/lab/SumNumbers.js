function sum(input){
    let end = +input.shift();
    total = 0.0;
    for (let i = 0;  i < end; i++) {
        let number = +input.shift();
        total += number;
        
    }console.log(total)
}
sum(['2','3','4'])