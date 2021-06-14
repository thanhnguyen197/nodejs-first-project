const path = require('path');
const process = require('process');


console.log(path.join(__dirname, 'content', 'test'));
console.log('resolve',path.resolve(__dirname,'content.txt'));
console.log('parse', path.parse(__dirname+'/content.txt'))