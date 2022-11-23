const express = require('express')
const router = express.Router();

// 쿠키 설정
router.get('/setcookie',(req,res)=>{
    let nickName = 'pingu';
    res.cookie('nickName', nickName, {
        maxAge : 100000, //밀리초 단위 (만료시간)
    })
    res.cookie('dinner', '치킨',{
        expires : new Date(Date.now()+60*50*24*1000*2),
        httpOnly : true,
    });
    res.send('쿠키생성');
});
// 쿠키 확인
router.get('/getcookies',(req,res)=>{
    console.log(req.cookies);
    res.send(req.cookies);
});
// 쿠키 삭제
router.get('/deletecookie',(req,res)=>{
    res.clearCookie('dinner');
    res.send('쿠키삭제');
})
module.exports = router;