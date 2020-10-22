"use strict";

const obj = {
   name: "John",
   age: 25,
   isMarried: false,
};

console.log(obj.name);

let arr = ['plug.png', 'orange.png', 6, 'apple.png',];
console.log(arr[1]);


alert('hello');
const result = confirm('are you here');
console.log(result);
const answer = +prompt("Вам есть 18?", "");
console.log(answer + 5);


const answers = [];
answers[0] = prompt('what is you name?', '');
answers[1] = prompt('what is you surname?', '');
answers[2] = prompt('how you year old?', '');

document.write(answers);

//--------------------------ДЗ---------------------------------

const numberOfFilms = prompt('Сколько фильмов вы уже смотрели?', '');

const personalMovieDB = {
   count: numberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   privat: false
};
const a = prompt('один из последних просмотренных фильмов?', ''),
   b = prompt('на сколько оцените его?', ''),
   c = prompt('один из последних просмотренных фильмов?', ''),
   d = prompt('на сколько оцените его?', '');

   personalMovieDB.movies[a] = b;
   personalMovieDB.movies[c] = d;

   console.log(personalMovieDB);

   //-----------------------Условия--------------------------

   const num = 50;
(num === 50) ? console.log('ok') : console.log('error');


const num = 50;
switch (num) {
   case 49:
      console.log('noup');
      break;
   case 100:
      console.log('noup');
      break;
   case 50:
      console.log('yuupp');
      break;
   default: 
   console.log('not now');
   break;
}
// ---------------------Циклы-------------------

let num = 50;

while(num<55) {
   console.log(num);
   num++;
}

do {
   console.log(num);
   num++;
}
while (num<55);

for (let i = 1; i < 10; i++) {
   if (i === 6) {
      break;
   }
   console.log(i);
}
// ---------------------------------------ДЗ 2 -------------------------

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
   
   // ---------------------------------------ДЗ 3 -------------------------
   
   
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


   // -------------------callback------

   function learnJS(lang,lang2,callback) {
      console.log(`i lern: ${lang}`);
      console.log(`i try speak Englesh ${lang2}`);
      callback();
   }
   function done() {
      console.log('i did it`s lesson');
   }
   
   learnJS(`Java script`,`every day`, done);

   // ------------------------ 20 ------------------
   const options = {
      name: 'test',
      width: 1024,
      height: 1024,
      colors: {
         border: 'black',
         bg: 'red'
      },
      makeTest: function() {
         console.log("Test");
      }
   };
   
   options.makeTest();
   
   const {border, bg} = options.colors;
   console.log(border);
   
   // console.log(options.name);
   
   // delete options.name;
   
   // console.log(options);
   
   let counter = 0;
   
   for (let key in options) {
      if (typeof(options[key]) === 'object') {
         for (let i in options [key]) {
            console.log (`Свойство ${i} имеет значение ${options[key][i]}`);
         }
      } else {
            console.log (`Свойство ${key} имеет значение ${options[key]}`); 
      }  
   }
   console.log(counter);