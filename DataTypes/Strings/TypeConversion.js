let stringType = "69";
console.log(stringType , typeof(stringType)); // 69 string

//Number method 
let num = Number(stringType);//if the string we are passing is not having of numeric value it will return NaN
console.log(num,typeof(num)); //69 number

//String Method
let n = 96;
let st = String(n);
console.log(st,typeof st); // 96 string

//Boolean Method
let age = 25; //whatever the number is non zero it always gives TRUE
let booleanValue = Boolean(age); //true boolean
console.log(booleanValue,typeof booleanValue);

let name = ""; //if we provide the string as BLANK or EMPTY it will return FALSE other than this case it will return TRUE
let booleanValueforString = Boolean(name);
console.log(booleanValueforString,typeof booleanValueforString); //false boolean
