'use strict'
// console.log('ALOHA');

// alert('Aloha');

// TYtpes of data

// string "hello world"
// number = 1,2 ,3 ,4...
// boolean true / false
// undefined 
// nall
// object


// let number1 = 2.1;

// const number2 = 2.2; 

// console.log ((number1*10 + number2*10)/10);

// let a;

// console.log(a);

// a = 5;
// console.log(a);
// const b = 10;
// console.log(a+b)
// console.log(b)
// a = 'Aloha';
// a = {c:1}
// a = true;




// console.log(typeof ((1+1+'1a') * 3));


// ---------------------logik operator
// const x= 5;
// const z=10;
// // const z = '5';
// console.log('x>y', x>y )
// console.log('x===y', x===z )
// console.log('x==y', x==z )
// console.log('x ! == z', x!==z )

// console.log(false)
//Fals eData
// 0
// **
// null
// undefined
// false
// NaN

// console.log(Math.pow(2, 300)<Math.pow(3, 200));
// function factorial(n) {
//     return (n != 1) ? n * factorial(n - 1) : 1;
//   }
// console.log( Math.pow(factorial(100), 99)===Math.pow(factorial(99), 100));
// console.log(factorial(100))
// console.log(factorial(99))
// console.log(factorial(100)>factorial(99))
// console.log( Math.pow(factorial(100), 99)===Math.pow(factorial(99), 100));
// console.log( Math.pow(factorial(100), 99)==Math.pow(factorial(99), 100));
// console.log( Math.pow(factorial(100), 99)>Math.pow(factorial(99), 100));
// console.log( Math.pow(100, 99)>(factorial(100)));
// const img = new Image();
// img.src = 'http://www.stihi.ru/pics/2010/02/27/2487.jpg'
// alert(img);


// 20




// console.log(20*45);

//Fals eData
// 0
// **
// null
// undefined
// false
//------------_____________________________------------------______________-
// console.dir('ALOHA'.length)

// let str = 'hello world';
// let upperCaseSting = str.toUpperCase();
// console.log(upperCaseSting)

// console.log(str.indexOf('work'))

// console.log(str.includes('world'))
//_________________________________________________------------------------------




// const age = 12;
// const name = 'Artem';
// const prof = 'Student';
// // const res = 'My name is'+ name + ' , I am ' + age + 'years old';
// // console.log(res)

// const res = `My name is ${name}, I'm ${age+1} years old. I'm ${prof}.`
// console.log(res)
//<
//>
//==
//===
//!==
//
//&& i
// || uli

// const a = -1 || 0 || 0;
// console.log(a)

// const b = "1" && 1 && true && "";
// console.log(b)



///////////-------------------------------______________________-
//if/else
// const weather = false;
// const haveBike = true;
// if(weather && haveBike) {
//  console.log('I go ride a bike');
// } 
// else if (weather) {
//   console.log("I'll cry");
// }
//  else {
//    console.log("I'll die");
//  }

// const health = -10;
// const day =  5;
// const month = 5;
// if(health<8) {
//   console.log("Stay home, your sick")
// }
// else if (day === 6 || day===7) {
// console.log("Stay home, you have weekends")
// }
// else if(month >= 6 && month <= 8){
// console.log("Stay home, yiu have holiday")
// }
// else {
//   console.log('Go to school')
// }

// health<8 ? :
// (day === 6 || day===7) ? :
// (month >= 6 && month <= 8) ? console.log("Stay home, yiu have holiday") 

// true ? console.log(true) : console.log(false);

// const data = null;
// data ? alert(data) : console.error("No data yet")
// const car = true;
// const age = 6;
// car && age>=18 ? alert("Yes") : console.error("You loser") 

// let  str = "Hello world";
// let x = 0;
// while (x < str.lenght) {
// console.log(`${x+1} : ${str[i]}`); 
// x = x+1;

//  }
// let name = 'Artem'; 
// const mony = 10000;
// let fruits = "orange";//fruits 
// let meat = "friend";//meat,
// let sweets = "chokolate"//sweets,
// const time = 14;
// const day = 5;
// let fsum = 2;  
// let msum = 4;
// let ssum = 2;
// let fsu = 100;  
// let msu = 500;
// let ssu = 660;
// const a = fsu*fsum+msu*msum+ssu*ssum;
// if (time<8 || time > 22 || day >=7 || day<0) {
// console.log("Sorry, dear",name,"! We aren't working now.")
// } else if (fsum<=0 || msum<=0 || ssum<= 0 || fruits==meat || fruits==sweets || meat==sweets){
// console.log("You didn't buy food, which you need! It is law! You need buy tree types of product!")
// } else if(mony<a){
// console.log("Dear",name,"you haven't enough money! You need",a-mony,"grn.")
// }
// else {
//   console.log("Thanks dear",name,"! You bought",fsum,fruits,",",msum,meat,",",ssum,sweets,". From you",a,"gryvna! Come again! Your rest is",mony-a,"grn.")
// } 

