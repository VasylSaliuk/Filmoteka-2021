'use strict';

var filmList = document.querySelector('.main_filmlist');
var api = {
  key: 'd91911ebb88751cf9e5c4b8fdf4412c9',
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
console.log(api.fetchTrendFilms());

function renderFilm(arr) {
  var markup = arr.map(function (_ref) {
    var title = _ref.title,
        poster_path = _ref.poster_path,
        vote_average = _ref.vote_average,
        id = _ref.id;
    return "<li class=\"main_filmlist__item\">\n   <h2>".concat(title, "</h2>\n   <img id=\"").concat(id, "\" width='200' src=\"https://image.tmdb.org/t/p/w500").concat(poster_path, "\" alt=\"").concat(title, "\">\n   <p class=\"rate\">").concat(vote_average, "</p>\n</li>");
  });
  filmList.insertAdjacentHTML('beforeEnd', markup.join(""));
}

document.addEventListener('DOMContentLoaded', homePageRender);

function homePageRender() {
  api.fetchTrendFilms().then(renderFilm);
}
"use strict";

var filmList = document.querySelector('.main_filmlist');