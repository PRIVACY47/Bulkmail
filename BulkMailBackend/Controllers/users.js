const Users = require('../Model/user')

const getUsers = async (req,res)=>{
    try {
        let users = await Users.find({}).select('email')
        res.json({users:users})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

const postUsers = async (req,res) =>{
    try {
        
        var errors = []

        const excelData = req.body
       
            req.body.map(async(user)=>{
                const {name,email,phone} = user
                try {
                    await Users.create({name:name,email:email,phone:phone})
                } catch (error) {
                    errors.push(user.email)
                   
                }               
            })
        
       
        res.status(200).json({message:"uploaded sucessfully", existedUsers:errors})

    } catch (error) {
       
        res.status(500).json({message:"Internal server error"})
        
    }
}

module.exports = {getUsers,postUsers}