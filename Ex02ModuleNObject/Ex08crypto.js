//암호화
//단방향(암호화), 양방향(암호화,복호화)
/**단방향
 * 보통 해시 함수
 * ex) 비밀번호
 */

const crypto = require('crypto');

//1. 단방향 암호화 : 복호화할 수 없는 암호화 방식 (해시함수)

//pbkdf2 node에서 지원하는 비밀번호 암호화 알고리즘
//salt 라고 불리는 문자열을 붙인 후 해시 알고리즘을 반복해서 적용

/**64바이트 암호 */
crypto.randomBytes(64, (err,buf)=>{
    const salt = buf.toString('base64');
    console.log('salt : ', salt);
    //비밀번호, salt문자열, 적용 반복 횟수, 출력바이트, 해시알고리즘
    crypto.pbkdf2('password123', salt, 100000, 64, 'sha512', (err,key)=>{
        console.log('password : ', key.toString('base64'));
    })//비밀번호를, 어떻게, 몇번, 몇 바이트로, 어떤 알고리즘으로
})

//2. 양방향 암호화 : 암호화된 문자열을 복호화할 수 있음, 키가 사용됨
/**암호화 알고리즘 */
const algorithm = 'aes-256-cbc';
/**암호화, 복호화 키 값 */
const key = 'abcdefghijklmnopqrstuvwxtz123456';
/**암호화 시 사용되는 초기화 벡터 */
const iv = '1234567890123456';
/**암호화 세팅 */
const cipher = crypto.createCipheriv(algorithm,key,iv);

/**암호화할 문장, 인코딩 지정, 출력 인코딩 지정(출력바이트)*/
let result = cipher.update('암호화할 문장', 'utf8', 'base64');
/**암호화된 문장 */
result += cipher.final('base64');//마지막에 출력 결과물 인코딩 넣으면 암호화 완료
console.log('암호화 : ',result)

/**복호화 세팅, 암호화와 반대 순서로 넣어준다. */
const decipher = crypto.createDecipheriv(algorithm,key,iv);
let result2 = decipher.update(result, 'base64', 'utf8');
/**복호화된 문장 */
result2 += decipher.final('utf8');//마지막에 출력 결과물 인코딩 넣으면 암호화 완료

console.log('복호화 : ',result2)