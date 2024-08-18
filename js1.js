// /*
// //1.
// console.log("HII");
// console.log("HII");
// console.log(`HII`);

// window.alert("hii!");

// document.getElementById("myid1").textContent = "hello myid1";
// */

// //2.variable
// /*
//     12x - 3 = 4
//     12 -> coefficient
//     x  -> variable
//     3,4-> constants

//     1.declaration let x;
//     2.assignment x=10;
// */
// //3.data type:
// /*

// let a = 20;
// let b = 173.22;
// let c = "lokesh";
// let d = true;
// let f;
// let e = console.log(`my self ${c} ${a} old, height is ${b}`);
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof f);

// */

// //---------------------------------------------------------------------------------------------------

// //-Arithemetic operators == operands(value,variable,),operators(+,-,*,%,/)
// let a = 3;
// a = a + 2; // 5
// a = a - 2; // 3
// a = a * 2; // 6
// a = a / 2; // 3
// a = a % 2; // 1
// console.log(a);

// let b = 4 ** 2;
// // 4*1*4*4
// let c = 3 * 2;
// console.log(b, c);

// //operator precedence
// /*
//     1.parenthesis()
//     2.exponents
//     3.modulo
//     4.division
//     5.multiplication
//     6.addition
//     7.subration
// */
// //---------------------------------------------------------------------------------------------------

// // two way to  ascept user input
// //1.input tag
// // document.getElementById("mysubmit1").onclick = function () {
// //   let username = document.getElementById("input1").value;
// //   document.getElementById("inputh1").textContent = username;
// // };
// //2.window prompt:
// // let username = window.prompt("Enter your name");
// // window.alert("Hii " + username);
// // console.log(username);

// //---------------------------------------------------------------------------------------------------

// // type conversion change one datatype to another datatype:
// // let age = window.prompt("Enter your age");
// // age = Number(age);
// // age += 1;
// // window.alert(age + " " + typeof age);

// let x = "lokesh";
// let y = "lokesh";
// let z = "lokesh";
// x = Number(x);
// y = String(y);
// z = Boolean(z);
// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

// let x1 = "0";
// let y1 = "0";
// let z1 = "0"; //0 false 1 true
// x1 = Number(x1);
// y1 = String(y1);
// z1 = Boolean(z1);
// console.log(x1, typeof x1);
// console.log(y1, typeof y1);
// console.log(z1, typeof z1);

// let x2;
// let y2;
// let z2; //0 false 1 true
// x2 = Number(x2);
// y2 = String(y2);
// z2 = Boolean(z2);
// console.log(x2, typeof x2);
// console.log(y2, typeof y2);
// console.log(z2, typeof z2);

// //---------------------------------------------------------------------------------------------------

// // const a vaariable that can't be changed value
// const PI = 3.141;
// console.log(2 * PI * 2);

// document.getElementById("mysubmit2").onclick = function () {
//   let radius = document.getElementById("input2").value;
//   radius = Number(radius);
//   document.getElementById("reslut1").textContent = 2 * PI * radius;
// };

// //---------------------------------------------------------------------------------------------------

// //counter program:
// let display = document.getElementById("display1");
// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");
// let counter = 0;
// btn1.onclick = function () {
//   counter++;
//   display.textContent = counter;
// };
// btn2.onclick = function () {
//   counter = 0;
//   display.textContent = counter;
// };
// btn3.onclick = function () {
//   counter--;
//   display.textContent = counter;
// };

// //---------------------------------------------------------------------------------------------------

// //math built-in object that provides a collection of properties and method

// let x3 = 3.4;
// let y3 = 3.5;
// let z3 = 3.9;

// console.log("-------round-------");
// console.log(Math.round(x3));
// console.log(Math.round(y3));
// console.log(Math.round(z3));

// console.log("-------floor-------");
// console.log(Math.floor(x3));
// console.log(Math.floor(y3));
// console.log(Math.floor(z3));

// console.log("-------ceil-------");
// console.log(Math.ceil(x3));
// console.log(Math.ceil(y3));
// console.log(Math.ceil(z3));

// console.log(Math.trunc(23.33));
// console.log(Math.sqrt(2, 3));
// console.log(Math.abs(-1));

// console.log(Math.sign(-12));
// console.log(Math.sign(12));
// console.log(Math.sign(0));

// console.log(Math.min(1, 2));
// console.log(Math.max(1, 2));
// console.log(Math.round(Math.log10(12345) + 1));

// //---------------------------------------------------------------------------------------------------

// //random number generate;

// console.log("--------random number----------");
// let min = 50;
// let max = 100;
// let num2 = Math.floor(Math.random() * (max - min) + min);
// console.log(num2);

// document.getElementById("randombtn").onclick = function () {
//   let num2 = Math.floor(Math.random() * (max - min) + min);
//   document.getElementById("randomcontent").textContent = num2;
// };

