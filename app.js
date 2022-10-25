const express = require("express");
const app = express()
const mongoose = require("mongoose");
const {MONGOURI} =require("./valuekeys.js")
const PORT = 5000


mongoose.connect(MONGOURI);

mongoose.connection.on('connected',()=>{
    console.log("We are connected to the server i.e. MONGO DB");
})

mongoose.connection.on('error',()=>{
    console.log("We are not connected to the server i.e. MONGO DB");
})

require("./models/user")
require("./models/post")
app.use(express.json())
app.use(require('./routes/authen'))
app.use(require('./routes/post'))
app.use(require('./routes/user'))


app.listen(PORT,()=>{
    console.log("Server is running at", PORT)
})