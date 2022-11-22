const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
    // Ex03.html파일 응답
    // 오류처리(200,500)
    try{
        /**Ex03.html정보가 담긴 변수 */
        const f = await fs.readFile('./Ex03.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        res.end(f);
    }catch(err){
        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'})
        res.end(err.message);
    }
    
});
server.listen(8888);
server.on('listening',()=>{
    console.log('8888번 포트에서 서버 연결 대기중')
})


