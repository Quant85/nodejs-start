const validator = require('validator');

//console.log(validator);


const check1 = validator.isEmail('antonio@gmail');
const check2 = validator.isEmail('antonio@gmail.com');

//console.log(check1, check2); //false true

//Sanifichiamo una stringa da alcuni caratteri con il metodo blacklist

const clearStr = validator.blacklist('abc<img>', '<>'); 

//console.log(clearStr);//abcimg