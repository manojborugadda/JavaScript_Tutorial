const str1 = "Manoj";
const str2 = new String("Manoj");
console.log(str1);
console.log(str2);
console.log(str1 === str2);//false
console.log(str1 === str2.toString()); //true

const s1 = new String("javascript");
const s2 = new String("javascript");
console.log("without converting into primitive string -----> result is : " ,s1 === s2); //false
console.log("after converting into primitive string using toString method ---> result is : " ,s1.toString() === s2.toString()); //true

/**
 If you do need to compare a primitive string to a string object,
 we can use the toString() method to explicitly convert the string object to a primitive string before comparing.
*/
