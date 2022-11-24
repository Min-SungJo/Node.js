const express = require('express')
/**넌적스 템플릿 엔진 */
const nunjucks = require('nunjucks');
const cookieRouter = require('./routes/cookie');
const sessionRouter = require('./routes/session');
/**바디 값을 받아올 수 있는 모듈 */
const bodyParser = require('body-parser');
/**쿠키 값을 받아올 수 있는 모듈 */
const cookieParser = require('cookie-parser');
const session = require('express-session'); //npm i express-session
const fileStore = require('session-file-store')(session) //npm i session-file-store 모듈을 통해 세션을 폴더에 저장 (많아지면 db사용)

const app = express()
app.use(bodyParser.urlencoded({extented:true}))//bodyParser 를 사용할 수 있게 해주는 확장기능
app.use(cookieParser())//cookieParser 를 사용할 수 있게 해주는 확장기능
app.use(session({
    httpOnly : true, //http 요청으로 온 것만 처리
    resave : false, //세션을 언제나 저장할지 설정
    secret : 'secret key', //세션을 저장할 때 암호화하는 키
    store : new fileStore(), // 여러 사용자의 세션을 저장하기
}))//session 을 사용할 수 있게 해주는 확장기능
app.set('port', process.env.PORT||8888);
app.set('view engine', 'html') // 넌적스는 njk || html 이라고 한다
app.use('/c', cookieRouter);
app.use('/s', sessionRouter);

nunjucks.configure('views',{ // views폴더 이름
    express: app, //app 객체 연결
    watch : true, //html 파일 연결되면 템플릿 엔진을 다시 렌더링 하는 역할
});


app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트에서 서버 연결 대기중..!`)
});

