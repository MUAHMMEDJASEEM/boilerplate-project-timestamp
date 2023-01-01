// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({ optionsSuccessStatus: 200 }));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({ greeting: 'hello API' });
});



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

app.get("/api/:time", (req, res) => {
  var date = new Date(req.params.time);
  var date2 = new Date(parseInt(req.params.time));
  console.log(date)
  if (date == "Invalid Date" && date2 == "Invalid Date") {
    res.json({ error: "Invalid Date" })
    console.log("0")
  }
  else if (date == "Invalid Date") {
    console.log("1")
    res.json({ unix: parseInt(date2.getTime()), utc: date2.toUTCString() })
  }
  else {
    console.log("2")

    res.json({ unix: parseInt(date.getTime()), utc: date.toUTCString() })
  }
})
app.get("/api", (req, res) => {
  date = new Date()
  res.json({ unix: date.getTime(), utc: date.toUTCString() })
})