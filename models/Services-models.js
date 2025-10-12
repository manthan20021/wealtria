import mongoose from "mongoose"



const ServiceSchema = new mongoose.Schema({
    ServiceTitel:{
        type:String,
        require:true,
        
    }
})