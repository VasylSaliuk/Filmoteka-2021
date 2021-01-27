'use strict';
import filmItem from '../tamplates/homePage.hbs';

const api = {
  key: '0758483bbf141f2377e75ad4723d5ab5',
  baseUrl: 'https://api.themoviedb.org/3/',
  options: 'trending/all/day?',
  fetchTrendFilms() {
    const url = this.baseUrl + this.options + `api_key=${this.key}`;
    return fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject();
        }
      })
      .then(data => data.results);
  },
};

function renderFilm(arr) {
  const markup = filmItem(arr);

  filmlist.insertAdjacentHTML('beforeEnd', markup);
}

document.addEventListener('DOMContentLoaded', homePageRender);

function homePageRender() {
  api.fetchTrendFilms().then(renderFilm);
}
