const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const app = express();

const dbConnect = require("./config/dbConfig");
const customerRouter= require("./routes/customerRouter");



app.use(express.json());
app.use(cors());


app.use('/api/customer',customerRouter);


const PORT=process.env.PORT||5000;
app.listen(PORT,console.log(`server is running at ${PORT}`));