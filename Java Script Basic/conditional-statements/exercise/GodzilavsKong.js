function movie (input) {
    let budget = Number(input.shift());
    let extras = Number(input.shift());
    let clothes = Number(input.shift());
    let discount = 0.0;
    let sumclothes = extras * clothes;
    if (extras > 150) {discount = sumclothes / 10;}
    console.log(discount)
    let finalclothes = sumclothes - discount;
    let decor = budget  / 10;
    let expenses = decor + finalclothes;
    let remain = Math.abs(budget - expenses); 
    if (budget>=expenses) {console.log('Action!');
    console.log (`Wingard starts filming with ${remain.toFixed(2)} leva left.`);}
    else {console.log('Not enough money !');
    console.log (`Wingard needs ${remain.toFixed(2)} leva more.`);}

}
movie([20000,120,55.5])
movie([15437.62,186,57.99])
movie([9587.88,222,55.68])