const mongoose = require("mongoose")
const connectDB = async () =>{
    try {
        await mongoose.connect(process.env.MongoDB_URI);
        console.log(`Connection successfull to DB`);
    } catch (error) {
        console.error("Database Connection failed", error);
        process.exit(1);
    }
}

module.exports = connectDB;