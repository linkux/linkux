const express = require('express');
const fs = require('fs');
const app = express()
const path = require('path');

const LoggerMiddleware = (req,res,next) =>{
    // This needs to be configured by nginx: proxy_set_header X-Real-IP $remote_addr;
    const ip = req.headers['x-real-ip'];
    output_str = `${new Date()}, IP-${ip}, URL-${req.url}, METHOD-${req.method}, USER_AGENT-${req.get('User-Agent')}`;
    fs.appendFile('web_access.log', output_str + `\n`, (err) => {
        if (err) throw err;
        console.log(output_str)
    });
    next();
}

// application level middleware
app.use(LoggerMiddleware);

app.use(express.static(__dirname + "/../templates"));
app.use(express.static(__dirname + "/../static"));
app.use(express.static(__dirname + "/.."));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/../templates/index.html'));
});
/*app.get("/books.api", (req,res) => {1
    res.sendFile(path.join(__dirname + '/../templates/test.json'));
});*/

app.listen(3001);