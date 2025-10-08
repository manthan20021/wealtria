import mongoose from "mongoose"

const landigPageUpdateSchema = new mongoose.Schema({

    title:{
        type:String,
        requir:true
    },
    subtext:{
        type:String,
        requir:true
    },
    avtar:{
        type:String,
    }
});

export default mongoose.models.landing || mongoose.model("landing", landigPageUpdateSchema)