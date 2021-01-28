'use strict';

const  filmList =document.querySelector('.main_filmlist') 
const api = {
  key: 'd91911ebb88751cf9e5c4b8fdf4412c9',
  baseUrl: 'https://api.themoviedb.org/3/',
  options: 'movie/popular?',
  pageNumber:1,
  fetchTrendFilms() {
    const url = this.baseUrl + this.options + `api_key=${this.key}&language=en-US&page=${this.pageNumber}`;
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
console.log(api.fetchTrendFilms())

function renderFilm(arr) {
  const markup = arr.map(({title, poster_path,vote_average, id}) => {
   return `<li class="main_filmlist__item">
   <h2>${title}</h2>
   <img id="${id}" width='200' src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}">
   <p class="rate">${vote_average}</p>
</li>`
  });

  filmList.insertAdjacentHTML('beforeEnd', markup.join(""));
}

document.addEventListener('DOMContentLoaded', homePageRender);

function homePageRender() {
  api.fetchTrendFilms().then(renderFilm);
}
