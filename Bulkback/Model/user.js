const mongoose  = require("mongoose")

const userSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true
    },
    phone:{
        type: String,
        unique:true
    },
    name:{
        type:String
    }
})

module.exports  = mongoose.model("user" , userSchema)