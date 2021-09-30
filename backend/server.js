var express = require('express');
let fs = require('fs');

var app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.bodyParser());

var transacoes = require('./lancamento-conta-legado.json');

app.listen(process.env.PORT || 3412);

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/transacoes', function(req, res) {

  fs.readFile('lancamento-conta-legado.json', 'utf-8', function (err, data) {
    if(err) throw err;

    var temp = JSON.parse(data);
    console.log('loaded ' + typeof temp);
    res.json(temp.items);

  });

});

app.post('/transacoesUp', function(req, res) {
  
  var jsonComplete = transacoes;

  jsonComplete.items = (req.body);

  fs.writeFile('lancamento-conta-legado.json', JSON.stringify(jsonComplete), function (err){
    if (err) throw err;
    console.log('updated')
  })

  res.json(true);
});

app.get('/transacoes/:id', function (req, res) { 
  res.json(transacoes.items[req.params.id]);
}); 

app.post('/transacoes', function(req, res) {
  
  var jsonComplete = transacoes;

  jsonComplete.items.push(req.body);

  fs.writeFile('lancamento-conta-legado.json', JSON.stringify(jsonComplete), function (err){
    if (err) throw err;
    console.log('updated insert')
  })

  res.json(true);
});

app.delete('/transacoesDelete', function(req, res) {
  
  var jsonComplete = transacoes;

  jsonComplete.items = (req.body);

  fs.writeFile('lancamento-conta-legado.json', JSON.stringify(jsonComplete), function (err){
    if (err) throw err;
    console.log('updated')
  })

  res.json(true);
});