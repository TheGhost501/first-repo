function pool(V, P1, P2, hours) {
    let pipeone = P1 * hours;
    let pipetwo = P2 * hours;
    let totalwater = pipeone + pipetwo;
    let procent = (totalwater / V) * 100;
    let pipe1procent = (pipeone / totalwater) * 100;
    let pipe2procent = (pipetwo / totalwater) * 100;
    let diff = (totalwater - V);
    if (V >= totalwater) {
        console.log(`The pool is ${procent.toFixed(2)}% full. Pipe 1: ${pipe1procent.toFixed(2)}%. Pipe 2: ${pipe2procent.toFixed(2)}%.`)
    } else {
        console.log(`For ${hours} hours the pool overflows with ${diff.toFixed(2)} liters.`)
    }
}
pool(1000, 100, 120, 3)
pool(100, 100, 100, 2.5)