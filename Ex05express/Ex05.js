const express = require('express')
/**바디 값을 받아올 수 있는 모듈 */
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.urlencoded({extented:true}))//bodyParser 를 사용할 수 있게 해주는 확장기능

app.set('port', process.env.PORT||8888);
app.get('/get', (req, res) => {
    // get은 form을 쿼리스트링으로 보낸다 ?name=value?name2=value2
    // app.get('/get/{id}/{pw}', (req, res) => {
    //user/1 -> parameter
    //req.params.id
    //req.params.pw
    let id = req.query.id;
    let pw = req.query.pw;
    res.send(`id : ${id}, pw : ${pw}`)
})

app.post('/post',(req, res) => {
    let id = req.body.id;
    let pw = req.body.pw;
    res.send(`id : ${id}, pw : ${pw}`)
})

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트에서 서버 연결 대기중..!`)
});

