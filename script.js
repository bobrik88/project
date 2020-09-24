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