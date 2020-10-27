function radar(array) {
    let speed = array[0];
    let area = array[1];
    let limit;
    function severity(speed, limit) {
        let over = speed - limit;
        let message;
        if (over <= 20) {
            message = 'speeding';
        } else if (over <= 40) {
            message = 'excessive speeding';
        } else {
            message = 'reckless driving';
        }

        if (message) {
            console.log(message);
        }
    }
    switch (area) {
        case 'motorway':
            limit = 130;
            break;
        case 'interstate':
            limit = 90;
            break;
        case 'city':
            limit = 50;
            break;
        case 'residential':
            limit = 20;
            break;

        default:
            break;
    }
    if (speed > limit) {
        severity(speed, limit)
    }
}
radar([71, 'city']);