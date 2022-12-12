const express = require("express");
const storage = require ("../utils/multer");
const {register,getCustomerById,getAllCustomers,deleteCustomer,editCustomer}= require("../controllers/customerControllers");


const router = express.Router();


router.post('/register',storage.single('image'),register);
router.get("/get-all-customers",getAllCustomers)
router.get('/get-customer-info-by-id/:id',getCustomerById);
router.get('/delete-customer/:id',deleteCustomer);
router.post('/edit-customer/:id',editCustomer);

module.exports= router;