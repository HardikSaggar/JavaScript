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


//Display deposits and withdraws
const displayMovements = function(movements,sort=false){
  containerMovements.innerHTML = ''; // removing the default values in HTML
  const movs = sort ? movements. slice().sort((a,b)=> a -b) : movements;

  movs.forEach(function(mov,i){
    const type = mov > 0? 'deposit' : 'withdrawal';  

    //stored html piece of withdraws and deposits
    const html = `
        <div class="movements">
        <div class="movements__row"> 
          <div class="movements__type movements__type--${type}">${i + 1}</div> 
          <div class="movements__date">3 days ago</div>
          <div class="movements__value">${mov}€</div>
        </div>
        `;

        containerMovements.insertAdjacentHTML('afterbegin',html); 
  });
};

// Map to convert the names into initials
const createUsernames = function(accs){ 
  accs.forEach(function(acc){
    acc.username = acc.owner
    .toLowerCase()
    .split(' ')
    .map((name) => name[0])
    .join('');
  });
};
createUsernames(accounts);

const calcDisplayBalance = function(acc){
  acc.balance = acc.movements.reduce((acc,mov) => acc + mov,0)
  // acc.balance = balance
  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function(acc){
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc,mov) => acc + mov,0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov<0)
    .reduce((acc,mov) => acc + mov,0); 
    labelSumOut.textContent = `${Math.abs(outcomes)}€`;

    const interest = acc.movements
      .filter(mov => mov > 0)
      .map(deposit => (deposit * acc.interestRate)/100)
      .filter((int,i,arr)=> {
        console.log(arr);
        return int >= 1;
      })
      .reduce((acc,int) => acc + int, 0);
    labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (acc){
  displayMovements(acc.movements);

  calcDisplayBalance(acc);

  calcDisplaySummary(acc)

};

// Event Handler
let currAccount;

btnLogin.addEventListener('click', function (e){
  e.preventDefault();

  currAccount = accounts.find(acc => acc.username === inputLoginUsername.value
  );
  console.log(currAccount);
  if(currAccount?.pin === Number(inputLoginPin.value)){
    // Display UI and message
    labelWelcome.textContent = `Welcome Back, ${currAccount.owner.split(' ')[0]}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currAccount);
    // Display movements

    // Display balance

    // Display summary
    // console.log('LOGIN');
  }
}); // triggered with Enter Key also

btnTransfer.addEventListener('click',function (e){
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';

    if (
      amount>0 && 
      receiverAcc &&
      currAccount.balance >= amount && 
      receiverAcc?.username !== currAccount.username
      ) {
        //Transferring
        currAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);

        //Update UI
        updateUI(currAccount);
        console.log('Transferred');
    }
    
});

btnClose.addEventListener('click', function(e){
  e.preventDefault();

  if(
    inputCloseUsername.value === currAccount.username && Number(inputClosePin.value) === currAccount.pin
  ){
    const index = accounts.findIndex(
      acc => acc.username === currAccount.username
      );

    //delete Account
    accounts.splice(index,1);

    //hide UI
    containerApp.style.opacity = 0;
    // console.log('Deleted');
  }
  inputCloseUsername.value = inputClosePin.value='';
});

let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();

  displayMovements(currAccount.movements,!sorted);
  sorted = !sorted;
});


/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// movements.forEach(function(movements){
//   if (movements>0){
//     console.log(`You deposited ${movements}`);
//   }else{
//     console.log(`You withdraw ${Math.abs(movements)}`)
//   }
// });

/////////////////////////////////////////////////


const eurToUsd = 1.1;

const movementsUSD = movements.map(function(mov){
  return mov * eurToUsd
});



// Map

const movementsUSDArrow = movements.map(mov=> mov * eurToUsd);

console.log(movements);
console.log(movementsUSD);
console.log(movementsUSDArrow);

const movementsUSDfor = [];
for(const mov of movements) movementsUSDfor.push(mov*eurToUsd);
console.log(movementsUSDfor);

const movementsDes = movements.map((mov,i)=>{
   if (mov>0){
    return `Movement ${i+1}: You deposited ${mov}`;
  }else{
    return `Movement ${i+1}: You withdraw ${Math.abs(movements)}`;
  }
});

console.log(movementsDes);



// console.log(accounts);
//Filter for deposits and withdrawals
const deposits = movements.filter(function (mov){
  return mov > 0;
});
console.log(deposits);

const withdrawals = movements.filter((mov) => mov < 0);
console.log(withdrawals);

// Reduce 
const balance = movements.reduce(function(acc, curr, i, arr){
  console.log(`Iteration ${i}: ${acc}`);
  return acc + curr
},0);
console.log(balance);

// Maximum Value
const max = movements.reduce((acc, mov) => {
  if (acc>mov)
    return acc;
  else
    return mov;
}, movements[0]);
console.log(max);

//Pipeline
const totalDepositsUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov*eurToUsd)
  .reduce((acc,mov) => acc+mov,0);
console.log(Math.round(totalDepositsUSD));

const firstWithdrawal = movements.find(mov => mov < 0 ); // Returns first element in the array
console.log(movements);
console.log(firstWithdrawal);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

const jessicaD = [];
for(const own of accounts){
  if (own.owner === 'Jessica Davis'){
   jessicaD.push(own);
  }
};
console.log(jessicaD);


// const movementsUSDfor = [];
// for(const mov of movements) movementsUSDfor.push(mov*eurToUsd);
// console.log(movementsUSDfor);