var MongoClient=require('mongodb').MongoClient;

exports.createConnection=function(){
  MongoClient.connect("mongodb://sbakash:sbakash@ds047325.mlab.com:47325/projector13").then(function(client){
    console.log("Connected to mongodb");
    exports.database=client.db("projector13");
    //console.log(database);
  });

}
