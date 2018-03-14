import * as helpers from './dataModule.js';
import * as uiHelpers from './UIModule.js';
const url = 'http://127.0.0.1:3000/';

helpers.fetchPosts(url)
    .then(function(res) {
        const postsArr = [];

        for (let i = 0; i < res.length; i++) {
            let post = new helpers.Post(res[i].id, res[i].title, res[i].lead);
            postsArr.push(post);
        }

        return postsArr;
    })
    .then(function(posts){
        return posts;
    })
    .then(function(posts){
        uiHelpers.displayPosts(posts);
    });