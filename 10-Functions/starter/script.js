'use strict';

// const bookings = [];

// const createBooking = function (flightNum, numPassengers = 1, price = 99) {
//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Schmedtmann',
//   passport: 247854132698,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 247854132698) {
//     alert('checcked in');
//   } else {
//     alert('wrong passport');
//   }
// };

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// const newPassaport = function (person) {
//   person.passport = Math.trunc(Math.random()) * 100000;
// };

// newPassaport(jonas);
// checkIn(flight, jonas);

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...otherwords] = str.split(' ');
  return [first.toUpperCase(), ...otherwords].join(' ');
};

const transformer = function (str, fn) {
  console.log(`original string: ${str}`);
  console.log(`transformed string: ${fn(str)}`);

  console.log(`transformed by: ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstWord);
transformer(' javaScript is the best!', oneWord);

const high5 = function () {
  console.log('+');
};

['jonas', 'martha', 'adam'].forEach(high5);

const greet = greeting => name => console.log(`${greeting} ${name}`);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

const greeterHey = greet('hey');
greeterHey('rodrigo');

const lufthansa = {
  airline: 'lufthansa',
  iataCode: 'LH',
  bookings: [],

  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}  ${flightNum} `
    );
    this.bookings.push({ flight: ` ${this.iataCode}  ${flightNum}`, name });
  },
};

lufthansa.book(239, 'oscar rodrigo');
console.log(lufthansa);

const eurowings = {
  airline: 'EuroWings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// call method

book.call(eurowings, 23, 'sarah williams');
console.log(eurowings);

book.call(lufthansa, 239, 'mary cooper');
console.log(lufthansa);

const swiss = {
  airline: 'swiss aire lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//apply method
const flightData = [583, ' George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

const bookEW = book.bind(eurowings);
bookEW(23, 'steven williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('jonas schmendtman');
bookEW23('Martha Cooper');

// With Event Listener

lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

const addTax = (rate, value) => value + value * rate;

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
// A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

// Here are your tasks:

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
//   1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
//         What is your favourite programming language?
//         0: JavaScript
//         1: Python
//         2: Rust
//         3: C++
//         (Write option number)

//   1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

// HINT: Use many of the tools you learned about in this and the last section 😉

// BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

// BONUS TEST DATA 1: [5, 2, 3]
// BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

// const incrementStrByOne = str => {
//   const splitChars = str.split('');
//   const numberStr = splitChars.find(char => Number(parseInt(char)));
//   console.log(numberStr);
// };

const poll = {
  question: 'what is your favoriteme programing languaje?',
  options: ['0; JavaScript', '1: python', '2: Rust', '3: c++'],

  answers: new Array(4).fill(0),

  registerNewAnserw() {
    const answer = Number(
      prompt(`${this.question}\n ${this.options.join('\n')} (write a number)`)
    );
    console.log(answer);

    if (typeof answer === 'number' && answer < this.answers.length) {
      this.answers[answer]++;
    }
    this.displayResults('string');
  },
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`the poll results are ${this.answers.join(', ')}`);
    }
  },
};
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnserw.bind(poll));

//IIFE

(function () {
  console.log('this will never run again');
})();

(() => console.log('this will also nevert run again'))();

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount}: passengers`);
  };
};

const booker = secureBooking();

booker();
booker();

const booker2 = secureBooking();
booker2();

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

h();
f();
console.dir(f);

const boardPassenger = function (n, wait) {
  const perGroup = n / 3;
  setTimeout(function () {
    console.log(`we are now boarding all ${n}passemgers`);
    console.log(`there are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`will start boarding in ${wait} seconds`);
};

boardPassenger(180, 3);

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
