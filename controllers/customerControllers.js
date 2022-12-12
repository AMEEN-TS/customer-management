const Customers = require("../models/customerModel");
const Address = require("../models/addressModel");
const bcrypt = require("bcrypt");
const { trusted } = require("mongoose");
const cloudinary = require("../utils/cloudinary");


module.exports.register = async (req, res) => {
    try {
        
        const result = await cloudinary.uploader.upload(req.file.path)
        console.log(result);
        const password = req.body.password;
        const saltRounds = 10;
        const salt = await bcrypt.genSalt(saltRounds);
        const hashPassword = await bcrypt.hash(password, salt);
        req.body.password = hashPassword;
        const userdata = new Customers({...req.body,image:result.url});
        await userdata.save();
        const addressdata = new Address({ ...req.body, customerId: userdata._id });
        await addressdata.save();
        res
            .status(200)
            .send({ message: "customer created successfully", success: true });
    } catch (error) {
        res.status(400).send(error)

    }
};

module.exports.getAllCustomers = async (req, res) => {
    try {
        const getAllCustomers = await Customers.find({}).populate("address");
        res.status(200).send({ message: "sucess", success: true })
    } catch (error) {
        res.status(400).send(error)
    }
};

module.exports.getCustomerById = async (req, res) => {
    try {
       const customerId = await Customers.findOne({ _id: req.params.id }).populate("address")
        res.status(200).send({ message: "sucess", success: true })
    } catch (error) {
        res.status(400).send(error)
    }
};

module.exports.deleteCustomer = async (req,res)=>{
    try{
        const deleteCustomer = await Customers.deleteOne({_id:req.params.id});
        const deleteCustomerAddress = await Address.deleteOne({customerId:req.params.id});
        res.status(200).send({message:"customer Deleted",success:true})
    }catch(error){
        res.status(400).send(error)
    }
};

module.exports.editCustomer = async(req,res)=>{
    try{
        const editCustomer = await Customers.findOneAndUpdate({_id:req.params.id},{...req.body});
        const editAddress = await Address.findOneAndUpdate({customerId:req.params.id},{...req.body});
        res.status(200).send({message:"customer edited",success:true})
    }catch(error){
        res.status(400).send(error)
    }
}


