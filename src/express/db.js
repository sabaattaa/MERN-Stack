const mongoose = require("mongoose");
const mongouri = "mongodb+srv://sabaatta24:saba2917atta@cluster2.5ivy8ti.mongodb.net/gofood";

const connectMongo = async () => {
    try {
        await mongoose.connect(mongouri, { useNewUrlParser: true, connectTimeoutMS: 10000 });
        console.log("Database is connected");
        const dbName = mongoose.connection.db.databaseName;
        console.log("Connected to database:", dbName);

        const collections = await mongoose.connection.db.listCollections().toArray();

        const numberOfCollections = collections.length;
        console.log("Number of collections in the database:", numberOfCollections);

        // Now you can access the "food_items" collection
        const foodItemsCollection = mongoose.connection.db.collection("food_items");
        const data = await foodItemsCollection.find({}).toArray();
        console.log("Data from the 'food_items' collection:", data);

        // Close the MongoDB connection
        await mongoose.connection.close();
        console.log("Connection closed");
    } catch (e) {
        console.log("Error:", e);
    }
}

module.exports = connectMongo;
