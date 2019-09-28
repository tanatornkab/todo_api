const express = require('express')
const router = express.Router()

router.get('/todo',(res,req)=>{
    req.send('Hello Todo')
})


module.exports = router