// //---------------------------------------------------------------------------------------------------
// // if codition:
// console.log("IF condition: ");
// let age = 25;
// if (age >= 18) {
//   console.log("Eligble");
// } else {
//   console.log("not eligible");
// }

// //--------------------------------------------------------------------------------------------------
// //voter
// let btnage = document.getElementById("btnage");
// let displayage = document.getElementById("displayage");
// let inputage = document.getElementById("inputage");
// btnage.onclick = function () {
//   let str = inputage.value;
//   str = Number(str);
//   if (str >= 18) {
//     displayage.textContent = "Eligible";
//   } else {
//     displayage.textContent = "Not Eligible";
//   }
// };

// //---------------------------------------------------------------------------------------------------
// //checked property that determines the checked state of an html checkbox or ratio button elements
// let mycheckbox = document.getElementById("checkbox1");
// let r1 = document.getElementById("ratio1");
// let r2 = document.getElementById("ratio2");
// let r3 = document.getElementById("ratio3");
// let all_single_btn = document.getElementById("ration_btn");
// let ratio_r1 = document.getElementById("ratio_r1");
// let ratio_r2 = document.getElementById("ratio_r2");
// all_single_btn.onclick = function () {
//   if (mycheckbox.checked) {
//     ratio_r1.textContent = "select checkbox";
//   } else {
//     ratio_r1.textContent = "unselect checkbox";
//   }

//   if (r1.checked) {
//     ratio_r2.textContent = "select ratio btn on ece";
//   } else if (r2.checked) {
//     ratio_r2.textContent = "select ratio btn on eee";
//   } else if (r3.checked) {
//     ratio_r2.textContent = "select ration btn on mech";
//   } else {
//     ratio_r2.textContent = "unselected dept.";
//   }
// };

// //---------------------------------------------------------------------------------------------------

// // ternary operator
// let aa = 12;
// let bb = "12";
// console.log(aa == bb ? "YES" : "NO");

// //switch case:
// let ages = 20;
// switch (true) {
//   case age <= 0:
//     console.log("ages is 0 ");
//     break;
//   case age <= 10:
//     console.log("ages is 10 ");
//     break;
//   case age <= 30:
//     console.log("ages is 20 ");
//     break;
// }

// //----------------------------------------string methods-------------------------------------------------
// console.log("-----------string methods-------");

// let string = "    TedTalks     ";
// console.log(string);
// string = string.trim();
// console.log("trim()-->" + string);

// console.log("charAt()-->" + string.charAt(0));

// console.log("indexOf()-->" + string.indexOf("T"));

// console.log("lastIndexOf()-->" + string.lastIndexOf("T"));

// console.log("toLowerCase()-->" + string.toLowerCase());

// console.log("toUpperCase()-->" + string.toUpperCase());

// console.log("startsWith()-->" + string.startsWith("T"));

// console.log("endsWith()-->" + string.endsWith("T"));

// console.log("includes()-->" + string.includes("L"));

// let string2 = "1223-2434--";
// string2 = string2.replaceAll("-", "");
// console.log("replaceAll()-->" + string2);

// string2 = string2.padStart(10, "0");
// console.log("padStart()-->" + string2);

// string2 = string2.padEnd(12, "0");
// console.log("padStart()-->" + string2);

// console.log("length()-->" + string.length);

// let string3 = "brocode";
// console.log("---String slice---");
// let string4 = string3.slice(0, 3);
// let string5 = string3.slice(3);
// let string6 = string3.slice(-2);
// console.log(string4);
// console.log(string5);
// console.log(string6);

// let string7 = "jlokesh@gmail.com";
// let string8 = string7.slice(0, string7.indexOf("@"));
// let string9 = string7.slice(string7.indexOf("@"));
// console.log(string8 + " " + string9);

// let string10 = "  lokesh";
// string10 =
//   string10.trim().charAt(0).toUpperCase() +
//   string10.trim().slice(1).toLowerCase();
// console.log(string10);

// //assignment operator
// let str1 = 3.14;
// let str2 = "3.14";

// console.log(str1 != str2); // not length only it's value
// console.log(str1 !== str2);
// console.log(str1 == str2);
// console.log(str1 === str2);

// //-----------------------------------loop----------------------------------------------------------------
// console.log("------while and dowhile loop");

// for (let i = 0; i <= 10; i++) {
//   console.log(i + " ");
// }

// //while loop
// // let usname = "";
// // while (usname === "") {
// //   usname = window.prompt("Enter your name");
// // }
// // console.log(usname);

// // dowhile loop
// // usname = "";
// // do {
// //   usname = window.prompt("Enter your name");
// // } while (usname === "");
// // console.log(usname);

