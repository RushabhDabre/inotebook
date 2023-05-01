
const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook" // mondocompass URI String

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log("connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;
mongoose.set('strictQuery', true);