function positions(input) {
    let n = +input.shift();
    let oddmin = 1000000000.0
    let oddmax = -1000000000.0
    let evenmin = 1000000000.0
    let evenmax = -1000000000.0
    let oddSum = 0;
    let evenSum = 0;

    for (i=1; i <=n; i++) {
        let element = Number(input.shift());
        if (i % 2 === 0) {evenSum += element;
            if(element > evenmax) {evenmax = element;}
            if(element < evenmin) {evenmin = element;}}
        else {oddSum += element;
            if(element > oddmax) {oddmax = element;}
            if(element < oddmin) {oddmin = element;}}   
               
    }
    console.log('OddSum=' + oddSum.toFixed(2) +',');

    if (oddmin === 1000000000.0) {console.log('OddMin=No,')}
    else {console.log('OddMin=' + oddmin.toFixed(2) +',');}

    if (oddmax === -1000000000.0) {console.log('OddMax=No,')}
    else {console.log('OddMax=' +oddmax.toFixed(2) +',');}

    console.log('EvenSum=' + evenSum.toFixed(2) +',');

    if (evenmin === 1000000000.0) {console.log('EvenMin=No,')}
    else {console.log('EvenMin=' + evenmin.toFixed(2) +',');}

    if (evenmax === -1000000000.0) {console.log('EvenMax=No')}
    else {console.log('EvenMax=' +evenmax.toFixed(2));}

} 
positions([6,2,3,5,4,2,1])