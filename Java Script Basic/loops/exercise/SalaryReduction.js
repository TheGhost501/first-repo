function salaryfine(input){
    let tabs = +input.shift();
    let salary = +input.shift();
    for (i = 0; i <tabs; i++)
    {let page = input.shift();
     if (page === 'Facebook')
    {salary -= 150;}
    else if (page === 'Instagram')
    {salary -= 100;}
    else if (page === 'Reddit')
    {salary-= 50;}
    else {salary-=0;}}
    if (salary <= 0)
    {console.log('You have lost your salary.')}
    else {console.log(salary)}
}