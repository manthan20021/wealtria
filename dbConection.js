import dotenv from "dotenv"
import mongoose from "mongoose";
dotenv.config();

//const MONGODB_URL = process.env.MONGODB_URI
const mogodb_url_local = process.env.MONGODB_URI_LOCAL



const DBConection = async() => {
if(!mogodb_url_local){
      throw new Error("Please add your Mongo URI to .env.local");
}

try {
  await mongoose.connect(mogodb_url_local)
}
catch (error) {
  console.log("DB connection error: ", error);
}
}

export default DBConection