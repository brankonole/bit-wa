const loremIpsum = require('lorem-ipsum');
const Post = require('./data.js') 
// let id = parseInt(Math.random()*100);

function generateTitle() {
    return loremIpsum({
        units: 'words',
        count: 3
    })
}

function generateLead() {
    return loremIpsum({
        units: 'sentences',
        count: 2
    })
}

function generatePosts() {
    const postsArr = [];
   
    for (let i = 0; i < 10; i++) {
        let post = new Post(parseInt(Math.random()*100), generateTitle(), generateLead())

        postsArr.push(post);
    }

    return postsArr;
}

module.exports = generatePosts;
