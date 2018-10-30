const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017", (err, client) => {
  if (err) {
    return console.log("Unable to connect to mongodb server");
  }
  console.log("Connected to MongoDB Server");

  var db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5bd7bff1c6136dd1d10e7774')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });

  // client.close();

});
