const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if (err) {
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to MongoDB Server");

  var db = client.db('TodoApp');
  //
  // db.collection('Todos').deleteMany({text: 'Some thing to do'}).then((result) => {
  //   console.log(result);
  // });

  db.collection('Todos').deleteOne({text: 'Some thign to do'}).then((result) => {
    console.log(result);
  });

  // client.close();

});
