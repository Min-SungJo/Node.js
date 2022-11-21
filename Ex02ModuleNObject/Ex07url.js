const {URL} = require('url');
// url 생성자를 활용하여 url 다루기 (url다루는 방법 중 하나)

/**내가 다루는 url*/
const myURL = new URL('https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9B%94%EB%93%9C%EC%BB%B5+%EC%9D%BC%EC%A0%95');

console.log('searchParams : ',myURL.searchParams); // url의 전체 쿼리 확인
console.log('searchParams.get() : ',myURL.searchParams.get('query')); //url에서 얻어오고 싶은 특정 키의 값

//colors=red,blue,orange
//getAll() : 값이 여럿일 때, colors의 모든 값을 가져올 수 있다.

console.log('searchParams.has() : ',myURL.searchParams.has('page')); //특정 키를 가지고 있는 지 확인(true/false)

console.log('searchParams.keys() : ',myURL.searchParams.keys()); //쿼리의 모든 key 확인
console.log('searchParams.values() : ',myURL.searchParams.values()); //쿼리의 모든 value 확인

//append로 쿼리에 키,값 추가
myURL.searchParams.append('key','value1');
myURL.searchParams.append('key','value2');
console.log(myURL.searchParams.getAll('key'));

//set로 쿼리에 키,값 설정(덮어쓰기)
myURL.searchParams.set('key', 'value3');
console.log(myURL.searchParams.getAll('key'));

//delete로 쿼리의 key 지우기
myURL.searchParams.delete('key');
console.log(myURL.searchParams.getAll('key'));

//toString으로 쿼리 세분해놓는 방법
console.log('searchParams.toString() : ',myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();