// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process

//output will be first,third,second
//because setTimeout is an asynchronous function therefore js will first execute the synchoronous then the asynchronous
