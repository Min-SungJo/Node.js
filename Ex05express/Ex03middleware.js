const express = require('express')
const app = express()

app.set('port', process.env.PORT||8888);

// 코드 순서는 위에서 아래로

app.get('/',(req,res)=>{
    res.send('Hello node! - m'); //응답
    next(); // 다음 미들웨어로 넘어가도록 제어해주는 기능
})

/**미들웨어 : 요청 응답 사이에 무언가를 처리해주는 함수 */
const myLog = function(res,req){
    console.log('LOGGED')
    next();
}

app.use(myLog); // 내가 만든 미들웨어 app 붙여주기

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트에서 서버 연결 대기중..!`)
});
