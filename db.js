import mongoose from'mongoose';

const connection = async() => {
    try {
       await mongoose.connect("mongodb+srv://Aniket524:pass123@cluster0.iztsmlu.mongodb.net/user",{useNewUrlParser:true})
       console.log("database connected successfully");
    } catch (error) {
        console.error("error whle coonecting with the database",error);
    }
}

export default connection;