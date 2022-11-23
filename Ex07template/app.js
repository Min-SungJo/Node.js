const express = require('express')
/**넌적스 템플릿 엔진 */
const nunjucks = require('nunjucks');
const indexRouter = require('./routes');
const app = express()

app.set('port', process.env.PORT||8888);
app.set('view engine', 'html') // 넌적스는 njk || html 이라고 한다

app.use('/', indexRouter);

nunjucks.configure('views',{
    express: app, //app 객체 연결
    watch : true, //html 파일 연결되면 템플릿 엔진을 다시 렌더링 하는 역할
});


app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트에서 서버 연결 대기중..!`)
});
