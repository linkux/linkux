// run with "nodemon node-server/index.js"

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

var api_strings = ["cool", "countries", "random", "funny","israel", "interesting", "movies", "books"];
var api_endpoints = [];
for (api_string of api_strings) {
    api_endpoints.push("/" + api_string + ".api");
}

app.get(api_endpoints, (req,res) => {
    var endpoint_path = req.originalUrl;
    var endpoint_str = endpoint_path.replace("/","").replace(".api","");

    var data = fs.readFileSync(__dirname + '/../data/' + endpoint_str + '_data.json','utf8')
    var data_parsed = JSON.parse(data);

    res.send(data_parsed);
});

app.listen(3001);