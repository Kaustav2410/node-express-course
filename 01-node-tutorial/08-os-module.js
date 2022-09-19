//operating system module
const os = require('os')

// info about current user
const user = os.userInfo()
console.log(user)
//returns uid , gid , username, homedir , shell

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(), 
  release: os.release(),//Returns the operating system as a string.
  totalMem: os.totalmem(),//Returns the total amount of system memory in bytes as an integer.
  freeMem: os.freemem(),//Returns the amount of free system memory in bytes as an integer
  version: os.version(),//Returns a string identifying the kernel version.
  platform: os.platform()//Returns a string identifying the operating system platform for which the Node.js binary was compiled. The value is set at compile time. Possible values are 'aix', 'darwin', 'freebsd','linux','openbsd', 'sunos', and 'win32'.
}
console.log(currentOS)
