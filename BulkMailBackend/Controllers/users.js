const Users = require('../Model/user')

const getUsers = async (req,res)=>{
    try {
        let users = await Users.find({}).select('email')
        console.log(users)
        res.json({users:users})
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
}

const postUsers = async (req,res) =>{
    try {
        

        const excelData = req.body
        req.body.map(async(user)=>{
            const {name,email,phone} = user
            await Users.create({name:name,email:email,phone:phone})
            
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({message:"Internal server error"})
        
    }
}

module.exports = {getUsers,postUsers}