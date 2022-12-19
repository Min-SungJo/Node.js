// 라우터

const express = require('express');
const router = express.Router(); // 라우터 사용
const User = require('../models/user');

router.post('/insert', async (req, res, next) => {
    // body로 부터 id,pw,age 데이터 받기
    console.log(req.body)
    let { id, pw, age } = req.body;
    try {
        // 데이터 삽입할 때, 사용하는 함수
        // const user -> 삽입된 데이터 반환
        const user = await User.create({
            id: id, // col 이름: 저장되는 실제 값(변수이름)
            pw: pw,
            age: age
        });
        res.json(user); // 삽입된 데이터를 json형식으로 응답
    } catch (err) {
        next(err); // 에러처리 미들웨어
    }
});
// user 테이블에 있는 모든 값 조회(get)
router.get('/selectall', async (req, res, next) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (err) {
        next(err)
    }
});
router.get('/select/:id', async (req, res, next) => {
    try {
        const user = await User.findOne({
            attributes: ['id', 'age'],
            where: { id: req.params.id }
        });
        req.session.login = user;
        res.json(user)
    } catch (err) {
        next(err)
    }
});
// 수정 patch -> 일부분만 수정
router.patch('/update', async (req, res, next) => {
    try {
        const result = await User.update({
            //수정할 값
            pw: req.body.pw,
            age: req.body.age
        },{
            //속성들
            where: {id: req.session.login.id}
        });
        res.json(result)
    } catch (err) {
        next(err);
    }
});
//삭제
router.delete('/delete/:id', async(req,res,next)=>{
try{
    const result = await User.destroy({
        where: {id: req.params.id}
    })
    res.json(result)
}catch(err){
    next(err);
}
})
module.exports = router;