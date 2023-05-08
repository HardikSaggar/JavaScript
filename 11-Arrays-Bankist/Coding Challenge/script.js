'use strict';

const juliaArr = new Array(3,5,2,12,7);

const juliaArrNew = juliaArr.slice(1,-1);

const kateArr = new Array(4,1,15,8,3);

const data1 = juliaArrNew.concat(kateArr);



const checkDogs = function(data){
    // console.log(data);
    data.forEach(function(dt,i){
        const dog = dt>5? `Dog number ${i+1} is an adult and is ${dt} year old` : `Dog number ${i+1} is still a puppy and is ${dt} year old`;
        console.log(dog);
    })
};
checkDogs(data1);

console.log('SEPARATION');

const checkDog = function(dogsJulia,dogsKate){
    const dogsJuliaCorrected = dogsJulia.slice();
    dogsJuliaCorrected.splice(0,1);
    dogsJuliaCorrected.splice(-2);
    // console.log(dogsJuliaCorrected);
    const dogs = dogsJuliaCorrected.concat(dogsKate); // can use spread Operator
    dogs.forEach(function(dog,i){
        if (dog >= 3){
            console.log(`Dog number ${i+1} is an adult 🐕‍🦺, and is ${dog} year old`);
        }else{
            console.log(`Dog number ${i+1} is still a puppy🐶, and is ${dog} year old`);
        }
    
    });
};
checkDog([3,5,2,12,7],[4,1,15,8,3]);

// const dogData1 = [5,2,4,1,15,8,3];
// const calcDog = dogData1.map((dog,i) =>{
//     if (dog <= 2){
//         let humanAge = 2*dog;
//         console.log(`Human age: ${humanAge}, Dog age: ${dog}`);
//     }else if(dog > 2){
//         let humanAge = 16 + dog*4;
//         console.log(`Human age: ${humanAge}, Dog age: ${dog}`);
//     };
//     console.log(humanAge);
// });

// calcDog();

const calcAverageHumanAge = function(ages){
    const humanAges = ages.map(age => age <= 2 ? 2 * age: 16 + age* 4);
    // console.log(humanAges);
    const adults = humanAges.filter(age => age >= 18);
    const avg = adults.reduce((acc,age)=> acc+age,0)/adults.length;

    const average = adults.reduce(
        (acc,age,i,arr)=> acc+age/arr.length,0
    );
    return average
};

const calcAverageHumanAgeNew = ages => ages.
    map(age => age <= 2 ? 2 * age: 16 + age* 4)
    .filter(age => age >= 18)
    .reduce(
        (acc,age,i,arr)=> acc+age/arr.length,0
    );

const avg1 = calcAverageHumanAge([5,2,4,1,15,8,3]);
const avg2 = calcAverageHumanAge([16,6,10,5,6,1,4]);
console.log(calcAverageHumanAgeNew([16,6,10,5,6,1,4]));

console.log(avg1,avg2);

