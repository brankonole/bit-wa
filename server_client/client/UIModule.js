const wrapperDiv = $('.js-outer-div');

function displayPosts(posts = []){
    for (let i = 0; i < posts.length; i++) {
        // const singlePost = $(`<div class="js-inner-div"><h3>${posts[i].title}</h3><p>${posts[i].lead}</p></div>`);

        const singlePost = $(`<div class="container"><div class="row">
        <div class="col s12">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${posts[i].title}</span>
              <p>${posts[i].lead}</p>
            </div>
          </div>
        </div>
      </div></div>`);
        wrapperDiv.append(singlePost);
    }
}

export { displayPosts }