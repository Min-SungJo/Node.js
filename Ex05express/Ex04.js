const express = require('express')
const app = express()

app.set('port', process.env.PORT||8888);

//static : 정적파일 경로 지정 (미들웨어)
app.use(express.static(__dirname+'/public'));

app.get('/', (req, res) => {
    // Ex04.html 클라이언트로 바로 응답을 하는 것이 아닌
    // static 미들웨어르 거친 후 클라이언트에 도착
    // html 내에 폴더 경로 지정하지 않아도 자동으로 서버에서 static
    // 폴더(public)에 해당 파일을 찾은 후 띄움
    // html 코드, 경로 브라우저에서 확인할 수 있기 때문에 보안에 유리
    // 경로가 드러나지 않는 방법이기 때문
  res.sendFile(__dirname+'/Ex04.html');
})

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('port')}번 포트에서 서버 연결 대기중..!`)
});
