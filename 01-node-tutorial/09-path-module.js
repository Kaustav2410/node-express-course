//Path Module
const path = require('path')

console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
//joins all the given path segements together using the platform-specific separator as a delimiter, then normalizes the resulting path
console.log(filePath)

const base = path.basename(filePath)
//Module varies based on the operating system on which a Node.js application is running
//To achieve consistent result when working with window file paths on any operating system , use path.win32
console.log(base)
//dirname method returns the directory name of a path, similar to the Unix dirname command. Trailing directory separators are ignored. 
const directoryname = path.dirname(filePath);
console.log(directoryname);

const parsing = path.parse(filePath);
//parse() method returns an object whose properties represent significant elements of the path.
// returns dir , root , base , name , ext c
console.log(parsing);

const absolute = path.resolve(__dirname,'content', 'subfolder', 'test.txt')
console.log(absolute)
/*The given sequence of paths is processed from right to left, with each subsequent path prepended until an absolute path is constructed. For instance, given the sequence of path segments: /foo, /bar, baz, calling path.resolve('/foo', '/bar', 'baz') would return /bar/baz because 'baz' is not an absolute path but '/bar' + '/' + 'baz' is.

If, after processing all given path segments, an absolute path has not yet been generated, the current working directory is used.
*/
