"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже смотрели?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};


for (let i = 0; i < 2; i++) {
   const a = prompt('один из последних просмотренных фильмов?', ''),
         b = prompt('на сколько оцените его?', '');

   if (a != null && b != null && a !='' && b != null && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
   } else {
      console.log('error');
      i--;
   }
}

if (personalMovieDB.count < 10) {
   console.log('malo');
   }  else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('norm');
   }  else if (personalMovieDB.count >= 30) {
      console.log('a lot');
   }  else {
      console.log('error');
   }

   console.log(personalMovieDB);