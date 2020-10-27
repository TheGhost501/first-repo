function projects(input) {
    let name  = input.shift();
    let project = Number(input.shift());
    let hours = project * 3; 
    console.log(`The architect ${name} will need ${hours} to complete ${project} project/s.`)
}
projects(['Ilian','3'])
projects(['George', '4'])
projects(['Sanya', '9'])
