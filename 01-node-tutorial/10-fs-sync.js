const fs = require('fs')
console.log('start')
const first = fs.readFileSync('D:/TheOdinProject/Nodejs/node-express-course/01-node-tutorial/content/first.txt', 'utf8')
const second = fs.readFileSync('D:/TheOdinProject/Nodejs/node-express-course/01-node-tutorial/content/second.txt', 'utf8')
//readFileSync is used to read the contents of a file

//write file sync method will accept three parameters 
// file (path)
//data (string type)
//options (specify optional parameters that will affect the output)
//encoding : specifies the encoding of the file (default value is utf8)
//mode : integer which specifies the file mode . default value is 0o666
// flag: It is a string which specifies the flag used while writing to the file. The default value is 'w'.

//writeFileSync is used to write in a file
fs.writeFileSync(
  'D:/TheOdinProject/Nodejs/node-express-course/01-node-tutorial/content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')

// //Code to create a file and then inserting text in that folder
// var readline = require("readline-sync"); 
// var fs = require("fs"); 
    
// var path = readline.question("Enter file name/path: "); 
  
// console.log("Entered path : " + path); 
  
// var data = readline.question("Enter file data: ");
  
// //synchronous functions may throw errors 
// //which can be handled using try-catch block
// try {
//   fs.writeFileSync(path, data,{flag:'a+'});   //'a+' is append mode
//   console.log("File written successfully");
// } catch(err) {
//   console.error(err);
// }
// console.log("-----------------------------------------------");
// try{
// const data = fs.readFileSync(path,{encoding: "utf8"}); 
//   console.log("File content is as follows:");
//   // Display the file data 
//   console.log(data); 
// }catch(err){
// console.log(err);
// }