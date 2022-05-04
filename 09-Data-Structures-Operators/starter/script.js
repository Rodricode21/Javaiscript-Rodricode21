'use strict';

// Data needed for a later exercise

// Data needed for first part of the section

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   orderDerlivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `order received! ${this.starterMenu[starterIndex]}and ${this.mainMenu[mainIndex]}will be delivered to ${address} at ${time}`
//     );
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
//     );
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient, otherIngredients);
//   },
// };
// restaurant.orderDerlivery({
//   time: '22:30',
//   address: 'via del sole,21',
//   mainIndex: 2,
//   starterIndex: 2,
// });
// const { name, openingHours, categories } = restaurant;

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //nested object
// const {
//   fri: { open, close },
// } = openingHours;

// console.log(open, close);

// const mainMenucopy = [...restaurant.mainMenu];
// console.log(mainMenucopy);

//join 2 arrays
// const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu2);

// const ingredients = [
//   prompt("let's make pasta! ingrediente1?"),
//   prompt(' ingrediente 2?'),
//   prompt(' ingrediente 3?'),
// ];
// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { foundenIn: 1998, ...restaurant, founder: 'guisepe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'ristorante Roma';
// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// const [pizza, , rissoto, ...otherfood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, rissoto, otherfood);
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };

// add(5, 3, 4, 6);
// const x = [23, 54, 12];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives');

// short circuiting

// restaurant.numGuests = 23;
// const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guest1);
// //lesson 1,destructuring arrays;
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startedIndex, mainIndex) {
    return [this.starterMenu[startedIndex], this.mainMenu[mainIndex]];
  },
};

const [first, , second] = restaurant.categories;
console.log(first, second);

let [main, , secondary] = restaurant.categories;

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

for (const [i, player] of game.scored.entries())
  console.log(`goal ${i + 1}: ${player}`);

printGoals(...game.scored);
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);
console.log(
  odds.reduce((prev, current) => {
    return prev + current;
  }, 0) / odds.length
);

// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory${game[team]}`;
//   console.log(`odd of...${teamStr} ${odd}`);
// }

// const newgame = {...game };
// console.log(newgame);

// // coding challengue 2
// const oddsArr = Object.values(game.odds);
// console.log(
//   oddsArr.reduce((prev, current) => {
//     return prev + current;
//   }, 0) / oddsArr.length
// );
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`odd ofm ${teamStr} ${odd}`);
// }

// const orderSet = new Set(['pasta', 'pizza', 'risotto', 'pasta', 'pizzaa']);

// orderSet.add('garlic Bread');
// console.log(orderSet);

// for (const order of orderSet) console.log(order);

// const rest = new Map();
// rest.set('name', 'classico Italiano');
// rest.set(1, 'firenze , Itali');
// console.log(rest.set(2, 'Lisbon, portugal'));

// rest
//   .set('categories', ['italian, Pizzeria', 'vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, ' we are open')
//   .set(false, 'we are close :(');

// console.log(rest.get('name'));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

const question = new Map([
  ['question', ' what is the best programin languaje in the world?'],
  [1, 'c'],
  [2, 'java'],
  [3, 'javascript'],
  ['correct', 3],
  [true, 'correct'],
  [false, ' try again'],
]);
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`answer ${key}: ${value}`);
// }
// const answer = Number(prompt('your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));
// convert map to array;

// modern way to do it
// game.scored.forEach((playerName, idx) => {
//   console.log(`${playerName}, goal: ${idx + 1}`);
// });

// // old way of doing it
// for (let i = 0; i < game.scored.length; i++) {
//   console.log(`${game.scored[i]}, goal: ${i + 1}`);
// }
// jonas  way to doo
// for (const [i, player] of game.score.entries())
//   console.log(`goal ${i + 1}: ${player}`);

//coding challengue1
// const [players1, players2] = game.players;
// console.log(players1, players2);

// const [gk, ...fieldplayer] = players1;
// console.log(gk, fieldplayer);

// const [...allplayers] = [players1, players2];
// console.log(allplayers);
// const [...playersfinal] = [players1, 'couthino', 'thiago', 'perisic'];
// console.log(playersfinal);

// // const { team1, draw, team2 } = game.odds;
// // console.log(team1, draw, team2);

// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGoals = function (...players) {
//   console.log(`${players.length}goals were scored`);
// };
// printGoals(...game.scored);

// team1 < team2 && console.log('team 1 is more likely to win');

// const menu2 = [...restaurant.mainMenu, ...restaurant.starterMenu];
// for (const [i, el] of menu2.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// if (restaurant.openingHours.monday)
//   console.log(restaurant.openingHours.mon.open);

// console.log(restaurant.openingHours.mon?.open);

// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`on ${day}, we open at ${open}`);
// }

// //methods
// console.log(restaurant.order?.(0, 1) ?? 'method does not exist');

// //ejemplo para pendejos
// const users = [{ name: 'jonas', email: 'hellojonas.io' }];
// console.log(users[0]?.name ?? 'user array empty');

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr = `we are open on ${properties.length} days: `;

// for (const day of properties) {
//   openStr += `${day},`;
// }
// console.log(openStr);

// // property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// //entire object
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`on ${key} we open at ${open} and close at ${close}`);
// }
//

//maps: Fundamentals

const rest = new Map();

rest.set('name', 'classico Italiano');

rest
  .set('categories', ['italian', 'pizzeria', 'Vegetarian'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open');

console.log(rest.get('name'));

const time = 21;
console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// codding challengue number 3
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

console.log([...gameEvents]);
const events = [...new Set(gameEvents.values())];
console.log(events);

const arrayEvent = gameEvents.values();
console.log(arrayEvent);

gameEvents.delete(64);
console.log(gameEvents);

console.log(
  `an event happened, on averga, every ${gameEvents.size / 90} minutes`
);

for (const [key, value] of gameEvents) {
  if (key < 45) {
    console.log(`first half ${key}: ${value}`);
  } else {
    console.log(`second half ${key}: ${value}`);
  }
}

// jonas way to do

for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'first' : 'second';
  console.log(`[${half}HALF] ${min}:
  ${event}`);
}

// working with string

const airline = 'TAP Air Portugal';

console.log(airline.slice(4));
console.log(airline.slice(0, airline.indexOf('')));
console.log(airline.slice(airline.lastIndexOf('') + 1));

const checkMiddleSeat = function (seat) {};

const passenger = 'jOnAS';
const passengerLower = passenger.toLocaleLowerCase();
const passengerCorrect =
  passengerLower[0].toLocaleUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);
//comparing email

const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io\n';

const lowerEmail = loginEmail.toLocaleLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normaLizedEmail = loginEmail.toLocaleLowerCase().trim();
console.log(normaLizedEmail);

const announcement = 'all passenger come to barding door 23. boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));

const plane = 'Airbus A320neo';

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the New AIRbus Family');
}

//practice Exercersice

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('you are Not Welcoome a board');
  } else {
    console.log('welcome aboard!');
  }
};

checkBaggage('i have a laptop, some food and pocket knife');
checkBaggage('socks and camera');
checkBaggage('got some snacks and aa gun for proteccion');

console.log('Jonas Schmedtman'.split(' '));
const [firstName, LastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, LastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica annn smit davis');
capitalizeName('jonas schmedtman');

const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};

console.log(maskCreditCard(4335878963516631));

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀
*/

// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));

// document.querySelector('button').addEventListener('click', function () {
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n');
//   console.log(rows);

//   for (const row of rows) {
//     const [first, second] = row.toLowerCase().trim().split('_');

//     const output = `${first}${second.replace(
//       second[0],
//       second[0].toUpperCase()
//     )}`;
//     console.log(output);
//   }
// });
// const getCode = str => str.slice(0, 3).toUpperCase();
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// for (const flight of flights.split('+')) {
//   const [type, from, to, time] = flight.split(';');
//   const output = `${type.replaceAll('_', ' ')} ${getCode(from)} ${getCode(
//     to
//   )} (${time.replace(':', 'h')})`.padStart(36);
//   console.log(output);
// }

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  debugger;

  for (const [i, row] of rows.entries) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    const str = `${output.padEnd(20)}  ${'&'.repeat(i + 1)}`;
    // const str= `${output.padEnd(20,'' )}`-------por que no sirve?
    console.log(str);
  }
});
