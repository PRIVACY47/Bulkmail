const router = require('express').Router()

const sendMailController = require('../Controllers/mail')
const {getUsers,postUsers} = require('../Controllers/users')

router.get('/', (req, res) => {
    res.send('Hello World!')
  })

router.get("/mail",getUsers)
router.post("/mail",postUsers)

router.post("/sendmail",sendMailController)

module.exports = router