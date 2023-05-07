const nodemailer = require("nodemailer")
const Users = require("../Model/user")
let transporter = nodemailer.createTransport({
    service:'gmail',
    port : 465,
    secure: true,
    host:'smtp.gmail.com',
    auth: {
        user: 'eesashaik03@gmail.com',
        pass: "iophbybwqnultzhs"

    },
})

async function sendMail(to , subject , text  ) {
        // function takes to (array of emails) and subject of the mail , text of mail , html of the mail
        // return error if there is error otherwise return email sent with success


    let mailOption  ={
        to :  to,
        from: 'eesashaik03@gmial.com',
        subject: subject,
        text : text,
        
        
    }
    
    let response = await transporter.sendMail(mailOption )
    console.log(response)
    if (response.response.includes('OK')){
        return 'success'
       
    }
    else {
        return 'failure'
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
           console.log(to)
            let resp = await sendMail(to,subject,text)


        res.json({status: resp})
        
    }
    catch(err){
        res.status(500).json({status:'server error'})
    }
}

module.exports = sendMailController