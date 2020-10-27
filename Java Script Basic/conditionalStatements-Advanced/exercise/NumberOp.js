function numOps(input) {
    let N1 = +input.shift();
    let N2 = +input.shift();
    let operator = input.shift();
    let result = 0.0;
    let type;
   switch (operator){
         case '+': result = N1 + N2;break;
         case '-': result = N1 - N2;break;
         case '*': result = N1 * N2;break;
         case '/': result = N1 / N2;break;
         case '%': result = N1 % N2;break;}
    if(result % 2 == 0) {type = 'even'}
    else {type = 'odd'}
    if ((operator == '+' || operator == '-' || operator == '*') && N2 !== 0){
    console.log(`${N1} ${operator} ${N2} = ${result} - ${type}`);}
    else if (operator == '/' && N2 !== 0)
    {console.log(`${N1} ${operator} ${N2} = ${result.toFixed(2)}`);}
    else if (operator == '%' && N2 !== 0)
    {console.log(`${N1} ${operator} ${N2} = ${result}`)}
    else {console.log(`Cannot divide ${N1} by zero`)}

}
numOps([10,12,'+'])