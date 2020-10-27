function extract(array) {
    let biggest = array[0];
    console.log(biggest);
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        if (current >= biggest) {
            biggest = current;
            console.log(biggest);
        }

    }
}
extract([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24]
);
extract([1,
    2,
    3,
    4]
);
extract([20,
    3,
    2,
    15,
    6,
    1]
);