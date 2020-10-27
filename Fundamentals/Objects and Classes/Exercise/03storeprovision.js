function store(stock, order) {
    let ordersNew = [];
    for (let i = 0; i < order.length; i += 2) {
        let onTheList = false;
        for (let k = 0; k < stock.length; k += 2) {
            if (order[i] === stock[k]) {
                stock[k + 1] = Number(order[i + 1]) + Number(stock[k + 1]);
                onTheList = true;
            }
        }
        if (!onTheList) {
            ordersNew.push(order[i], order[i + 1])
        }
    }
    for (let item of ordersNew) {
        stock.push(item);

    }
    let orderList = {};
    for (let i = 0; i < stock.length; i += 2) {
        orderList[stock[i]] = stock[i + 1];

    }
    for (let key in orderList) {
        console.log(`${key} -> ${orderList[key]}`);

    }

}
store([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])