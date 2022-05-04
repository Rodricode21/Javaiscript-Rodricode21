'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;
  function printAge() {
    const output = `${firstName} you are ${age}, born in ${birthYear};`;
    console.log(output);
    if (birthYear >= 1981 && 1996) {
      const firstName = 'steven';
      // creating a new variable with same name as scope variable
      output = 'new output';

      const str = `oh, and you are a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
    }
    add(2, 3);
  }
  printAge();
  return age;
}
calcAge(1991);
const firstName = 'jonas';
