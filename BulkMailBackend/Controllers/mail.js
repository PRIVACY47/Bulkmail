const nodemailer = require("nodemailer")

const Users = require("../Model/user")
let transporter = nodemailer.createTransport({
    service:'gmail',
    port : 465,
    secure: true,
    host:'smtp.gmail.com',
    auth: {
        user: 'muneer.shaik0016@gmail.com',
        pass: process.env.pass

    },
})

async function sendMail(to , subject , text  ) {
    let mailOption  ={
        to :  to,
        from: 'eesashaik03@gmial.com',
        subject: subject,
        text : text,
        
        
    }
    
    let response = await transporter.sendMail(mailOption )
    
    if (response.response.includes('OK')){
        return 'mail sent sucessfully'
       
    }
    else {
        return 'failed to send'
    }
    
    
}

const sendMailController = async (req,res) => {
    try {
        arr = []
        const data =req.body
        const users = await Users.find({})
        users.map((user)=>{
            arr.push(user.email)
        })
      

            const body = {
                to : arr,
                subject :data.subject,
                text :data.text
            }
            let {to , subject , text } = body
     
            let resp = await sendMail(to,subject,text)


        res.json({status: resp})
        
    }
    catch(err){
        res.status(500).json({status:'server error'})
    }
}

module.exports = sendMailController