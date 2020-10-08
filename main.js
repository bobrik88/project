"use strict";



// let user;
// let username = 'Вася';
// user = username;
// console.log(user);

// let truOrFalse = 10 > 5;
// console.log(truOrFalse);

// let userAge = 55;
// let userInfo = `friend ${userAge}`;
// console.log(userInfo);




// const firstName = 'Sergey';
// const lastName = prompt('vvedite imya');
// alert(firstName + ' ' + lastName);



// function yearOld(year) {
//    return 2020 - year;
// }
// function firstName(name, year) {
//    const Age = yearOld(year)
//    console.log('имя:' + name, 'возраст:' + Age)
// }
// firstName('sergey', 1986)
// firstName('igor', 1984)

// const speak = function (name, time) {
//    console.log(`my name is: ${name} have a nice ${time}`);
// };
// speak('sergey', 'day');


// const num = 42
// const float = 42.25
// const pow = 10e3
// console.log(pow)


// const logg = "hello world";
// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));

let numberOfFilms;

function start() {
   numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
      numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
   }
}
start();

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false,
};




function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('один из последних просмотренных фильмов?', ''),
         b = prompt('на сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != null && a.length < 50) {
         personalMovieDB.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}

// rememberMyFilms();


function detectPersonalLevel() {
   if (personalMovieDB.count < 10) {
      console.log('malo');
   } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('norm');
   } else if (personalMovieDB.count >= 30) {
      console.log('a lot');
   } else {
      console.log('error');
   }
}
// detectPersonalLevel();

function showMyDB(hidden) {
   if (!hidden) {
      console.log(personalMovieDB);
   }
}

showMyDB(personalMovieDB.privat);

function writeYourGeneres() {
   for (let i = 1; i <= 3; i++) {
      personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
   }
}

writeYourGeneres();
