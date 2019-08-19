module.exports = {
  // mongoURI: `mongodb://kons:kons@ds261296.mlab.com:61296/kons`,
  // mongoURI:('mongodb://kons:kons@ds261296.mlab.com/kons?authSource=yourDB&w=1'),
    // mongoURI:(' mongodb+srv://ranssen:<ranssen>@cluster0-ubpqq.mongodb.net/test?retryWrites=true&w=majority'),
    // mongoURI:('mongodb+srv://ranssen:<ranssen>@cluster0-ubpqq.mongodb.net/test?retryWrites=true&w=majority'),
  mongoURI: "mongodb://localhost:27017/react",
  secretOrKey: 'secret'
};


// secretOrKey
// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://ranssen:<password>@cluster0-ubpqq.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
