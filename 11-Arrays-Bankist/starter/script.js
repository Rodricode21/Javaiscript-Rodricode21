'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// console.log(movements.slice(4));
// // console.log(movements.splice(4));
// console.log(movements);
// /////////////////////////////////////////////////

// const arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];

// console.log(arr.at(0));
// console.log(arr.at(-1));

// const letters = arr.concat(arr2);
// console.log(letters);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`you deposited ${movement}`);
//   } else {
//     console.log(`you withdrew ${Math.abs(movement)}`);
//   }
// }

// how access to  current index
// console.log('---------for Each--------');
// movements.forEach(function (movement, i, arr) {
//   if (movement > 0) {
//     console.log(`movement ${i + 1} you deposited ${movement}`);
//   } else {
//     console.log(`movement ${i + 1} you withdrew ${Math.abs(movement)}`);
//   }
//   console.log(arr);
// });

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

function displayMovements(movements, sort = false) {
  containerMovements.innerHTML = ' ';

  const mov = sort ? movements.slice().sort((a, b) => a - b) : movements;

  mov.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements__type movements__type--${type}">${
      i + 1
    }${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;

    containerMovements.insertAdjacentHTML(`afterbegin`, html);
  });
}
// displayMovemnts(account1.movements);

// createUsernames(accounts);
// console.log(accounts);

// // reduce method

/*
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀*/

// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// console.log(dogsJulia);

// const checkDogs = function (dogsJulia, dogsKate) {
//   dogsJulia.splice(-2);
//   dogsJulia.splice(0, 1);

//   const allDogs = dogsJulia.concat(dogsKate);
//   console.log(allDogs);

//   allDogs.forEach(function (dogAge, idx) {
//     if (dogAge >= 3) {
//       console.log(
//         `Dog number ${idx + 1} is an adult, and is ${dogAge} years old`
//       );
//     } else {
//       console.log(`Dog number ${dogAge} is still a puppy`);
//     }
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);

// checkDogs(dogsJulia, dogsKate);
// // const dogsJuliaCorrected = dogsJulia.slice();
// //   dogsJuliaCorrected.splice(0, 1);
// //   dogsJuliaCorrected.splice(-2);
// //   // dogsJulia.slice(1, 3);

// const checkDogs2 = function (dogsAna, dogsNana) {
//   const dogsAnaCorrected = dogsAna.slice();
//   dogsAnaCorrected.splice(0,1);
//   dogsAnaCorrected.splice(-2);

// };
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// dogsJulia.splice(-2);
// dogsJulia.splice(0, 1);

// const checkDogs = function (dogsJulia, dogsKate) {
//   const allDogs = dogsJulia.concat(dogsKate);

//   allDogs.forEach(function (dogAge, idx) {
//     if (dogAge >= 3) {
//       console.log(
//         `Dog number ${idx + 1} is an adult, and is ${dogAge} years old`
//       );
//     } else {
//       console.log(`Dog number ${dogAge} is still a puppy`);
//     }
//   });
// };

// checkDogs(dogsJulia, dogsKate);

// const calcAverageHumanAge = dogsAges => {
//   // calculate in human age
//   const humanAgesArr = dogsAges.map(age => {
//     if (age <= 2) return 2 * age;
//     if (age > 2) return 16 + age * 4;
//   });

//   // filter out the ones whose human age is less than 18 years old
//   const olderThanEighteen = humanAgesArr.filter(age => age >= 18);

//   // calculate the average age of all adult dogs
//   const average =
//     olderThanEighteen.reduce((acc, current) => acc + current, 0) /
//     olderThanEighteen.length;

//   return average;
// };

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurtoUsd = 1.1;

const movementsUSD = movements.map(mov => mov * eurtoUsd);

// const movementsUSD = movements.map(function (mov) {
//   return mov * eurtoUsd;
// });

console.log(movements);
console.log(movementsUSD);

const movementsUSDfor = [];
for (const mov of movements) {
  movementsUSDfor.push(mov * eurtoUsd);
}
console.log(movementsUSDfor);

// const movementsDescriptions = movements.map((mov, i, arr) => {
//   if (mov > 0) {
//     return `movement ${i + 1} you deposited ${mov}`;
//   } else {
//     return `movement ${i + 1} you withdrew ${Math.abs(mov)}`;
//   }
// });

