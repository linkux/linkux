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

// required to receive json requests
app.use(express.json());

app.post('/update', function(request, response){
    // FUTURE:: if the id already exists, replace the value in the array.
    // NEAR FUTURE:: add password

    var data_filename = __dirname + "/../data/interesting_data.json"
    var data = fs.readFileSync(data_filename);
    var data_parsed = JSON.parse(data);

    var uploaded_data = request.body;
    current_id = data_parsed[0]["id"];
    uploaded_data["id"] = current_id + 1;
    if (!("publish_date" in uploaded_data)) {
        var date = new Date();
        uploaded_data["publish_date"] = date.toISOString().split(".")[0] + "Z";
    }
    if (!("show_date" in uploaded_data)) {
        uploaded_data["show_date"] = false;
    }

    // Appends to the beginning of the array
    data_parsed.unshift(uploaded_data);
    fs.writeFileSync(data_filename, JSON.stringify(data_parsed, null, 4));

    console.log("got json");
    response.send(uploaded_data);    // send the updated json back
});

app.listen(3001);