// //------------------------function-------------------------------------------------
// console.log("-------function--------");

// function function1() {
//   console.log("Hiii");
// }
// function1();
// function function2(name, age) {
//   // parameter
//   console.log("Hiii " + name + " " + age);
// }
// function2("lokesh", 20); //arguments
// function function3(a, b) {
//   return a + b;
// }
// console.log(function3(2, 3));

// //-----------------------------------variable scope----------------------------------------------------------------
// // 1.local assces only with in a function
// // 2.global asscess any in the program

// let global = 0; // global variable
// function function3() {
//   let local = 100; // local variable
//   console.log(local);
//   global++;
// }
// console.log(global);

//----------------------------------- T to C----------------------------------------------------------------

/*
const TC_input = document.getElementById("TC_input");
const TC_radio1 = document.getElementById("TC_radio1");
const TC_radio2 = document.getElementById("TC_radio2");
const TC_result = document.getElementById("TC_result");
let temp;
function convert() {
  temp = Number(TC_input.value);
  if (TC_radio1.checked) {
    temp = (temp * 9) / 5 + 32;
    TC_result.textContent = temp.toFixed(2) + " F";
  } else if (TC_radio2.checked) {
    temp = ((temp - 32) * 5) / 9;
    TC_result.textContent = temp.toFixed(2) + " C";
  } else {
    TC_result.textContent = "rer cr";
  }
}
*/

//----------------------------------- array----------------------------------------------------------------
/*
console.log("---array---");
let array = [1, 2, 3, 3];
console.log(array[0]);
// for last elements
array.push("3");
console.log("push-->" + array);
array.pop();
console.log("pop-->" + array);

//for first elements
array.unshift("3");
console.log("unshift-->" + array);
array.shift();
console.log("shift-->" + array);

console.log("array-->" + array);
console.log("length-->" + array.length);
console.log("indexOf-->" + array.indexOf(3));
console.log("lastIndexOf-->" + array.lastIndexOf(3));

let string = "";
for (let temp of array) {
  string += String(temp + "-");
}
console.log(string);

array.reverse().reverse();
console.log("sort & reverse ---> " + array);

//spread oprator: allows to iterable
let array2 = [1, 2, 3, 4, 4243, 234, 234, 2, 342, 35];
console.log("max of array() ---> " + Math.max(...array2));
console.log("min of array() ---> " + Math.min(...array2));

let array3 = "LOKESH";
console.log("join() ---> " + [...array3].join(" "));
console.log(array3);

let temp1 = [...array3];
console.log("copy of array3 ---> " + temp1);

let temp2 = [...array, "---", ...array2, "---", ...array3];
console.log(temp2 + " 😊");

let a = "lokesh";
let b = "arun";
let c = "santhosh";
let d = "rams";
let e = "valls";
function fn1(...overall) {
  console.log(overall);
}
function fn2(...overall) {
  return overall;
}
fn1(a, b, c, d, e, a);
console.log(fn2(a, b, c, d, e, a));

//sum of n number
function sum(...arr) {
  let sum = 0;
  for (let t of arr) {
    sum += t;
  }
  return sum;
}
console.log(sum(1, 2, 2, 343, 5, 4545));

//string
function stringfn(...temp) {
  return temp.join("_");
}
console.log(stringfn("lofjg", "gf", "dfgdtr", "trg", "ge"));
*/

//--------------------------------dices-----------------------------------------

/*
function rolldice() {
  const diceinput = document.getElementById("diceinput").value;
  const diceResult = document.getElementById("diceResult");
  const diceImgages = document.getElementById("diceImgages");
  const value = [];
  const image = [];
  let total = 0;
  for (let i = 0; i < diceinput; i++) {
    // 1 to 6;
    const temp = Math.floor(Math.random() * 6) + 1;
    total += temp;
    value.push(temp);
    image.push(`<img src="img/${temp}.png">`);
  }
  diceResult.textContent = "dices:" + value.join(",") + "=" + total;
  diceImgages.innerHTML = image.join(" ");
}
*/
//-----------------------------random password generator------------------------------------
/*
function RandomPasword(d, uc, lc, sc, passwordlength) {
  let digits = '1234567890';
  let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let lowercase = 'abcdefghijklmnopqrstuvwxyz';
  let specialchar = '`!@#$%^&*';
  let str1 = '',
    str2 = '';
  str1 += d ? digits : '';
  str1 += uc ? uppercase : '';
  str1 += lc ? lowercase : '';
  str1 += sc ? specialchar : '';
  for (let i = 0; i < passwordlength; i++) {
    let temp = Math.floor(Math.random() * str1.length);
    str2 += str1[temp];
  }
  return str2;
}
let d = true;
let uc = true;
let lc = true;
let sc = true;
let passwordlength = 12;
console.log(RandomPasword(d, uc, lc, sc, passwordlength));
*/
// let str = '';
// for (let i = 0; i <=128; i++) {
//   str += String.fromCharCode(i + 97);
// }
// console.log(str + ' ');

