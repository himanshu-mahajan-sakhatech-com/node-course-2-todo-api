const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if (err) {
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to MongoDB Server");

  var db = client.db('TodoApp');

  // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
  //   console.log("Todos");
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Count : ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('User').find().toArray().then((docs) => {
    console.log("Users : ");
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log("Unable to fetch the documents : ", err);
  })

});
