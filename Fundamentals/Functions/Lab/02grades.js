function grades(value) {
    if (value >= 2 && value < 3) {
        return 'Fail';
    } else if (value < 3.5) {
        return 'Poor';
    } else if (value < 4.5) {
        return 'Good';
    } else if (value < 5.5) {
        return 'Very good';
    } else {
        return 'Excellent';
    }
}