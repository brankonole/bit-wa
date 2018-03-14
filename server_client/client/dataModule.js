class Post {
    constructor(id, title, lead) {
        this.id = id;
        this.title = title;
        this.lead = lead;
    }
}

const fetchPosts = function fetchPosts(url) {
    return fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (res) {
            return res;
        })
}

export { Post, fetchPosts }