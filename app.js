var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

app.use('/images', express.static(__dirname + '/assets'));

var routes = require('./routes/routes.js')(app);

var server = app.listen(3000, function(){
  console.log('Rodando na porta: ' + server.address().port)
})