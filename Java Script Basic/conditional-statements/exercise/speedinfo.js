function speedinfo(input) {
    let speed = Number(input.shift());
    if (speed <=10) {console.log('slow')}
    else if (speed <= 50) {console.log('average')}
    else if (speed <= 150) {console.log('fast')}
    else if (speed <= 1000) {console.log('ultra fast')}
    else {console.log('extremely fast')}
}
speedinfo(['4'])
speedinfo(['49.5'])
speedinfo(['126'])
speedinfo(['160'])
speedinfo(['3500'])