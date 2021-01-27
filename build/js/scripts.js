'use strict';

var _homePage = _interopRequireDefault(require("./tamplates/homePage.hbs"));

var _refs = _interopRequireDefault(require("./refs.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var filmlist = _refs.default.filmlist;
var api = {
  key: '0758483bbf141f2377e75ad4723d5ab5',
  baseUrl: 'https://api.themoviedb.org/3/',
  options: 'trending/all/day?',
  fetchTrendFilms: function fetchTrendFilms() {
    var url = this.baseUrl + this.options + "api_key=".concat(this.key);
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
  var markup = (0, _homePage.default)(arr);
  filmlist.insertAdjacentHTML('beforeEnd', markup);
}

document.addEventListener('DOMContentLoaded', homePageRender);

function homePageRender() {
  api.fetchTrendFilms().then(renderFilm);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  filmList: document.querySelector('.main_filmlist')
};
exports.default = _default;