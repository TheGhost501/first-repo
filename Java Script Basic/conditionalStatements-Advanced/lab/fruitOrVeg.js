function itemtype(input) {
    let item = input.shift();
    switch (item) {
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes' : console.log('fruit'); break;
        case 'tomato':
        case 'pepper':
        case 'cucumber':
        case 'carrot' :console.log('vegetable'); break;
        default: console.log('unknown')
    }

}
itemtype(['banana'])
itemtype(['banasadna'])