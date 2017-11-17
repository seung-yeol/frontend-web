// fs 모듈 사용
// node fs.js
var fs = require('fs');

//writeFile 비동기방법
fs.writeFile('message.txt', 'Hello Node', function (err) {
  if (err) throw err;
  console.log('It\'s saved!');
});

//writeFile 동기방법
fs.writeFileSync('message.txt', 'Hello Node');
console.log('It\'s saved!');
