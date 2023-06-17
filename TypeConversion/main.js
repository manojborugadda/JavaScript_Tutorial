/** In programming, type conversion is the process of converting DATA of one TYPE to another. For example: converting String data to Number.
 There are two types of type conversion in JavaScript.
 Implicit Conversion - automatic type conversion
 Explicit Conversion - manual type conversion
**/



//let's learn one by one

//JavaScript Explicit Conversion

//Convert to BOOLEAN Explicitly
let result;
result = Boolean('');
console.log(result); // false

result = Boolean(0);
console.log(result); // false

result = Boolean(undefined);
console.log(result); // false

result = Boolean(null);
console.log(result); // false

result = Boolean(NaN);
console.log(result); // false


