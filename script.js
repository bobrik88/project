"use strict";

const obj = {
   name: "John",
   age: 25,
   isMarried: false,
};

console.log(obj.name);

let arr = ['plug.png', 'orange.png', 6, 'apple.png',];
console.log(arr[1]);


//alert('hello');
//const result = confirm('are you here');
//console.log(result);
//const answer = +prompt("Вам есть 18?", "");
//console.log(answer + 5);


const answers = [];
answers[0] = prompt('what is you name?', '');
answers[1] = prompt('what is you surname?', '');
answers[2] = prompt('how you year old?', '');

document.write(answers);