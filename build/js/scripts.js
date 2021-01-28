'use strict';

var filmList = document.querySelector('.main_filmlist');
var api = {
  key: '0758483bbf141f2377e75ad4723d5ab5',
  baseUrl: 'https://api.themoviedb.org/3/',
  options: 'movie/popular?',
  pageNumber: 1,
  fetchTrendFilms: function fetchTrendFilms() {
    var url = this.baseUrl + this.options + "api_key=".concat(this.key, "&language=en-US&page=").concat(this.pageNumber);
    return fetch(url).then(function (response) {
      if (response.ok) {
        return response.json();
      } else {
        return Promise.reject();
      }
    }).then(function (data) {
      return data.results;
    });
  }
};

function renderFilm(arr) {
  var markup = arr.map(function (_ref) {
    var title = _ref.title,
        poster_path = _ref.poster_path,
        vote_average = _ref.vote_average,
        id = _ref.id,
        release_date = _ref.release_date;
    return "<li class=\"filmlist__item\">\n     \n     <img id=\"".concat(id, "\" width='280' src=\"https://image.tmdb.org/t/p/w500").concat(poster_path, "\" alt=\"").concat(title, "\">\n     <h2>").concat(title, "</h2>||<span class=\"release_date\">").concat(release_date, "</span>\n     <span class=\"rate\">").concat(vote_average, "</span>\n     \n     \n  </li>");
  });
  filmList.insertAdjacentHTML('beforeEnd', markup.join(''));
}

document.addEventListener('DOMContentLoaded', homePageRender);

function homePageRender() {
  api.fetchTrendFilms().then(renderFilm);
}
"use strict";
"use strict";
"use strict";
"use strict";