class Post {
    constructor(id, title, lead) {
        this.id = id;
        this.title = title;
        this.lead = lead;
    }

    fetchPosts() {
        return fetch('http://127.0.0.1:3000/')
            .then(function (response) {
                return response.json();
            })
            .then(function (res) {
                return res;
            })
    }
}

module.exports = Post;