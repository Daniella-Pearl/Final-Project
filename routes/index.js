const express = require('express');
const router = express.Router();

// Get landing page(index page)
router.get('/',(req,res)=>{
    res.render('index')
});

// Essential last line
module.exports = router;