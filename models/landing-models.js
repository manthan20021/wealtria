import mongoose from "mongoose"

const landigPageUpdateSchema = new mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    subtext:{
        type:String,
        require:true
    },
    avtar:{
        type:String,
    }
});

export default mongoose.models.landing || mongoose.model("landing", landigPageUpdateSchema)