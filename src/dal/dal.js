const { MongoClient, ObjectId } = require('mongodb');
const config = require('config');
const dbName = config.get('dbConfig.dbName');

// Connection URL


// Database Name

async function connecttodb() {
    let url;
    if (config.has('dbConfig.password')) {
        url = `${config.get('dbConfig.prefix')}://${config.get('dbConfig.userName')}:${config.get('dbConfig.password')}${config.get('dbConfig.hostUrl')}`;
        console.log(url);
    }else {
        url = `mongodb://${config.get("dbConfig.hostUrl")}`;
    }
    const client = new MongoClient(url);
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    return client;

}

async function insertCustomerData(customerData) {
    let client = await connecttodb();
    const db = client.db(dbName);
    const collection = db.collection('CustomerExample');
    const insertResult = await collection.insertOne(customerData);
    console.log('Inserted documents =>', insertResult);
}

async function getCustomerData(id) {
    let client = await connecttodb();
    const db = client.db(dbName);
    const collection = db.collection('CustomerExample');
    let customerData;
    if (id) {
        customerData = await collection.find({ _id: ObjectId(id) }).toArray();
    }
    else {
        customerData = await collection.find({}).toArray();
    }
    return customerData;
}

async function deleteCustomerById(id) {
    let client = await connecttodb();
    const db = client.db(dbName);
    const collection = db.collection('CustomerExample');
    let deletedData = await collection.deleteMany({ _id: ObjectId(id) });
    return deletedData;
}

module.exports = {
    insertCustomerData,
    getCustomerData,
    deleteCustomerById
}