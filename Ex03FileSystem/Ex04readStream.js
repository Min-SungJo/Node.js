const fs = require('fs');

//buffer -> stream : buffer의 크기를 줄인 후 여러 번에 걸쳐 보내는 방식
/**버퍼 생성 및 크기 지정(기본값:64) */
const readStream = fs.createReadStream('./readme.txt',{highWaterMark : 16});
/**데이터를 담는 용도 */
const data = [];

// 파일 읽기가 시작되면 발생
readStream.on('data', (chunk)=>{ //chunk : 16mb 크기를 가진 data의 부분
    data.push(chunk); //data 배열에 chunk 데이터 넣기
    console.log('data : ', chunk);
});
//파일을 다 읽으면 발생
readStream.on('end', ()=>{
    //최종적으로 다시 하나의 문자열로 만들기
    console.log(Buffer.concat(data).toString());
});