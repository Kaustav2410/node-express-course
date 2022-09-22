const http = require('http');
const {readFileSync} = require('fs');

const homePage = readFileSync('D:/TheOdinProject/Nodejs/node-express-course/02-express-tutorial/navbar-app/index.html','utf-8');
const homeStyle = readFileSync('D:/TheOdinProject/Nodejs/node-express-course/02-express-tutorial/navbar-app/styles.css','utf-8');
const homeJs = readFileSync('D:/TheOdinProject/Nodejs/node-express-course/02-express-tutorial/navbar-app/browser-app.js','utf-8');
const homelogo = readFileSync('D:/TheOdinProject/Nodejs/node-express-course/02-express-tutorial/navbar-app/logo.svg','utf-8');

const server = http.createServer((req,res)=>{
    const url=req.url;
    console.log(url);
    if(url==='/'){
        res.writeHead(200,{ 'content-type':'text/html'});
        res.write(homePage);
        res.end();
    }
    if(url==='/styles.css'){
        res.writeHead(200,{ 'content-type':'text/css'});
        res.write(homeStyle);
        res.end();
    }
    if(url==='/browser-app.js'){
        res.writeHead(200,{'content-type':'text/javascript'});
        res.write(homeJs);
        res.end();
    }
    if(url==='/logo.svg'){
        res.writeHead(200,{'content-type':'image/svg+xml'});
        res.write(homelogo);
        res.end();
    }
    else if(url==='/about'){
        res.write("This is the about page");
        res.end();
    }
    res.end();
})
server.listen(3000)