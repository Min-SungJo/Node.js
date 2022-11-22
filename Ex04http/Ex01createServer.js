/**http모듈, 웹브라우저의 요청 / 응답처리 */
const http = require('http');

http.createServer((req,res)=>{
    // 응답코드 : 200/404/500 ...
    // 응답 정보 기록
    res.writeHead(200, {'Content-Type' : 'text/html; charset=utf-8'});
    // 클라이언트로 보낼 데이터, 본문
    res.write('<h1>Hello world!ㅇ</h1>')
    res.end('<p>node.js</p>'); // 응답종료
})  //listen 메서드 사용해서 콜백함수 넣는 방식
    .listen(8888,()=>{
        //서버 연결 대기 중
        console.log('8888번 포트에서 서버연결 대기중!')
    })