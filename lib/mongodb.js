import { MongoClient } from 'mongodb';

const uri = "mongodb+srv://admin:SyMqttJ3sN8A35hj@cluster0.tabebj2.mongodb.net/Kolkata-Storyteller?retryWrites=true&w=majority&appName=Cluster0";
let client;
let clientPromise;

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
