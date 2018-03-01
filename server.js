// server.js
// where your node app starts

// init project
var express = require('express');

var bodyParser=require('body-parser');
var cors=require('cors');
var useragent=require('express-useragent');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(useragent.express());
// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
  console.log("got event");
  
  
});
/////////////////
app.get("/api/whoami", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
  console.log("got whoami event");
  var lang = request.acceptsLanguages();
  var software = request.useragent.source.split("(")[1].split(")")[0];
  //+"; "+ request.useragent.browser;
  var ip=request.ip;
  response.json({"ipaddress":ip, "language":lang[0], "software":software });
  
  
  
  
  
  
});
app.get("/dreams", function (request, response) {
  response.send(dreams);
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/dreams", function (request, response) {
  dreams.push(request.query.dream);
  response.sendStatus(200);
});

// Simple in-memory store for now
var dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