//-------------------------callback------------------------
 // callback a function to passed the argument to another function is know as a callback function.
/*
hello();
bye();  
function hello()
{
   setTimeout(function() {console.log("hii");},3000)   // 3ms
}
function bye()
{
  console.log("bye...");
}
*/

/*
one(two);
function one(twooo)
{
  console.log("hii one");
  twooo();
}
function two()
{
  console.log("hii two");
}
*/

/*
sum(print,12312,1);
function sum(print,a,b)
{
  let reslut = a+b;
  print(reslut);
}
function print(reslutt)
{
  console.log(reslutt);
}
*/
//----------------------------------forEach()------------------------------------------------------------
// forEach is automatic to create element,index,array arr provided

/*
let num = [12,2,32,234,234];
console.log(num);
num.forEach(addby1);
console.log(num);
num.forEach(addby2);
console.log(num);
num.forEach(print)

function print(elementsss)
{
  console.log(elementsss+" ");
}
function addby1(element,indexx,arr)
{
  arr[indexx]=element+1;
}

function addby2(element,indexx,arr)
{
  arr[indexx]=element+2;
}

*/
// toupper,lower,camilcase
/*
let str = ["lare","errvrsg","Etrf","Erhfsx"];
str.forEach(touppercase);
console.log(str);

str.forEach(tolowercase);
console.log(str);

str.forEach(tocamilcase);
console.log(str);

function touppercase(e,i,arr)
{
  arr[i]=e.toUpperCase();
}
function tolowercase(e,i,arr)
{
  arr[i]=e.toLowerCase();
}
function tocamilcase(e,i,arr)
{
  arr[i]=e.charAt(0).toUpperCase()+e.slice(1).toLowerCase();
}
*/
//--------------------------------------------map-----------------------------------

// map accepts a callback and appplies that function to each element of array,then return a new array
// forEacj methods elements will be change but map is a possible


/*
let arr1= [1,2,3,4,5];
let arr2=arr1.map(square);
console.log(arr1);
console.log(arr2);
function square(element)
{
  return Math.pow(element,2);
}

let str = ["lare","errvrsg","Etrf","Erhfsx"];
let str1=str.map(touppercase);
console.log(str1);
let str2=str.map(tolowercase);
console.log(str2);
function touppercase(e)
{
  return e.toUpperCase()+" J";
}
function tolowercase(e,i,arr)
{
  return e.toLowerCase()+" J";
}


let date =["01-12-23","23-01-24","24-01-02"];
let date1=date.map(forDate);
console.log(date);
console.log(date1);
function forDate(element)
{
  let temp = element.split("-");
  return `${temp[0]}/${temp[1]}/${temp[2]}`;
}

*/
//----------------------------------filter()----------------------------------------------
// filter creates a new array by filtering out element

/*
let arr=[1,2,3,4,6,7,8];
let evenArr=arr.filter(iseven);
console.log(arr);
console.log(evenArr);
let oddArr=arr.filter(isodd);
console.log(oddArr);
console.log(arr);
function iseven(element)
{
  return element%2===0;
}
function isodd(element)
{
  return element%2===1;
}
*/

/*
let arr1=["loekd","ojreg","ert","er","e"];
let str1=arr1.filter(issorton);
console.log(str1);
function issorton(e)
{
  return e.length>=2;
}
*/

//------------------------------------reduce()---------------------------------------------------------------
// reduce method reduce the elements of an array to single value

/*
let arr1=[23,23,423,25,245,26,26];
console.log(arr1.reduce(red));
console.log(arr1.reduce(getMax));

//accumulator is data storing registor it contains 0 at start point
function red(accumulator,element)
{
  return accumulator+element;
}

function getMax(accumulator,element)
{
  return Math.max(accumulator,element);
}
*/

//---------------------------------------------function------------------------------------------------------
/*  
    function declaration define a reusable block of code that perform a specific task
    function expressions  a way to define function as value or variables
*/

/*
// function declaration
function hello()
{
  console.log("Hii....");
}
hello();
//function expressions
let hii=function()
{
  console.log("hii..");
  console.log("everyone");
}

// function declaration
const num1 = [1,2,3,5,7,8];

const num2 = num1.map(square);
console.log(num2);
function square(e)
{
  return Math.pow(e,2);
}
//function expressions
const num3 = num1.map(function(e)
{
  return Math.pow(e,3);
});
console.log(num3);
const num4 = num1.filter(function(e)
{
  return e%2==0;
});
console.log(num4);

const num5 = num4.reduce(function(a,e)
{
  return a+e;
});
console.log(num5);
*/


