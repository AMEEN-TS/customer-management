const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true,

    },
    firstname:{
        type:String,
        require:true,
    },
    lastname:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique: true
        
    },
    phone:{
        type:String,
        require:true,
    },
    db:{
        type:String,
        require:true,
    },
    gender:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    }

   
},
{   
    toJSON:{
        virtuals:true
    },
    toObject:{
        virtuals:true
    },
     timestamps: true
 }
);

customerSchema.virtual("address",{
    ref:"address",
    foreignField:"customerId",
    localField:"_id"
})


const customerModel = mongoose.model("customers",customerSchema);
module.exports = customerModel;