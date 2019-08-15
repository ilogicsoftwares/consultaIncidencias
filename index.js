const express = require('express')
const app = express();
const MongoClient = require('mongodb').MongoClient;

const assert = require('assert');
 
// Connection URL
const url = 'mongodb+srv://usrmongotdapp:Mongo2018@personalizacionprd01-7arob.mongodb.net/?authSource=admin&ssl=true';
 
// Database Name
const dbName = 'BelcorpSalvador';
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/productos', function (req, res) {
    res.send({CUV:34456,DESCRIPCION:"LABIAL ESIKA CONTIGO"})
  })
 
app.listen(3000,function(){
console.log("Server corriendo en el puerto 3000");
})

MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to Mongo");
   
    const db = client.db(dbName);
   
    client.close();
  });