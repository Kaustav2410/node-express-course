const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
  writeFileSync('D:/TheOdinProject/Nodejs/node-express-course/01-node-tutorial/content/big.txt', `hello world ${i}\n`, { flag: 'a' })
}
