const { mongoose } = require("mongoose");

const connectDb = async (mongoose) => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("database connected successfully")
    }
    catch {
        console.log("not connected")
    }
}

module.exports = connectDb;