const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    console.log("first");
    const first = await readFile('D:/TheOdinProject/Nodejs/node-express-course/01-node-tutorial/content/first.txt', 'utf8')
    const second = await readFile('D:/TheOdinProject/Nodejs/node-express-course/01-node-tutorial/content/second.txt', 'utf8')
    console.log("reading done");
    await writeFile(
      'D:/TheOdinProject/Nodejs/node-express-course/01-node-tutorial/content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log("all done");
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))
