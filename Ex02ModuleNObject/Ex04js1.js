const js2 = require('./Ex04js2');

console.log('js2: ', js2); // js2가 잘 내보내고 있는지 확인

module.exports = () => {
    console.log('js2', js2);
}