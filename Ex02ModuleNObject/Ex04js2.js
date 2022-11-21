const js1 = require('./Ex04js1');

console.log('js1: ', js1); // js1가 잘 내보내고 있는지 확인

module.exports = () => {
    console.log('js1', js1);
}