const express = require('express')
const router = express.Router();

// 특정 경로로 요청을 했을 때
// index.html 응답 + 특정데이터 보내서 html에서 출력
router.get('/loginForm', (req, res) => {
    // render 호출 시
    // 보내는 값 {} : 넌적스가 처리
    // index : index.html 을 렌더링하여 보내겠다
    res.render('loginform');
})
router.post('/result', (req, res) => {
    let id = req.body.id;
    let pw = req.body.pw;
    id=='smhrd'&&pw=='12345'
    ?res.render('loginSuccess',{id:id})
    :res.render('loginFail');
})


module.exports = router;