function reception(array) {
    let helper1 = Number(array[0]);
    let helper2 = Number(array[1]);
    let helper3 = Number(array[2]);
    let clients = Number(array[3]);
    let totalHours = 0;
    let perHr = helper1 + helper2 + helper3;

    while (clients > 0) {
        totalHours++;
        if (totalHours % 4 == 0 && totalHours != 0) {

        } else {
            clients -= perHr;

        }
    }
    console.log((`Time needed: ${totalHours}h.`));
    8

}
reception(['1', '2', '3', '45']);
reception(['3', '2', '5', '40']);
reception(['5','6','4','20']);