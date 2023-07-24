const reverse = (str) => {
 if (typeof str != 'string'){
  return 'Argument has to be a string'
 }
return str.split("").reverse().join("")
}

const greet = (name) => {
 if (name) {
   return `Hello ${name}`;
 } else {
   return "Hello";
 }
}

function subtraction(a, b){
  
  if (arguments.length < 2 || arguments.length > 2) {
    return "Must have just 2 arguments allowed";
  }

  if (typeof a !== "number" || typeof b !== "number") {
    return "Arguments have to be a number";
  }

  return a - b;
};

console.log(subtraction(3, 2))
module.exports = { reverse, greet, subtraction };
