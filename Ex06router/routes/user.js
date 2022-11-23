const express = require('express')
/**라우터 */
const router = express.Router()

router.get('/hello', (req,res)=>{
    res.send('USER ROUTER!!');
});

module.exports = router;