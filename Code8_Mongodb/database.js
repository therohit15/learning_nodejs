const { MongoClient } = require('mongodb');
const url = "mongodb+srv://admin:admin123@personal.mldib.mongodb.net/";
const client = new MongoClient(url);
const dbName = "helloworld";
async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection("user");
/*const data = {
    firstname:"Manoj",
    lastname:"K",
    age:20,
    city:"chennai"
  }
  const insertResult = await collection.insertMany([data]);
  console.log('Inserted documents =>', insertResult);*/
/*const deleteResult = await collection.deleteMany({ firstname: "Manoj"});
  console.log('Deleted documents =>', deleteResult);*/
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  // the following code examples can be pasted here...

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());