//---------------------------------------arraow function--------------------------------------------------------------
/*
const hello1 = function()
{
  console.log("hii1");
}
hello1();

const hello2 = (name,age)=>console.log(`hii2 ${name} ${age}`);
hello2("lokesh",20);

const hello3 = (name,age)=>
{
  console.log(`hii ${name}`);
  console.log(`age is ${age}`);
}
hello3("lokesh",20);

//delay
setTimeout(()=>console.log("hii"),4000);
//methods

const arr=[1,2,3,4,5,6];
const sqr=arr.map((e)=>Math.pow(e,2));
const even_number=arr.filter((e)=>e%2==0);
const sum_of_all=arr.reduce((a,e)=>a+e);

console.log(sqr);
console.log(even_number);
console.log(sum_of_all);
*/

//---------------------------------------Object--------------------------------------------------------------
/*
  A Collection of related properties and/or methods 
  Can represen real world objects(people,product,places)
  object = {key:value,function()}
*/

/*
let person1 =
{
  firstname : "lokesh",
  lastname : "J",
  age : 20,
  isEmployed : false,
  salary:"3cr",
  greeting : function(){console.log("hiii");console.log("everyone");},
}
console.log(person1.firstname);
person1.greeting();
*/
//-----------------------------this reference to the object------------------------------

// this keyword can't work with arrow function
/*
const person ={
  name:"lokesh",
  std:"VII",
  selfIntro1:function(){console.log(`hii ${this.name}`);},
  selfIntro2:function(){console.log(`hii ${person.name}`);}
}
person.selfIntro1();
person.selfIntro2();
*/
//-----------------------------constructors------------------------------
// special methods for defining the properties and mehods of objects

/*
function Car(model,colour,year,price)  // mehtod
{
  this.model=model,
  this.colour=colour,
  this.year=year,
  this.price=price
  this.drive=function(){console.log("this car all for 18+");}
}
let car1 = new Car("Tesla1406","Black",2034,"75L");  // object creation
let car2 = new Car("TATA","Black",2034,"75L");
let car3 = new Car("KIA","Black",2034,"75L");
console.log(car1.model);
console.log(car1.colour);
car1.drive();

console.log(car2.model);
console.log(car2.colour);
car2.drive();
*/ 
//-----------------------------class----------------------------------
//class ES6 feature provides a more structured and clear way to work with objects compared to 
// traditional constructor function ex.static keyword,encapsulation,inheritance
/*
class Product{ //class
  constructor(name,age) //constructoes
  {
    this.name=name;
    this.age=age;
  }
  display()  // methods
  {
    console.log(this.name);
    console.log(this.age.toFixed(3));
  }
  sub(year)
  {
    return 2024-year;
  }
}
let product1 = new Product("lokesh",20);
console.log(product1.name);
product1.display();
console.log(product1.sub(2004));
 */
//-------------------------------static---------------------------------------------------
//keyword that defines properties or methods that belong to class itself rather than the object created
// from that class(class owns anything static,not the objects)
 
/*
class Class
{
  static PI = 3.14;
  static getDiameter(r)
  {
    return r*2;
  }
  static getCircumference(r)
  {
    return 2*this.PI*r;
  }
  static getArea(r)
  {
    return this.PI*r*r;
  }
  static display()
  {
    console.log(this.PI);
  }
}
//can' t creat object to use the class
console.log(Class.PI);
console.log(Class.getDiameter(3));
console.log(Class.getCircumference(3));
console.log(Class.getArea(3));
Class.display();
*/
//user count:
/*
class USER 
{
  static ctr=0;
  constructor(username)
  {
    this.username=username;
    USER.ctr++;
  } 
  sayHello()
  {
    console.log(`Hii ${this.username}`);
  }
  static sayHello1()
  {
    console.log(`Hii ${this.ctr}`);
  }
}
let u1=new USER("LOKESH");
console.log(USER.ctr);
u1.sayHello();
let u2=new USER("LOKESH");
console.log(USER.ctr);
USER.sayHello1();
*/
//--------------------------inheritance---------------------------------------
// allows aneew class to inherit properties and methods form an existing class(parent->child)
//helps with code reusability
/*
class Animal
{
  alive = true;
  eat()
  {
    console.log(`this ${this.name} is eating`);
  }
  sleeping()
  {
    console.log(`this ${this.name} is sleeping`);
  }
}
class dog extends Animal
{
  name="LEO";
  run()
  {
    console.log(`${this.name} running`);
  }
}
class fish extends Animal
{
  name="FIP";
  swim()
  {
    console.log(`${this.name} swimming`);
  }
}
let DOG = new dog()
console.log(DOG.alive);
DOG.eat();
DOG.sleeping();
DOG.run();

let FISH = new fish()
FISH.alive=false;
console.log(FISH.alive);
FISH.eat();
FISH.sleeping();
FISH.swim();

*/
//----------------------------super----------------------------------------
//keyword is used in classes to call the constructor or access the properties and
// methods of parent (superclass)
/*
class Animal
{
  constructor(name,age) {
    this.name=name;
    this.age=age;
  }
  NAME()
  {
    console.log(`${this.name}`);
  }
  SPEED(speed)
  {
    console.log(`speed is : ${speed}`);
  }  
}
class dog extends Animal
{
  constructor(name,age,speed)
  {
    super(name,age); //share the consturctor to parent class
    this.speed=speed;
  }
  SPEED()
  {
    super.SPEED(this.speed);
    console.log(`${this.speed}`);
  }
}
class fish extends Animal
{
  constructor(name,age,swim)
  {
    super(name,age);
    this.swim=swim;
  }
  SWIM()
  {
    super.SPEED(this.swim);
    console.log(`${this.swim}`);
  }
}
let dog1 = new dog("leo",2,23);
console.log(dog1.name);
dog1.NAME();
dog1.SPEED();

console.log("----------");

let fish1 = new fish("Ted",2,3000);
console.log(fish1.name);
fish1.NAME();
fish1.SWIM();
*/

