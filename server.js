var express = require('express');
var fs = require('fs');
var app = express();
app.use(express.static(__dirname + "/../html_events/"));
var Gpio = require('onoff').Gpio, // Constructor function for Gpio objects. 
  led = new Gpio(4, 'out'),      // Export GPIO #14 as an output. 
  iv;


app.get('/start',
    function(req,res)
    {
        res.redirect('/home');
        iv =  led.writeSync(led.readSync() ^ 1); 
        console.log("Start");
    }
);
app.get('/stop',
    function(req,res)
    {
        res.redirect('/home');
iv =  led.writeSync(led.readSync() ^ 0);

        console.log("Stop");
    }
);
app.get('/home',
    function(req,res)
    {
      console.log("Home requested");
      var data = fs.readFile('index.html', function (err, html) { if (err) { throw err;}
      res.writeHeader(200, {"Content-Type": "text/html"});     
      res.write(html);
      res.end();
        });
      
    }
  );
app.listen(81,'0.0.0.0');
