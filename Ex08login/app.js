const express = require('express')
/**넌적스 템플릿 엔진 */
const nunjucks = require('nunjucks');
const indexRouter = require('./routes/index');
/**바디 값을 받아올 수 있는 모듈 */
const bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.urlencoded({extented:true}))//bodyParser 를 사용할 수 있게 해주는 확장기능

app.set('port', process.env.PORT||8888);
app.set('view engine', 'html') // 넌적스는 njk || html 이라고 한다

app.use('/user', indexRouter);

nunjucks.configure('views',{ // views폴더 이름
    express: app, //app 객체 연결
    watch : true, //html 파일 연결되면 템플릿 엔진을 다시 렌더링 하는 역할
});


app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트에서 서버 연결 대기중..!`)
});

