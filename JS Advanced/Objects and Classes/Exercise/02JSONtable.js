function table(array) {
    let employees = [];

    for (let line of array) {
        let employee = JSON.parse(line);
        employees.push(employee);
    }
    let output = '<table>';

    for (let employee of employees) {
        output += '\n	<tr>';
        for (let key in employee) {
            output += `\n		<td>${employee[key]}</td>`;
        }
        output +='\n	</tr>';
    }
    output += '\n</table>';
    console.log(output);
}
table(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}']
);