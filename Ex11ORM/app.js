const { request } = require('express');
const express = require('express');
const indexRouter = require('./routes'); // index Router
const { sequelize } = require('./models/index'); // index는 생략 가능(./models)
const bodyParser = require('body-parser');
const session = require('express-session');
const fileStore = require('session-file-store')(session);

const app = express();

app.set('port', process.env.PORT || 8888);

app.use(bodyParser.urlencoded({ extended: false })); // 보통 form 데이터 받아올 때
app.use(bodyParser.json()); // json 데이터 파싱하겠다
app.use(session({
    secret: 'secret key', // 암호화 시, 쓰이는 키
    store: new fileStore() // 저장해주는 공간
}));
app.use('/', indexRouter);

//force : 서버 실행할 때마다 테이블을 재생성할 것인지 아닌지
sequelize.sync({ force: false })
    .then(() => {
        console.log('CONN_COMPLETE')
    })
    .catch((err) => {
        console.error(err);
    });

app.listen(app.get('port'), () => {
    console.log(`${app.get('port')}번 포트에서 서버 연결 대기중..!`)
});