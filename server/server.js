var express = require('express');
var bodyParser = require('body-parser');
var ObjectID = require('mongodb').ObjectID;

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (err) => {
    res.status(400).send(err);
  });
})

app.get('/todos', (req, res) => {
  Todo.find({}).then((todos) => {
    res.status(200).send({todos});
  }, (err) => {
    res.status(400).send(err);
  })
});

app.get('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send("Invalid Id");
  }

  Todo.findById (id).then((doc) => {
    if(doc)
      res.status(200).send(doc);
    else
      res.status(404).send({});
  }, (err) => {
    res.status(400).send({});
  });
});

app.delete('/todos/:id', (req, res) => {
  var id = req.params.id;

  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }

  Todo.findByIdAndRemove(id).then((deletedTodo) => {
    if(!deletedTodo){
      return res.status(404).send();
    }else{
      res.status(200).send(deletedTodo);
    }
  }, (err) => {
    res.status(400).send({});
  });
});

app.listen(3000, () => {
  console.log("Server is Up and runnig on port 3000");
});
