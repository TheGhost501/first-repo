function extract(path) {
    let file = path.substring(path.lastIndexOf('\\') + 1);
    let name = file.substring(0, file.lastIndexOf('.'));
    let ext = file.substring(file.lastIndexOf('.') + 1);
    let output = `File name: ${name}\nFile extension: ${ext}`;

    return output;
}
console.log(extract('C:\\Internal\\training-internal\\Template.pptx'));
console.log(extract('C:\\Projects\\Data-Structures\\LinkedList.cs'));