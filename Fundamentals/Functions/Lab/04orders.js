function orders(kind, amount) {
    switch (kind) {
        case 'coffee':
            return ((amount * 1.5).toFixed(2));

        case 'water':
            return ((amount * 1).toFixed(2));

        case 'coke':
            return ((amount * 1.4).toFixed(2));

        case 'snacks':
            return ((amount * 2).toFixed(2));

    }
}
console.log(orders('water', 5));