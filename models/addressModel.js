const mongoose = require("mongoose");
const addressScchema = new mongoose.Schema({
    customerId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"customers",
        require:true
    },
    address:{
        type:String,
        require:true,
    },
    landmark:{
        type:String,
        require:true,
    },
    city:{
        type:String,
        require:true,
    },
    state:{
        type:String,
        require:true,
    },
    country:{
        type:String,
        require:true,
    },
    zipcode:{
        type:String,
        requireL:true,
    }

},
{
    timestamps: true
});

const addressModel = mongoose.model("address",addressScchema);
module.exports = addressModel;