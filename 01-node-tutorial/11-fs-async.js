/* 
The previous command runs in the background and loads the result once it has finished processing. Thus, these functions are called non-blocking functions. They take a callback function as the last parameter. Asynchronous functions are generally preferred over synchronous functions as they do not block the execution of the program whereas synchronous functions block the execution of the program until it has finished processing.

Heavy operations which consume time for processing such as querying huge data from a database should be done asynchronously as other operations can still be executed and thus, reducing the time of execution of the program.

Synchronous functions are called blocking functions
Asynchronous functions are called non-blocking functions.
*/

const { readFile, writeFile } = require('fs')

console.log('start')
readFile('D:/TheOdinProject/Nodejs/node-express-course/01-node-tutorial/content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  const first = result
  readFile('D:/TheOdinProject/Nodejs/node-express-course/01-node-tutorial/content/seocnd.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      'D:/TheOdinProject/Nodejs/node-express-course/01-node-tutorial/content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')

/*

                            Callback

A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();
*/