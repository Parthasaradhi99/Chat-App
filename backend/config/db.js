const mongoose = require("mongoose")

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`MongoDB connected to ${conn.connection.host}.cyan.underline`);
    } catch (error) {
        console.log(error.message)
        process.exit();
    }
}

module.exports = {connectDB}