// otherWay
const movementsDescriptions = movements.map(
  (mov, i) =>
    `movement ${i + 1} you ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);

console.log(movementsDescriptions);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});
const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(movements);
console.log(deposits);
console.log(depositsFor);

const whitdrawls = movements.filter(out => out < 0);

console.log(whitdrawls);

/// maximun value

const array = [500, 20, 86, 87, 54];

const max = Math.max(...array);
console.log(max);

const max2 = movements.reduce((acc, mov) => {
  if (acc > mov) {
    return acc;
  } else {
    return mov;
  }
}, movements[0]);

console.log(max2);

const getMaxElemnt = numArr => Math.max(...numArr);
console.log(getMaxElemnt(account1.movements));

const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurtoUsd)
  .reduce((acc, mov) => acc + mov, 0);

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

// const calcAverageHumanAge = dogsAges => {
//   const humanAge = dogsAges.map(age => (age <= 2 ? age * 2 : 16 + age * 4));

//   const olderThanEighteen = humanAge.filter(age => age >= 18);

//   const average =
//     olderThanEighteen.reduce((acc, current) => acc + current, 0) /
//     olderThanEighteen.length;

//   return average;
// };

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// console.log(avg1);

//
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

// event handdler
const user = 'Steven Thomas Williams';
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

let currentAccount;

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount / 100)) {
    //add movement
    currentAccount.movements.push(amount);

    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(receiverAcc, amount);
  inputTransferAmount.value = inputTransferAmount.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    console.log('funciono');
    // Update UI
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);

    accounts.splice(index, 1);

    // hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// some and every method

console.log(movements.some(mov => mov === 130));

const anyDeposit = movements.some(mov => mov > 0);
console.log(anyDeposit);
console.log(account4.movements.every(mov => mov > 0));

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];

console.log(arr.flat);

// const accountMovement = accounts.map(acc => acc.movements);

// console.log(accountMovement);

// const allMovents = accountMovement.flat();

// console.log(allMovents);

//flat
const overBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

console.log(overBalance);

const overBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);

console.log(overBalance2);

//ascending order
console.log(
  movements.sort((a, b) => {
    a - b;
  })
);

//descending order

movements.sort((a, b) => {
  b - a;
});

console.log(movements);

let sorted = false;

btnSort.addEventListener('click', function (e) {
  e.preventDefault();

  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

const y = Array.from({ lenght: 7 }, () => 1);
console.log(y);

const diece = Array.from({ length: 100 }, (_, i) => i + 1);
console.log(diece);

labelBalance.addEventListener('click', function () {
  const movementUI = Array.from(
    document.querySelectorAll('.movements_value'),
    el => Number(el.textContent)
  );
  console.log(movementUI);
});

// uso flat para convertir todo en una sola array

// const bankDepositSum = accounts.map(acc => acc.movements).flat();
// console.log(bankDepositSum);
// flatmap para hacerme el canchero

const bankDeposit2 = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((sum, cur) => sum + cur, 0);

console.log(bankDeposit2);

//exercise 2
const numDeposit1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, cur) => (cur >= 1000 ? count + 1 : count), 0);

console.log(numDeposit1000);

//exercise 3

const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sums, cur) => {
      // cur > 0 ? (sums.deposits += cur) : (sums.whitdrawls += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      return sums;
    },
    { deposits: 0, whitdrawls: 0 }
  );

console.log(sums);

const convertTitleCase = function (title) {
  const excepctions = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with'];

  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word =>
      excepctions.includes(word) ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(' ');
  return titleCase;
};

console.log(convertTitleCase('this is a nice tittle'));
console.log(convertTitleCase('this is a LONG title but not to long'));

/// coding challengue 4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion. */

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//1
dogs.forEach(
  dog => (dog.recommendedFood = Math.trunc(dog.weight ** 0.75 * 28))
);

console.log(dogs);

//2
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);

console.log(
  `sarah dog is eating ${
    dogSarah.curFood > dogSarah.recommendedFood ? 'much' : 'little'
  }`
);

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch, ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(' and ')} dogs eating too much`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eating too little`);

console.log(dogs.some(food => food.curFood === food.recommendedFood));

// // original
// console.log(
//   dogs.some(
//     food =>
//       food.curFood > food.recommendedFood * 0.9 &&
//       food.curFood < food.recommendedFood * 1.1
//   )
// );

// const dogsOkay = dogs.filter(
//   food =>
//     food.curFood > food.recommendedFood * 0.9 &&
//     food.curFood < food.recommendedFood * 1.1
// );

// console.log(dogsOkay);

//refactorizando

const checkOkay = food =>
  food.curFood > food.recommendedFood * 0.9 &&
  food.curFood < food.recommendedFood * 1.1;

console.log(dogs.some(checkOkay));
console.log(dogs.filter(checkOkay));

// last exercise
const dogsCopy = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsCopy);

function findOutlier(integers) {
  const even = [];
  const odd = [];

  for (let number of integers) {
    if (number % 2 === 0) {
      even.push(number);
    } else {
      odd.push(number);
    }
  }
  return odd.length === 1 ? odd[0] : even[0];
}