// let str = "Hello world";


// let x = 0;
// while (x < str.length) {
// console.log(`${x+1} : ${str[x]}`);
// if (str[x] == ' ') {
//   continue;
// }
// x = x+1;
// }
// parth int до чесла
// part float до пайтон учи иди
// const arr = [1,'Hello',3,[NaN,false],{a:1}];
// console.log(arr[3],[4])
// console.log(arr[arr.indexOf("ножницы")]); знач
// console.log(arr.indexOf("ножницы")); номер
// console.log(arr[randomNumber]);


// console.log(arr[randomNumber]);
// console.log(arr[randomNumber]);

// const arr = ["ножиці", "папір", "людина", "колодязь", "вовк","камінь","пістолет"];

// let userChoise;
// while (userChoise !== null) {
//   const randomNumber = Math.round(Math.random() * (arr.length - 1));
// let computersChoice = arr[randomNumber];
// // alert(computersChoice,arr[randomNumber]);
//  userChoise = prompt("Це гра 'Камінь, ножиці, папір' з деякими змінами. Вибирай: камінь,ножиці,папір,людина,колодязь,вовк,пістолет.");
// if (arr.indexOf(userChoise) === arr.indexOf(computersChoice)) {
//   alert(`Ніхто не програв і не виграв. Бо ви з комп'ютером вибрали ${(arr[randomNumber])}.`);
// } else if (userChoise == "камінь") {
//   if (computersChoice == "папір" || computersChoice =="колодязь") {
//     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
//   } else {
//     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
//   }
// } else if (userChoise == "ножиці") {
//   if (computersChoice == "камінь" || computersChoice =="людина" || computersChoice =="вовк" || computersChoice =="колодязь") {
//     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
//   } else {
//     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
//   }
// } else if (userChoise == "папір") {
//   if (computersChoice == "ножиці" || computersChoice == "людина" || computersChoice =="вовк") {
//     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
//   } else {
//     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
//   }
// } else if (userChoise == "людина") {
//   if (computersChoice == "вовк" || computersChoice =="камінь" || computersChoice =="колодязь") {
//     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
//   } else {
//     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
//   }
// } else if (userChoise == "колодязь") {
//   if (computersChoice == "папір") {
//     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
//   } else {
//     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
//   }
// } else if (userChoise == "вовк") {
//   if (computersChoice =="камінь" || computersChoice =="колодязь") {
//     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
//   } else {
//     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
//   } 
// } else if (userChoise == "пістолет") {
//   if (computersChoice =="камінь" || computersChoice =="колодязь") {
//     alert(`Ти програв, бо комп'ютер вибрав ${arr[randomNumber]}.`);
//   } else {
//     alert(`Ти виграв, бо обрав ${userChoise}, а коп'ютер вибрав ${arr[randomNumber]}.`);
//   }
// } else if(userChoise == null){
//         break;
//  }else {
//   alert("Спробуй ще раз! Бо ти неправильно вів значення!");
// }
// }
//------------------------------масиви
// let arr = ["dog","frog","lion","elephant","raccoon"];

// for(let i = 0; 1<arr.length; i++) {

//   console.log(`${arr[1]} animal is ${i+1} in line`)
// }
// let i = 0;
// for(let el of arr) {
//   console.log(`${el} is ${i+1}`);
//   i++
// }
// for(let el of arr) {
//   if(el == "lion"){
//     continue;
//   }
//   console.log(el);

// }

//_______________________________________________________ = присвоєння
// let a = 1;
// let b = a;



// console.log()

//________________________________________________________
// let obj = {a:1};
// let obj2 = obj;
// obj.a = 2;
// obj.a = 4;
// console.log(obj2);

// console.log([1,2,3][0] == [1,2,3][0]);
// console.log(obj)

//___________________________________________________________Palindrom
// let str = "tenet";

// let arrOfSymbols = str.split("");
// let reversedArr = arrOfSymbols.reverse();
// let newStr = reversedArr.join("");

// console.log(newStr.toLowerCase==str.toLowerCase)

//________________________________________________________________
// let obj = {};
// let arr = [1,2,3,4,5,6,7,obj];
// console.log(arr.indexOf());
// let arr = ["dog","frog","lion","elephant","raccoon"];
// // arr.push("cat");
// // arr.pop();
// // arr.unshift("cat");
// // arr.shift();



// // // console.log(arr);
// // let arrCopy = arr.slice();

// // console.log(arrCopy);

// arr.splice(3,0,"cat","worn");
// //arr.splice(3,1);
// let cat = arr.splice(3,1,"snake");
// console.log(arr);
// console.log(cat)

//________________________________________________________________

// let arr = [1,2,3];
// let arr2 = [4,5,6];

// let arr3 = arr.concat(arr2);
// console.log(arr3);
// let str = prompt("Перевфрка на паліндром");

// let arrOfSymbols = str.split("");
// let reversedArr = arrOfSymbols.reverse();
// let newStr = reversedArr.join("");

