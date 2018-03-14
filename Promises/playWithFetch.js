// /* var httpGet = function(url, callbackKojiOcekujeXHResponse){
//     setTimeout(() => {
//         callbackKojiOcekujeXHResponse(url.toResponse());
//     }, 10000);
// }

// var getMovieAsync = function(url, callbackKojiOcekujeMovie){
//     httpGet(url, (xhrResponse) => {
//         callbackKojiOcekujeMovie(xhrResponse.toMovie());
//     });
// }

// getMovieAsync("http://...", (movie) => {
//     console.log(movie);
// });

// const url = 'http://api.tvmaze.com/shows/13';


// const getMovieAsync = function (url, f){
//        fetch(url)
//         .then(function(response){
//             let myJSON = response.json();
//             return myJSON;
//         .then(function(myJSON){

//         } )
//         })
// } */

// //main.js

// const getMovieAsync = (name, callback) => {
//     sendRequest(name, (callback) => {
//         console.log(callback);
//     });
// }

// //data.js
// const url = 'http://api.tvmaze.com/singlesearch/shows?q=';
// const sendRequest = (name, callback) => {
//     fetch(`${url}${name}`)
//     .then((response) => {
//         return response.json();
//     })
//     .then((newResp) => {
//         return {
//             name: newResp.name,
//             imageURL : newResp.image.original
//         }
//     })
//     .then((obj) => {
//         callback(obj)
//     })
// }

// getMovieAsync('house');
// console.log("tamtamttam");


///main////


var x = function(movie) {
    console.log(movie)
};

///data///

const sendRequest = (url) => {
    return fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((newResp) => {
            var movie = {
                name: newResp.name,
                imageURL : newResp.image.original
            }
            return movie;
        }) 
    }


sendRequest("http://api.tvmaze.com/shows/4")
    .then(function(movie){
        console.log(movie);
    });