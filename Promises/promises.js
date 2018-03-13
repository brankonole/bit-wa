const array = [];

for (let i = 0; i < 100; i++) {
    array.push(new Promise((resolve, reject) => {
       let randomNum =  Math.random()*500;

       if (randomNum < 200) {
        setTimeout(() => {
            resolve(i)
        }, randomNum);
       } else {
           setTimeout(() => {
               reject('msg')
           }, randomNum);
       }
    }));
}

// var promise = Promise.race(array);
//     promise.then((id) => {
//     console.log(id);
// })

// var promise = Promise.all(array);
//     promise.then((id) => {
//     console.log(id);
// })

array.map(promise => {
    promise.then((id) => {
        console.log(id);        
    }, (msg) => {
        console.log(msg);
    })
});