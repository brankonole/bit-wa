const main = require('./main.js');
const os = require('os');
// const f = (message) => {
//     console.log(message);
// }
let callbackArray = [];
let id;

function start() {
  id = setInterval(function () {
        const a = os.freemem() / 1024 / 1024;
        if (a < 1700) {
            callbackArray.forEach((callback) => {
                callback("memorija je low");
            })
        }
    }, 1000)
}

const pushFunction = function (callback) {
    callbackArray.push(callback);
}

const stop = () => {
    clearInterval(id)
}

module.exports.pushFunction = pushFunction;
module.exports.start = start;
module.exports.stop = stop;