// console.log(newStr.toLowerCase==str.toLowerCase)
// function checkPakindrom(str) {
//     return str == str.split('').reverse().join('');
// }
// let userWord;
// while(userWord!==null){
// userWord = prompt("Перевірка на паліндром");
// let lowerWord = userWord.toLowerCase();
// if(checkPakindrom(lowerWord) == true) {
// alert("Це паліндром")
// }else {
//     alert("Це не паліндром")
// }
// }
//____________________________________________
// let key ="a";
// const obj = {
// artem:1,
// b:2,
// c:3,
// key:4,
// null:null
// };
// console.log(obj.null)
const salary = {
    Ann: 100,
    John: 100,
    Dereck: 80,
    Li: 110
}
// let sum = 0;
// for(let key in salary){
//     console.log(key,salary[key])
// sum+=salary[key];
// }
// let max = 0;
// let basEmployer = '';
// for(let key in salary) {
//     if(max<salary[key]) {
//         max = salary[key];
//         basEmployer = key;
//     }
// }
// console.log(basEmployer)
// console.log(Object.entries(salary));
//__________--------------------________________-- function
// const fn = function(a=1,b=1,c){
// console.log(a+b)
// return a  +b 
// };
// fn(1,2)
// fn(3,4)

//---
// function fn2() {

// }
// //------
// const fn3 = () => {}
// //-----
// (()=>{})();


//============---------=======
// const obj = {
//     a:1,
//     b:2,
//     sum: function(){
//         obj.c = obj.a+obj.b
//     }
// }
// obj.sum();
// console.log(obj);

let operationsList = ["множення", "ділення", "віднімання", "додавання","факторіал","возвести в степінь","рандом"];
let operation ;
while(operation !== null ) {
operation = prompt("Операція множення,ділення,віднімання,додавання,факторіал,возвести в стень,рандом, Якщо це тільки факторіал ведіть а, якщо возвести степінь то а це число, а b це степінь");
let a = prompt("a", '');
let b = prompt("b", '');

const calculator = {

    sum: function (x, y) {

        alert(x + y)
    },

    min: function (x, y) {
        alert(x - y)
    },
    mul: function (x, y) {
        alert(x * y)
    },
    div: function (x, y) {
        if (y === 0) {
            alert("вы не можете делить на 0")
            return
        }
        alert(x / y)
    },
    fact: function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
      },
    step: function pow(x, n) {
        let result = x;
      
        for (let i = 1; i < n; i++) {
          result *= x;
        }
      
        return result;
      },
      ran: function random(x,y) {
        function randomInteger(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
          }
        return randomInteger(x, y)
      },
      
}
if (operation == operationsList[3]) {
    calculator.sum(a, b)
} 
else if (operation == operationsList[2]) {
    calculator.min(a, b)
} else if (operation == operationsList[0]) {
    calculator.div(a, b)
} else if(operation == operationsList[4]){
    if (a !== null){
    alert(calculator.fact(a))
    } else if (b !== null) {
    alert(calculator.fact(b))
    } else {
    alert("Ведіть значенння")
    }
}
else if(operation == operationsList[5]) {
    if (b < 1) {
        alert(1);
      } else {
        alert( calculator.step(a, b) );
      }
} 
else if(operation == operationsList[6]) {
alert(calculator.ran(a,b));
}
else if(operation == operationsList[0]) {
    calculator.mul(a, b)
}
else {
    console.error("Не ведено математитчної дії");
    alert("Ви не вели математитчної дії");
}
}
  
// const expression = function(){
// console.log('expession')
//   }; 

//   function declaration() {
// console.log('declaration')
//  }
//===============----------------------------------------
// const fn = function(a, ...myArgs) {
//     // console.log([...arguments])
// let result = []
//     for(let el of myArgs) {
//     result.push(el*a)
// }
// return result
// }

// console.log(fn(9,2,3,4,5,6));
// let arr  = [1,2,3,4,6]
// const max  = Math.max(...arr)
// console.log(max)
//=-=-=--------------------------------------======
// let a = {
//     b:1,
//     c:1,
// }
// let d = {
//     e:1,
//     f:1,
//     c:2,
// }
// let q = {...a,m:343, ...d};
// console.log(q)
//------------------------------------------
// let a = [1,23,4]
// let a2 = [2,5,1]
// let a3  =[... a.slice(0,2),'Helli',...a2.slice(0,2)]
// console.log(a3)
//-------------------=============-----------
// const worker = {
//     name:"Noob",
//     salaryPerHour:1000000000000000000,
//     workerHours:1,
//     penalty:500000,
// }
// const salaryCount = function({name, salaryPerHour,workerHours,penalty = 0}) {
// return `Worker ${name} has got ${salaryPerHour*workerHours-penalty}grn. `
// }
// console.log(salaryCount(worker));
//----------------=================----------
// const higherOrderFn = function() {
//     return `Hello ${callback}`
// }
// const callback = function() {
// return prompt("Enter your name")
// }
// console.log(higherOrderFn(callback))
