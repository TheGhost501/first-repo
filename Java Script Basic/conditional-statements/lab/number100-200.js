function between100and200 ([arg1]) {
    let num = parseInt(arg1);
    if (num <100) console.log('Less than 100');
    else if (num<=200) console.log('Between 100 and 200');
    else console.log('Greater than 200');

}
between100and200(['99'])
between100and200(['120'])
between100and200(['210'])
between100and200(['100'])
between100and200(['200'])
between100and200(['134,44'])