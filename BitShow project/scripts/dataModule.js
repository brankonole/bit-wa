const url = 'http://api.tvmaze.com/shows';

class TVShows {
    constructor(shows = {}, limit = 50) {
        this.shows = shows;
        this.limit = limit;
    }

    fetchShows(success, error) {
        fetch(url)
            .then(function (response) {
                let myJSON = response.json();
                return myJSON;
            })
            .then(function (myJSON) {
                typeof success === 'function' ? success(myJSON) : null;
            })

        // const request = $.ajax({
        //     url: url,
        //     method: "GET"
        // });

        // request.done(function (response) {
        //     typeof success === 'function' ? success(response) : null;
        // })

        // request.fail(function (jqXHR, textStatus) {
        //     typeof error === 'function' ? error(textStatus) : null;
        // });
    }

    populateShows(data = []) {
        for (let i = 0; i < this.limit; i++) {
            let s = new Show(data[i].name, data[i].image.original, data[i].id, data[i].summary);
            this.shows[data[i].id] = s;
        }
    }
}

class Season {
    constructor(startDate, endDate) {
        this.startDate = startDate;
        this.endDate = endDate;
    }
}

class Cast {
    constructor(fullName, url) {
        this.fullName = fullName;
        this.url = url;
    }
}

class Show {
    constructor(name, img, id, details) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.details = details;
        this.cast = [];
        this.seasons = [];
    }

    fetchAndPopulateAdditionalData(callback) {
        const ajax1 = this.fetchCastData((response) => {
            this.populateCast(response);
        }, (error) => {
            alert("Request failed: " + error);
        });

        const ajax2 = this.fetchSeasonsData((response) => {
            this.populateSeasons(response);
        }, (error) => {
            alert("Request failed: " + error);
        });

        $.when(ajax1, ajax2).then(() => {
            typeof callback === 'function' ? callback() : null;
        });
    }

    fetchCastData(success, error) {
        const id = this.id;

        fetch(`${url}/${id}/cast`)
            .then(function (response) {
                let myJSON = response.json();
                return myJSON;
            })
            .then(function (myJSON) {
                typeof success === 'function' ? success(myJSON) : null;
            })

        // const request = $.ajax({
        //     url: `${url}/${id}/cast`,
        //     method: "GET"
        // });

        // request.done(function (response) {
        //     typeof success === 'function' ? success(response) : null;
        // });

        // request.fail(function (jqXHR, textStatus) {
        //     typeof error === 'function' ? error(textStatus) : null;
        // });

        // return request;
    }

    populateCast(data = []) {
        data.forEach(e => {
            const actor = new Cast(e.person.name, e.person.url);
            this.cast.push(actor);
        });
    }

    fetchSeasonsData(success, error) {
        const id = this.id;

        fetch(`${url}/${id}/seasons`)
            .then(function (response) {
                let myJSON = response.json();
                return myJSON;
            })
            .then(function (myJSON) {
                typeof success === 'function' ? success(myJSON) : null;
            })

        // const request = $.ajax({
        //     url: `${url}/${id}/seasons`,
        //     method: "GET"
        // });

        // request.done(function (response) {
        //     typeof success === 'function' ? success(response) : null;
        // });

        // request.fail(function (jqXHR, textStatus) {
        //     typeof error === 'function' ? error(textStatus) : null;
        // });

        // return request;
    }

    populateSeasons(data = []) {
        data.forEach(e => {
            const season = new Season(e.premiereDate, e.endDate);
            this.seasons.push(season);
        });
    }
}

function fetchShowData(id, success, error) {

    fetch(`${url}/${id}`)
    .then(function (response) {
        let myJSON = response.json();
        return myJSON;
    })
    .then(function (myJSON) {
        typeof success === 'function' ? success(myJSON) : null
    })

    // const request = $.ajax({
    //     url: `${url}/${id}`,
    //     method: "GET"
    // });

    // request.done(function (response) {
    //     typeof success === 'function' ? success(response) : null;
    // })

    // request.fail(function (jqXHR, textStatus) {
    //     typeof error === 'function' ? error(textStatus) : null;
    // });
}

function createTVShow(show, limit) {
    return new TVShows(show, limit);
}

function createShow(name, img, id, details) {
    return new Show(name, img, id, details);
}

export {
    createTVShow,
    createShow,
    fetchShowData
}