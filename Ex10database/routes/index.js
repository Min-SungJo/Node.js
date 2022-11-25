const express = require('express')
const router = express.Router();
const db_config = require('../config/database');

let conn = db_config.init();
db_config.connect(conn);

// 회원조회
router.get('/select', (req, res) => {

    let sql = 'select * from member';
    conn.query(sql,function(err,rows,fields){
        console.log(rows);
        console.log(fields);
        if(err){
            console.error(`select 실행 실패! : ${err}`);
        }else{
            res.render('index',{list : rows});
        }
    })
})

// 회원가입
router.post('/insert', (req, res) => {
    let { id, pw, nick } = req.body;
    // let id = req.body.id
    // let pw = req.body.pw
    // let nick = req.body.nick
    let sql = 'insert into member values(?,?,?)';

    conn.query(sql, [id, pw, nick], function (err, rows, fields) { // db에서 넘어오는 값
        console.log(rows);      // 영향을 받은 row 에 대한 정보
        console.log(fields);    // row에 있는 자세한 메타데이터
        if (err) { // 실패
            console.error(`insert 실행 실패! : ${err}`);
        } else { // 성공
            res.redirect('/main/select');
        }
    });
});
//사용자가 요청하는 값이 바뀐다는 것을 알려주는 :
router.get('/select/:id',(req,res)=>{
    let id = req.params.id;
    let sql = 'select * from member where id = ?';
    conn.query(sql,[id],function(err,rows,fields){
        console.log(rows);
        console.log(fields);
        if (err){
            console.error(`select 실행 실패! : ${err}`);
        } else {
            res.json({listOne : rows});
        }
        res.send('SELECT_COMPLETE');
    })
})

// 회원삭제
router.get('/delete/:id',(req,res)=>{
    let id = req.params.id;
    let sql = 'delete from member where id = ?'
    conn.query(sql,[id],function(err,rows,fields){
        console.log(rows);
        console.log(fields);
        if (err){
            console.error(`delete 삭제 실패! : ${err}`);
        } else {
            res.redirect('/main/select');
        }
    })
})

// 회원수정
router.post('/update',(req,res)=>{
    let { id, pw, nick } = req.body;
    let sql = 'update member set pw = ?, nick = ? where id = ?'
    conn.query(sql,[pw,nick,id],function(err,rows,fields){
        console.log(rows);
        console.log(fields);
        if (err){
            console.error(`update 수정 실패! : ${err}`);
        } else {
            res.redirect('/main/select');
        }
    })
})
module.exports = router;