//-----------------------getter/setter----------------------------------------------------------
//getter = special method that makes a property reable
//setter = special method that makes a property writeable
// validate and modify a value when reading/writing a property
/*
class Rectangle
{
  constructor(width,height)
  {
    this.width=width;
    this.height=height;
  }
  set width(newwidth)
  {
    if(newwidth>0)
    {
      this._width = newwidth ;// _ means private the data
    }
    else 
    {
      console.error("plese enter positive number1");
    }
  }
  set height(newheight)
  {
    if(newheight>0)
    {
      this._height = newheight ;// _ means private the data
    }
    else 
    {
      console.error("plese enter positive number2");
    }
  }
  get width()
  {
    return this._width;
  }
  get height()
  {
    return this._height;
  }
  get area()
  {
    return this._width*this._height;
  }
}
let r1 = new Rectangle(-1223,"lokr");
console.log(r1.width);
console.log(r1.height);

let r2 = new Rectangle("123",123);// but if(n>0) act is a number
console.log(r2.width+" "+typeof r2.width);
console.log(r2.height+" "+typeof r2.height);

r2.width=200;
r2.height=213;
console.log(r2.width);
console.log(r2.height);
console.log(r2.area);
*/
//example
/*
class person
{
  constructor(Fname,Age)
  {
    this.Fname=Fname;
    this.Age=Age;
  }
  set Fname(newFname)
  {
    if(typeof newFname==="string" && newFname.length>1)
    {
      this._Fname = newFname;
    }
    else
    {
      console.error("Enter valid name");
    }
  }
  set Age(newAge)
  {
    if(typeof newAge==="number"&&newAge>0)
    {
      this._Age = newAge;
    }
    else
    {
      console.error("Enter valid age");
    }
  }
  get details()
  {
    return `hii myself ${this._Fname} ${this._Age} year old`;
  }
}
let p1=new person(12,"12");

let p2=new person("LOKESH",20);
console.log(p2.details);
*/
//-------------------------------destructuring----------------------------------------
/*
    extract value form arrays and object,then assign them to variable in a convenient way
    []= to perform array destructuring
    {}= to perform object destructuring
*/
/*
//1.swap the value of two variable
console.log("1.swap the value of two variable");
let a=1;
let b=2;
//destructur=array
[a,b]=[b,a];
console.log(a,b);

//2.swap the value of two array
console.log("2.swap the value of two array");
let arr =["123","32","12345","12343"];
[arr[0],arr[3]]=[arr[3],arr[0]];
console.log(arr);

//3.assign array element to variable
console.log("3.assign array element to variable");
let arr1=["23","234","24","2234","3456"];
let [f,s,t,...remaing]=arr1;
console.log(f);
console.log(s);
console.log(t);
console.log(remaing);

//4.extract value from objects
let person1 =
{
  fname:"lokesh",
  lname:"J",
  age:20,
  job:"stuudent",
}
let person2 =
{
  fname:"vasu",
  lname:"K",
  age:21,
}
//method 1 using only one person
let {fname1,lname,age,job="unemploye"}=person1;
console.log(fname1,lname,age,job);

//5.destructuring in function parameters:
//method 2 using many person using fuction
console.log("5.destructuring in function parameters:");
function display({fname,lname,age,job="unemploye"})
{
  console.log(fname,lname,age,job);
}
display(person1);
display(person2);
*/
//-------------------------------------nested objects------------------------------------
/*
    object inside of other objects
    allows you to represent more complex data structures
    child object is enclosed by a parent object
    ex:
      person{address{},contactInfo{},about{}}
*/ 

