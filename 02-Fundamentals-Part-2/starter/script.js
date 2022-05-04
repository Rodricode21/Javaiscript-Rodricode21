"use strict";
/*
function CalcAverage(Average_Koalas, Average_Dolphins){
const Average= `The average of the koalas is ${Average_Koalas} and the average of the dolphins is ${Average_Dolphins}` 
return Average;

}



function Checkwinner(Average_Dolphins,Average_Koalas){
    const WinnerIs= `the winner is koalas ${Average_Koalas} poinst vs ${Average_Dolphins} poinst of dolphins`
    return WinnerIs;

}


const Average_Dolphins= (44+23+71)/3;
const Average_Koalas= (65+54+49)/3;
console.log (CalcAverage(Average_Koalas, Average_Dolphins));
console.log(Checkwinner(Average_Dolphins,Average_Koalas));
*/
/*

function Calc_average(score1,score2,score3){
    return (score1+score2+score3)/3
}

const checkwinner= function(Average_Dolphins, Average_Koalas){
    if(Average_Koalas >= Average_Dolphins*2){ console.log(`koalas wins ${Average_Koalas} vs ${Average_Dolphins}`)
}else if(Average_Dolphins >= Average_Koalas*2){console.log(`dolphins wins ${Average_Dolphins}vs ${Average_Koalas}`)}
else{console.log("nobody wins the thropy")}
}  




const Average_Dolphins=Calc_average(300,54,51);
const Average_Koalas=Calc_average(23,34,41);
checkwinner(Average_Dolphins,Average_Koalas);

console.log(Average_Dolphins, Average_Koalas,);
*/
/*
const CalcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.2 : bill * 0.15;
};
ACA ES LO QUE TENES QUE REPASAR
const bills = [125, 55, 44];
const tips = [CalcTip(bills[0]), CalcTip(bills[1]), CalcTip(bills[2])];
console.log(bills, tips);

// forma mala - imprime string
const miArreglo = new Array(1, 2, 3, 4);
const total = [bills[0] + tips[0], bills[1] + tips[1],bills[2] + bills[2]];
console.log(total); 

*/
/*
 const CalcTip =function(bill){
    if (bill>=50&&bill<=300){
        return bill.20
    } else {
        bill0.15
    }
    return bill; 
    if(true .. condicional que sea) {
        return bill * 20
    } else {
        return bill * 15
    }
}

const bills=[125,55,44];
const tips =[CalcTip(bills[0]), CalcTip(bills[1]), CalcTip(bills[2])];
console.log(bills,tips);
*/
/*
const jonas={
firstName: `jonas`,
bestFriend:`michael`,
nFriend: `3`


}

console.log(`${jonas.firstName} has a ${jonas.nFriend} friend and his best friend is ${jonas.bestFriend}`);

*/
/*
const jonas = {
  firstName: `Jonas`,
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  },

  getSumary: function () {
      return `${this.firstName} is a ${this.calcAge()}-years old , and he has ${this.hasDriversLicense ? `a`: `not`} has driver license`
  }
};

console.log(jonas.getSumary());*/
/*
const mark={
    firstname: "mark",
    lastname: "miller",
    height: 1.69,
    weight:78,

    calcBMI: function(){
        this.markBMI= (this.weight/this.height**2);
        return this.markBMI;
    }
}

const jhon={
    firstname: `jhon`,
    lastname: `smhith`,
    height: 1.95,
    weight: 92,

    calcBMI: function(){
        this.jhonBMI= (this.weight/this.height**2);
        return this.jhonBMI;
    }
}

mark.calcBMI();
jhon.calcBMI();
console.log(`${mark.firstname} ${mark.lastname} ${mark.markBMI} is lower than ${jhon.firstname} ${jhon.lastname} ${jhon.jhonBMI}`);
*/


const bill= [22,295,176,440,37,105,10,1100,86,52];
const tips= [];
const totals=[];

const calcTip = function (bill){
    return bill >= 50 && bill <= 300 ? bill * 0.2 : bill * 0.15;
}
for(let i=0;i<bill.length;i++){
const tip= calcTip(bill[i]);
tips.push(tip);
totals.push(tip+bill[i]);

}
console.log( totals,bill,tips);

const calcAverage= function(array){
let sum= 0;
for(let i=0;array.length;i++){
    sum+= array[i];
}
return sum/array.length;
}

console.log(calcAverage(tips,bill,totals));