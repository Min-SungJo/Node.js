/** 특정 레이블에 해당하는 time~timeEnd사이의 시간측정- 로직에 얼마나 시간이 소요되었나?*/
console.time('전체 시간');
console.log('일반 로그');
console.error('에러 메시지');
console.table([{name:'예진',age:25},{name:'자연',age:20}]);

const obj = {
    outside : {
        inside : {
            key: 'value',
        }
    }
}

//출력 깊이는 dir로 조절
console.dir(obj,{colors : false, depth : 2}); // depth 기본값 2
console.dir(obj,{colors : true, depth : 1});

console.timeEnd('전체 시간');