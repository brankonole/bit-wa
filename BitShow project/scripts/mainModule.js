import * as dmHelpers from './dataModule.js';
import * as uimHelpers from './UIModule.js';

const url = 'http://api.tvmaze.com/shows';

function addSearchHandler() {
    $('.js-search-input').on('keyup', function (event) {
        fetch(url)
            .then(function (response) {
                let myJSON = response.json();
                return myJSON;
            })
            .then(function(myJSON){
                uimHelpers.showSearchList(myJSON);
            })
        // const request = $.ajax({
        //     url: url,
        //     method: "GET"
        // });

        // request.done(function (response) {
        //     uimHelpers.showSearchList(response);
        // })

        // request.fail(function (jqXHR, textStatus) {
        //     alert("Request failed: " + textStatus);
        // });
    });

    $(document).on('click', '.js-search-list-item', function() {
        const id = $(this).data('id');
        localStorage.setItem('id', id);
    })
}

function initShowList() {
    const tvShow = dmHelpers.createTVShow();

    addSearchHandler();
    uimHelpers.addShowListHandler();

    tvShow.fetchShows((response) => {
        tvShow.populateShows(response);
        uimHelpers.displayShows(tvShow.shows);
    }, (error) => {
        alert("Request failed: " + error);
    });
}

function initShowDetails() {
    const idShow = localStorage.getItem('id');

    addSearchHandler();

    dmHelpers.fetchShowData(idShow, (r) => {
        const show = dmHelpers.createShow(r.name, r.image.original, r.id, r.summary);

        show.fetchAndPopulateAdditionalData(() => {
            uimHelpers.displayShow(show);
        });            
    }, (error) => {
        alert("Request failed: " + error);
    })
}

initShowList();
initShowDetails();