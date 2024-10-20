

const mongoose = require('mongoose');
const express = require(express)
const app = express()

mongoose.connect('mongodb://localhost:27017/crud')

const UserSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    quantity: Number,
    category: String
})

const UserModel = mongoose.model("user", UserSchema)

app.get("/getUsers", (req, rep) => {
    UserModel, find({}).then(function(user) {

    res.json(users)

        }).catch(function(err) {

            console.log(err)
       
    
        })     

})

app.listen(3000, () => {
    console.log("Sever is running ")
})