//method 1
/*
let person =
{
  fname:"lokesh",
  age:20,
  employe:true,
  hobbies:["photography","cricket","swimming"], //array
  address: // object
  {
    streetNum:"1/48",
    streetName:"market street",
    city:"sholinghur",
    district:"ranipet",
    pincode:631102,
  }
}
console.log(person.fname);
console.log(person.hobbies);
console.log(person.hobbies[1]);

console.log(person.address);
console.log(person.address.district);
for(let i in person.address)
{
  console.log(person.address[i]);
}
*/
// method 2
/*
class person
{
  constructor(name,age,...address)
  {
    this.name=name;
    this.age=age;
    this.address= new Address(...address);
  }
}
class Address
{
  constructor(street,city,country)
  {
    this.street=street;
    this.city=city;
    this.country=country;
  }
}
let person1 = new person("lokesh",20,"1/48,market st","sholinghur","india");
let person2 = new person("vasu",30,"1/49,market st","sholinghur","india");
let person3 = new person("prem",40,"1/20,market st","sholinghur","india");
console.log(person1.name);
console.log(person1.address.street);
console.log(person2.name);
console.log(person2.address.street);
*/
//-------------------------------------array objects------------------------------------

/*
let persons = [{name:"lokesh",age:20,sw_hw:"sw"},
               {name:"arun",age:21,sw_hw:"sw"},
               {name:"vimal",age:20,sw_hw:"hw"},
               {name:"vallvan",age:21,sw_hw:"hw"}];

persons.push({name:"arun",age:21,sw_hw:"sw"});
persons.pop();
console.log(persons);

console.log(persons.slice(0,3));

console.log(persons[0].name,persons[0].sw_hw);
console.log(persons[2].name,persons[2].sw_hw);
//forEach
console.log("forEach method:");
persons.forEach(temp=>console.log(temp.name));

console.log("map method:");
let map = persons.map(temp=>temp.name);
console.log(map);

console.log("filter method:");
let filter = persons.filter(temp=>temp.age>20);
console.log(filter);

console.log("reduce method:");
let max = persons.reduce((max,temp)=>temp.age>max.age?temp:max);
console.log(max);

let min = persons.reduce((min,temp)=>temp.age<min.age?temp:min);
console.log(min);
*/
//--------------------------------------sort()-------------------------------------------------
/*
    sort() method used to sort elementsof an array in place
    sorts elements as string in lexicographic order,not alphabetical 
    lexicographic =(alphabet + number +symbols) as string
*/
/*
let arr1 =["lokes","loeijrcc","we","Car","acwer"];
arr1.sort();
console.log(arr1);


let arr2 =[2,3,42,235,124,1,1000,100];
arr2.sort();
console.log(arr2);  
// decerement
arr2.sort((a,b)=>b-a);
console.log(arr2);  
//increment 
arr2.sort((a,b)=>a-b);
console.log(arr2);   

let arr3=["adfs","sget","egx",2,"234c2","2c3","weq"];
arr3.sort();
console.log(arr3);

let persons = [
               {name:"lokesh",age:20,gpa:7.52},
               {name:"arun",age:21,gpa:7.77},
               {name:"vallvan",age:21,gpa:8.9},
               {name:"vimal",age:20,gpa:8.55},
              ];
persons.sort();
console.log(persons);

console.log("decerement:");
persons.sort((a,b)=>a.gpa-b.gpa);
console.log(persons);

console.log("increment:");
persons.sort((a,b)=>b.gpa-a.gpa);
console.log(persons);

let cards=['A',2,3,4,5,6,7,8,9,10,'J','K','Q'];
cards.sort(()=>Math.random()-0.5);
console.log(cards);
*/
//--------------------------------------data object-------------------------------------------------
// date object that contains value that represent dates and times
// these date object can be changed and formatted
/*
const date1 = new Date();
console.log(date1); //Fri Apr 19 2024 17:52:13 GMT+0530 (India Standard Time) 

//Date(year,month,day,hour,min,sec,ms)
const date2 = new Date(2004,6,0,5,53,3);//Wed Jun 30 2004 05:53:03 GMT+0530 (India Standard Time)
console.log(date2); 

const date3 = new Date("2024-01-03T12:00:00Z");
console.log(date3); 

// sec to time
const date4 = new Date(123456789);
console.log(date4); 

const date5 = new Date();
let getFullYear = date5.getFullYear();
let getMonth = date5.getMonth(); 
let getDate = date5.getDate();
let getHours = date5.getHours(); 
let getMinutes = date5.getMinutes();
let getSeconds = date5.getSeconds();
let getDay = date5.getDay();

console.log(getFullYear,getMonth,getDate,getHours,getMinutes,getSeconds,getDay);

const date6 = new Date();
date6.setFullYear(2024);
date6.setMonth(3);
date6.setDate(19);
date6.setHours(18);
date6.setMinutes(3);
date6.setSeconds(42);
console.log(date6);

let data7=new Date("2023-12-31");
let data8=new Date("2022-12-22");
console.log(data7>data8?"YES":"NO");
*/
//----------------------------closure------------------------------------------------------
/*  
    closure a function defined inside of another function,
    the inner function has access to the variables
    and scope of the outer function
    allow for private variables and state maintenace
    used frequently in JS framework:react,angular
*/

