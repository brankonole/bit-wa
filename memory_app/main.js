
const memory_info = require('./memory_info.js')
const num = 1024*1024*1024*0.5;
memory_info.pushFunction(f);
memory_info.pushFunction(g);

function f(m) {
    console.log(m)
}
function g(m) {
    console.log(m + "smth")
}

memory_info.start();

setTimeout(function() {
    memory_info.stop()
},10000)

// function RegisterForAlerts(a) {
//     if (num > a) {
//         console.log('Memory is to low');
//     } else {
//         console.log(a);
//     }
// }
