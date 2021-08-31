function extractFile(path) {
    let tokens = path.split('\\')
    let filename = tokens.pop();

    let index = filename.lastIndexOf('.');
    let name = filename.substring(0, index);
    let ext = filename.substring(index + 1);

    console.log(`File name: ${name}`);
    console.log(`File extension: ${ext}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')