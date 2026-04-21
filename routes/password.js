const express = require('express');
const router = express.Router();

router.get('/password',(req,res)=>{
    res.render('password')
});
router.post('/password',(req,res)=>{
    console.log(req.body)
});

module.exports = router;