// GLOBALS  - NO WINDOW !!!!

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

const Personal_Details = require("./second.js");
//import contents of second.js file in intervals.js file 
// console.log(Personal_Details);
//Printing the contents of the second file
console.log(Personal_Details);

//It will call the function after a specific time
//setInterval(function_name , time (in millisecond)); 
setInterval(()=>{
    //Or we can write the function inside the setInterval function 
    console.log('Hello World');
},1000);
