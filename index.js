const express = require("express")
const dotenv = require('dotenv');

const app = express()
dotenv.config();


app.get("/",(req,res)=>{
    res.send("ping server successfully running...")
    res.end()
})

app.listen(process.env.PORT, ()=>{console.log(`Server is running on http://127.0.0.1:${process.env.PORT}`);})