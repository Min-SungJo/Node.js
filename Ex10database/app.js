const express = require('express')
const nunjucks = require('nunjucks');
const indexRouter = require('./routes/index');
/**바디 값을 받아올 수 있는 모듈 */
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({extented:true}))//bodyParser 를 사용할 수 있게 해주는 확장기능

app.set('port', process.env.PORT||8888);
app.set('view engine', 'html');

app.use('/main',indexRouter);

nunjucks.configure('views',{
    express : app,
    watch : true,
})

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트에서 서버 연결 대기중..!`)
});
