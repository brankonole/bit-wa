// var calcLog = (data, callback) => {
//     setTimeout(() => {
//         callback(data * data)
//     }, 1000);
// }

// calcLog(54, (res) => {
// console.log(res);

// });


//
var calcLog = (data, callback) => {
    setTimeout(() => {
        callback(data * data)
    }, 1000);
}

var executeLog = function (number, callback) {
    calcLog(number + 10, (res) => {
        callback(res.toString());
    });
}

executeLog(5, (res) => {
    console.log(res);

});

calcLog(54, (res) => {
    console.log(res);

});