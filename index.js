require("dotenv").config()
const express = require("express")
const app  = express()
const port = process.env.PORT || 5000
const cors = require("cors")
const mongoose = require("mongoose")
const connectDB = require("./database/connect")
const todoRouter = require('./router/todoroute')



app.use(express.json())
app.use(cors())
// app.use("/todo", todoRouter)
app.use(todoRouter)


connectDB(process.env.MONGO_URL)
.then(()=>{
    app.listen(port, ()=>{
        console.log(`Listening to port at ${port}...`);
    })
})



// app.use("*", (req,res)=>{
//     res.render('error')
// })