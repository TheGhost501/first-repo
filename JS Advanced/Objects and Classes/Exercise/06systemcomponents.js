function system(array) {
    let register = {};
    for (let line of array) {
        let [systemName, componentName, subcomponentName] = line.split(' | ');
        if (!register.hasOwnProperty(systemName)) {
            register[systemName] = {};
        }
        if (!register[systemName].hasOwnProperty(componentName)) {
            register[systemName][componentName] = [];
        }
        register[systemName][componentName].push(subcomponentName);
    }
    let sortedKeys = Object.keys(register).sort((a, b) => {
        let aLength = Object.keys(register[a]).length;
        let bLenght = Object.keys(register[b]).length;
        let execute;
        if (aLength === bLenght) {
            execute = a.localeCompare(b);
        } else {
            execute = bLenght - aLength;
        }
        return execute;
    });
    let output = '';
    for (let system of sortedKeys) {
        if (output === '') {
            output += `${system}`;
        } else {
            output += `\n${system}`;
        }
        let sortedSubKeys = Object.keys(register[system]).sort((a, b) =>
            Object.keys(register[system][b]).length - Object.keys(register[system][a]).length);
        for (let component of sortedSubKeys) {
            output += `\n|||${component}`;
            for (let subComponent of register[system][component]) {
                output += `\n||||||${subComponent}`;
            }
        }
    }

    return output;

}