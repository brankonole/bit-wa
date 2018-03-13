const wrapperDiv = $('.js-wrapper');
const searchInput = $('.js-search-input');
const searchUl = $('#searchUl');

function displayShows(shows = []) {
    for (let i in shows) {
        const div = $(`<div data-id="${i}" class="box col-12 col-sm-6 col-md-4 col-lg-3 js-show-item"><a href="show-info.html" target="_blank"><div class="img-wrapper" style="background-image: url(${shows[i].img})"></div><p class="box-title">${shows[i].name}</p></a></div>`);
        wrapperDiv.append(div);
    }
}

function showSearchList(data) {
    let searchList;
    let searchInputVal = searchInput.val();
    let filter = searchInputVal.toUpperCase();

    searchUl.html('');

    data.forEach(function (e, i) {
        if (e.name.toUpperCase().includes(filter) && searchUl.find('li').length < 10) {
            searchList = searchUl.append($(`<li class="list-item js-search-list-item" data-id="${e.id}"><a href="show-info.html">${e.name}</a></li>`));
        }
    })

    if (searchInputVal == '') {
        searchUl.html('');
    }

    return searchList;
}

function addShowListHandler() {
    $(document).on('click', '.js-show-item', function() {
        const id = $(this).data('id');
        localStorage.setItem('id', id);
    })
}

function displayShow(show) {
    console.log(show);

    const $mainDiv = $('.js-main-wrapper');
    const numOfSeasons = show.seasons.length;

    const content = `<h1>${show.name}</h1>\
        <div class="wrapper-top row" >\
            <img src="${show.img}" alt="${show.name}" class="main-img col-12 col-sm-8 col-lg-6 offset-sm-2 offset-lg-0">\
                <div class="aside col-12 col-lg-6">\
                    <div class="row">\
                        <div class="seasons  col-12 col-sm-6 col-lg-12">\
                            <h4 class="title">Seasons(${numOfSeasons})</h4>\
                            <ul class="js-season-list"></ul>\
                        </div>\
                        <div class="cast  col-12 col-sm-6 col-lg-12">\
                            <h4 class="title">Cast</h4>\
                            <ul class="js-cast-list"></ul>\
                        </div>\
                    </div>\
                </div>\
            </div>\
            <div class="wrapper-bottom">\
                <h4>Show Details</h4>\
                ${show.details}
            </div>\
            </div >\
        <div class="box-wrapper">\
            <div class="box-top"></div>\
            <div class="box-bottom"></div>\
        </div></div>`;

    let casts = '';

    show.cast.forEach(function (e) {
        casts += `<li><a target="_blank" href="${e.url}">${e.fullName}</a></li>`;
    });

    let seasons = '';

    show.seasons.forEach(function (e) {
        seasons += `<li>${e.startDate} - ${e.endDate}</li>`;
    });

    const $content = $(content);

    $content.find('.js-cast-list').html(casts);
    $content.find('.js-season-list').html(seasons);

    $mainDiv.html($content);
}

export {
    displayShows,
    showSearchList,
    displayShow,
    addShowListHandler
}