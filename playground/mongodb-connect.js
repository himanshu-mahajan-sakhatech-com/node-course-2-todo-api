const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if (err) {
    return console.log("Unable to connect to MongoDB Server");
  }
  console.log("Connected to MongoDB Server");

  var db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: "Some thign to do",
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log("Unable to insert to to :", err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  db.collection('User').insertOne({
    name: "Himanshu",
    age: 24
  }, (err, result) => {
    if (err) {
      return console.log("Unable to insert yo User", err);
    }

    console.log("Data inserted", JSON.stringify(result.ops, undefined, 2));
  });

  client.close();
});
