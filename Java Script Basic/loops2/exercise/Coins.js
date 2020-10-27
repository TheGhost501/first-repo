function coins(input) {
    let money = +input.shift();
    let change = Math.floor(money * 100);
    let count = 0;
    while (change > 0) {
        if (change - 200 >= 0) {
            count++;
            change -= 200;
        }else if (change - 100 >= 0) {
            count++;
            change -= 100;
        }else if (change - 50 >= 0) {
            count++;
            change -= 50;
        }else if (change - 20 >= 0) {
            count++;
            change -= 20;
        }  else if (change - 10 >= 0) {
            count++;
            change -= 10;
        } else if (change - 5 >= 0) {
            count++;
            change -= 5;
        } else if (change - 2 >= 0) {
            count++;
            change -= 2;
        }  else if (change - 1 >= 0) {
            count++;
            change -= 1;
        }
    } console.log(count)

}
coins([1.20])