//ex1
/*
  function outer()
  {
    let message = "hello"; //private variable
    function inner()
    {
      console.log(message);
    }
    inner();
  }
  message="hi";//because of message is private
  outer();
*/
//ex2
/*
function creatcounter()  
{
  let ctr=0;
  function increment()
  {
    ctr++;
    console.log("ctr : "+ctr);
  }
  function getctr()
  {
    return ctr;
  }
  return {increment,getctr};//object
}
let count = new creatcounter();
count.increment();
count.increment();
count.increment();

console.log("total count : "+count.getctr());
*/
//ex 3
/*
function creatGame()
{
  let score = 0;
  function incre(points)
  {
    score+=points;
    console.log("total Score: "+score);
  }
  function decre(points)
  {
    score-=points;
    console.log("total Score: "+score);
  }
  function getscore(points)
  {
    return score;
  }
  return {incre,decre,getscore};
}
let temp = new creatGame();
temp.incre(5);
temp.incre(15);
temp.decre(1);
temp.decre(3);
console.log("score "+temp.getscore());
*/

//-----------------------------------------------setTimeout()-----------------------------------------------------
/*
  function in js that allows you to schedule
  the excution of a function after an amount of time(milliseconds)
  time are approximate(varies based on the workload of the js runtime env.)
  setTimeout(callback,delay)
*/
//method 1
/*
function sayHello()
{
  window.alert('hello');
}
setTimeout(sayHello,3000);
*/
//method 2
//setTimeout(function(){window.alert("hiii");},3000);

//method 3
// let temp = setTimeout(()=>window.alert("hiii"),3000);
// clearTimeout(temp);

// timer on off in htm;
/*
let temp;
function starttimeout()
{
  temp=setTimeout(()=>window.alert("hii everyone"),3000);
  console.log("START");
}
function stop_clear_TimeOut()
{
  clearTimeout(temp);
}
*/

//------------------------------------clock------------------------------------------------------------

/*
function updateclock()
{
  let now = new Date();
  let h = now.getHours().toString().padStart(2,0);
  let m = now.getMinutes().toString().padStart(2,0);
  let s = now.getSeconds().toString().padStart(2,0);
  let apm=h>=12?"PM":"AM";
  h=h%12||12; // 1 to 12
  let timeString = `${h}:${m}:${s} ${apm}`;
  document.getElementById("clock").textContent = timeString;
}
updateclock();
setInterval(updateclock,1000);
*/
//------------------------------------stopwatch------------------------------------------------------------
 
/*
let display = document.getElementById("display");
 let timer = null;
 let startTime = 0;
 let elapsedTime = 0;
 let isRunning = false;
function start()
{
  if(!isRunning)
  {
    startTime = Date.now()-elapsedTime;
    timer = setInterval(update,10);
    isRunning=true;
  }
}
function stop()
{
  if(isRunning)
  {
    clearInterval(timer);
    elapsedTime = Data.now()-startTime;
    isRunning = false;
  }
}
function reset()
{
  clearInterval(timer);
  startTime=0;
  elapsedTime=0;
  isRunning = false;
  display.textContent="00:00:00:00"
}
function update()
{
  let currenTime = Date.now();
  elapsedTime = currenTime-startTime;

  let h = Math.floor(elapsedTime/(1000*60*60));
  let m = Math.floor(elapsedTime/(1000*60)%60);
  let s = Math.floor(elapsedTime/1000%60);
  let ms = Math.floor(elapsedTime%1000/10);

  h = h.toString().padStart(2,"0");
  m = m.toString().padStart(2,"0");
  s = s.toString().padStart(2,"0");
  ms = ms.toString().padStart(2,"0");

  display.textContent = `${h}:${m}:${s}:${ms}`;
}
*/

//-------------------------------------------------------------------------------------------------------
/*
  ES6 module - an external file that contains reusable code
               that can be imported into other js file
               write resusable code for many different app
               can contains variable,classess,function.. and more
               introduced as part of ECMAScript 2015 update
*/
import {PI,getCircumference,getArea,getVolume} from './math_lokesh.js';
console.log(PI);
console.log(getCircumference(2));
console.log(getArea(2));
console.log(getVolume(2));
