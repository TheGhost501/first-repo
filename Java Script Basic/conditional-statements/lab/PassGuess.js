function password(arg1) {
    let word = arg1.shift()
    if (word === 's3cr3t!P@ssw0rd') console.log('Welcome');
    else console.log ('Wrong password!')
}
password(['sfasfa'])
password(['789'])
password(['s3cr3t!P@ssw0rd'])
