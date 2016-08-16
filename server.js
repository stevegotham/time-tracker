var express    = require('express');
var app        = express();
var logger     = require('morgan');
var fs         = require('fs');
var path       = require('path');
var bodyParser = require('body-parser');
var projects   = path.join(__dirname, 'projects.json');
var port       = 3000;

app.use(logger('dev'));
app.use(bodyParser({urlEncoded: true}));

app.get('/', (req,res) => {
  fs.readFile(projects, (err,data) => {
    if(err) console.log('Error: ', err);
    res.json(JSON.parse(data));
  });
});

app.post('/', (req,res) => {
  fs.readFile(projects, (err,data) => {
    if(err) console.log('Error: ', err);
    var list = JSON.parse(data);
    var newItem = {
      projectName : req.body.projectName,
      startTime: req.body.startTime,
      stopTime: req.body.stopTime
    };
    list.push(newItem);
    console.log('list: ', list)
    fs.writeFile(projects, JSON.stringify(list, null, 4), (err) => console.log('Houston, problem : ', err));
    res.json(list);
  })
})

app.listen(port, () => console.log('Server up and running on port ', port));
