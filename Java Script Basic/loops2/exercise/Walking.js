function walking(input) {
    let steps = input.shift();
    sum = 0.0;
    while (sum < 10000) {
        if (steps == 'Going home') {
            let stepshome = +input.shift();
            sum += stepshome; break;
        } else { sum += Number(steps); }
        steps = input.shift();
    } if (sum >= 10000) {console.log('Goal reached! Good job!')}
        else {let diff = 10000 - sum;
        console.log(`${diff} more steps to reach goal.`)}
    }
walking([1000,1500,2000,6500,])
walking([1500, 3000, 250, 1548, 2000, 'Going home', 2000,])
walking([1500,300, 2500, 3000, 'Going home', 200, ])