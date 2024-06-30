const path = require('path')

console.log(path.sep)

const segments = path.join('path', 'to', 'your', 'file', 'example.txt');
console.log(segments);

const base = path.basename(segments);
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
