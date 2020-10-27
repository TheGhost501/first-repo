function fruitshop(input) {
    let fruit = input.shift();
    let day = input.shift();
    let items = Number(input.shift());
    if (day == 'Monday'|| day == 'Tuesday' || day == 'Wednesday' || day == 'Thursday' || day == 'Friday' ) {
        switch (fruit) {
            case 'banana': console.log((items * 2.5).toFixed(2)); break;
            case 'apple': console.log((items * 1.2).toFixed(2)); break;
            case 'orange': console.log((items * 0.85).toFixed(2)); break;
            case 'grapefruit': console.log((items * 1.45).toFixed(2)); break;
            case 'kiwi': console.log((items * 2.7).toFixed(2)); break;
            case 'pineapple': console.log((items * 5.5).toFixed(2)); break;
            case 'grapes': console.log((items * 3.85).toFixed(2)); break;
            default: console.log('error'); break;
        }      
    } else if (day == 'Saturday' || day == 'Sunday') {
        switch (fruit) {
            case 'banana': console.log((items * 2.7).toFixed(2)); break;
            case 'apple': console.log((items * 1.25).toFixed(2)); break;
            case 'orange': console.log((items * 0.9).toFixed(2)); break;
            case 'grapefruit': console.log((items * 1.6).toFixed(2)); break;
            case 'kiwi': console.log((items * 3).toFixed(2)); break;
            case 'pineapple': console.log((items * 5.6).toFixed(2)); break;
            case 'grapes': console.log((items * 4.2).toFixed(2)); break;
            default: console.log('error'); break;
        }  
    } else {console.log('error')}

}
fruitshop(['orange', 'Friday', '2'])