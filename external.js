let str1 = "lokesh";
if (str1 === "Lokesh") alert("YES");

console.log("TED");

// variable
let str2 = "LOKESH";
console.log(str2 == "lokesh");
console.log(str2 === "LOKESH");

let PI = 3.14;
console.log(PI);

//data type
/*
    value:
    there are two type:
        1.object
        2.primitive

    object:
    let a={name:"LOKESH"};

    primitive:
    let name="LOKESH";
    let age=12;

    primitive:
            1.number:
                let a=122;
            2.string:
                let b="LOKESH";
            3.boolean:
                let c=true;
            4.undefined:("empty  value")
                let d;
            5.null:
                empty value
            6.BigInt:
                larger Integer
            javascript auotmatically determined the data type
    
*/
console.log("DATA TYPE:");
let fun = true;
console.log(fun);
console.log(typeof fun);
console.log(typeof "LOKESH");
console.log(typeof 2);
console.log(typeof "LOKESH");

let a;
console.log(a);
console.log(typeof a);

console.log(typeof null); //the data type is not a object is bug in javascript is type of undefined value

/*--------------------------------------------------------------------------------------------------*/
/* 
    let & const,var:
        let value can mutable
        const value can unmutable
        var value can mutable same as a let
*/

console.log("let & const,var:");
let A = 12;
A = 2;
console.log(A);

// const BOD=2004;
// BOD=2003;
// console.log(BOD);

var B = 12;
B = 2;
console.log(B);

C = "LOKESH";
console.log(C);
console.log(typeof C);

/*--------------------------------------------------------------------------------------------------*/

/*
operator: 
*/

console.log("Math operator:");
const AGE = 2024 - 2004;
console.log(AGE);

const now = 2024;
const n1 = now - 2003;
const n2 = now - 2004;
console.log(n1, n2);

console.log(3 * 2, 3 / 2, 3 % 2, 2 ** 3);
// 2**3 means 2 to power of 3 = 2*2*2;

const n3 = "LOKESH";
const n4 = "JAYASEELAN";
console.log(n3 + " " + n4);

//assign operator:
console.log("assign operator:");
let x = 1 + 2;
x += 1;
console.log(x);
x++;
console.log(x++);
console.log(x);
x--;
console.log(x--);
console.log(x);

//comparison operator:
console.log("comparison operator:");
console.log(1 > 2);
console.log(1 < 2);
console.log(1 >= 2);
console.log(1 <= 2);

let n5 = 20;
console.log(18 <= n5);

let n6, n7;
n6 = n7 = 12 - 21 - 32;
console.log(n6, n7);
// right to left

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference

console.log(12 - 2);
//left to right

/*--------------------------------------------------------------------------------------------------*/

/*
    String and template Literals:

*/

console.log(`string:`);
console.log("string's");
console.log("string");
const n8 = "lokesh";
const n9 = 20;
console.log("i'm " + n8 + " " + n9 + " years old");

//template Literals
console.log(`i'm ${n8} ${n9} years old ${2024 - 2024}`);

console.log("lokesh \n ,\\ ,/ ,\\\", ' , \\\\");
let s1 = "I LOVE MY",
  s2 = "CONTRY";
console.log(s1.concat(s2));
console.log(s1.concat(" ", s2));
/*--------------------------------------------------------------------------------------------------*/

/*
    if/else statement:
*/
console.log("if/else statement:");
let n10 = 20;
if (n10 >= 18) {
  console.log("eligible for diving license 🚓🚗🚌");
  // emoji shortcut  windows + .
} else {
  console.log("not eligible for diving license");
}

/*--------------------------------------------------------------------------------------------------*/

/* 
    type conversion and coercion:
*/

//conversion: manualy conveted to one type to anthor type
// String to Number:
console.log(" String to Number:");
let n11 = "2004";
console.log(Number(n11) + 20, n11 + 20);

console.log(Number("LOKESH")); //NaN means (not a number)
console.log(typeof NaN);

// Number to String:
console.log("Number to String:");
let n12 = 12;
console.log(typeof n12);
n12 = String(n12);
console.log(typeof n12);

//coercion: automate conveted to one type to anthor type
let n13 = "LOKESH" + 20; //20 is convert to string
console.log(typeof n13);

console.log("String to number:");
console.log("22" - "10" - 1);
console.log("22" + "10" + 1); //String only
console.log("2" * "22");
console.log("2" / "22");
console.log("1" + 1 - 1);

/*--------------------------------------------------------------------------------------------------*/

/*
    truthy  and falsy values:
        five type of falsy values
        1.0
        2.''
        3.undefined
        4.null
        5.NaN
*/
console.log(" truthy  and falsy values:");
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(undefined));

let a1 = 0;
if (a1) {
  console.log(1);
} else {
  console.log(0);
}

let a2;
if (a2) {
  console.log("defined");
} else {
  console.log("undefined");
}

let a3 = "";
if (a3) {
  console.log("defined");
} else {
  console.log("undefined");
}

/*--------------------------------------------------------------------------------------------------*/

/*
    equality operators == or ===
*/
console.log("equality operators == or ===:");
console.log(18 == "18"); // (loose) different data type
console.log(18 === "18"); // (Strict) same data type

// prompt and alert input /output from the dilog box
/*
    let n=prompt("ENTER YOUR NAME?");
    let a4=prompt(`${n} ENTER YOUR AGE?`);
    if(a4>=18)
    {
        alert("eligible for voting");
    }
    else
    {
        alert("not eligible for voting");
    }
*/
/*--------------------------------------------------------------------------------------------------*/

/*
    boolean logic:
        and,or,not operators
        && ,||,!   operators
*/
console.log("boolean logic:");
console.log(true && true);
console.log(true && !false);
console.log(false && false);

console.log(true || true);
console.log(true || false);
console.log(false || false);
/*--------------------------------------------------------------------------------------------------*/

console.log("Switch statement");
let a4 = "1";
switch (a4) {
  case "1":
    console.log("moday");
    break;

  case "2":
    console.log("tuesday");
    break;

  case "3":
    console.log("wednesday");
    break;

  case "4":
    console.log("thursday");
    break;

  case "5":
    console.log("friday");
    break;

  case "6":
    console.log("saturaday");
    break;

  case "7":
    console.log("sunday");
    break;

  default:
    break;
}

let a5 = "mon";
switch (a5) {
  case "mon":
  case "wed":
  case "fri":
    console.log("WD");
    break;
  case "tue":
  case "thu":
  case "sat":
    console.log("JAVA");
    break;
  default:
    break;
}

let a6 = "sat";
switch (a6) {
  case ("mon", "wed", "fri"):
    console.log("WD");
    break;
  case ("tue", "thu", "sat"):
    console.log("JAVA");
    break;
  default:
    break;
}

let a7 = 20;
console.log(a7 >= 20 ? a7 + 10 : a7 - 10);

/*--------------------------------------------------------------------------------------------------*/
//history of js
// 'use strict';
/*--------------------------------------------------------------------------------------------------*/

/*
    function:
*/
console.log("FUNCTION:");
function fn1() {
  console.log("HELLO MOTO");
}
fn1();

function fn2(a, b) {
  if (a < b) {
    return 0;
  }
  console.log(b++);
  return fn2(a, b);
}
fn2(5, 1);

//function declaration:
console.log("function declaration:");
function cal_for_DOB(year) {
  return 2024 - year;
}
console.log(cal_for_DOB(2004));

//function expression:
console.log("function expression:");
const DOB = function cal_for_bod(year) {
  return 2024 - year;
};
console.log(DOB(2004));

//arrow function:
console.log("arrow function:");
const dob = date => 2024 - date;
console.log(dob(2003));

//more than line:
const fn5 = date => {
  let temp = 55 - date;
  return temp;
};
console.log(fn5(20));

const Math_pow = (A, B) => {
  let temp = A ** B;
  return temp;
};
console.log(Math_pow(2, 3));

// function calling other function:
console.log("function calling other function:");

function fn7(num) {
  return num * 2;
}
function fn8(num) {
  return fn7(num) * 2 + " lokesh";
}
console.log(fn8(1));

function fn9(num, sum) {
  if (num <= 0) {
    return sum;
  } else {
    sum = sum * 10 + (num % 10);
    return fn9(Math.floor(num / 10), sum);
  }
}
console.log(fn9(123, 0));
console.log(123 / 10);

/*--------------------------------------------------------------------------------------------------*/

//array
console.log("ARRAYS:");
let friends = [
  "LOKESH",
  "ARUN",
  "VALLAVAN",
  "SANTHOSH",
  "LACHU",
  "NAVIN",
  "RAMAS",
  "THANGA",
  "KESAVAN",
  "RAAFIH",
];
console.log(friends);

friends[0] = "lokesh";
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length - 1]);

let n14 = new Array(1, 2, 3, 4, 5, 6);
console.log(n14);

let n15 = "LOKESH J";
let arr = [n15, "LOKESH JAYASEELAN", 2024 - 2004, friends];
console.log(arr);
console.log(arr.length);

const n16 = function f10(num) {
  return 2024 - num;
};
let arr2 = [2, 3, 4, 5];
console.log(n16(arr2)); //NaN;
console.log(arr2 + 10); // 2,3,4,510
console.log(arr2 - 10); // NaN

let arr3 = [12, 22, 33, 44, 22];
// 55 add to end of array
arr3.push(55);
console.log(arr3 + " push");

// 11 add to starting point of array
arr3.unshift(11);
console.log(arr3 + " unshift");

//end-remove form the last
let b1 = arr3.pop();
console.log(b1);
console.log(arr3 + " pop");

//begin-remove form the last begin
let b2 = arr3.shift();
console.log(b2);
console.log(arr3 + " shift");

console.log(arr3.indexOf(22));
console.log(arr3.lastIndexOf(22));

console.log(arr3.includes(22));
console.log(arr3.includes(23));

let A489 = [23, 34, 4, "43", [34, 43]];
console.log(A489[4][1]);

let two_D = [
  [12, 23, 34],
  [4, 34, 33],
  [3454, 4, 5],
];
console.log(two_D[1][1]);
/*--------------------------------------------------------------------------------------------------*/

//intro to object:

// array
console.log("array:");
let arr4 = [
  "lokesh",
  "jayaseelan",
  2024 - 2004,
  "CEO OF TED TALKS",
  ["Too Late", "Talk six", "youto"],
];
console.log(arr4);

//object:
console.log("object:");
let arr5 = {
  name: "lokesh",
  ceo: "jayaseelan",
  dbo: 2004,
  cname: "CEO OF TED TALKS",
  current_ceo: true,
  product: ["Too Late", "Talk six", "youto"],
  age1: function (dob) {
    return 2024 - dob;
  },
  age2: function () {
    return 2024 - this.dbo; //'this' pointing to the arr5
  },
  age3: function () {
    this.age = 2024 - this.dbo;
    return this.age; //'this' pointing to the arr5
  },
};
console.log(arr5.name);
//method 1
console.log(arr5.age1(2004));
console.log(arr5["age1"](1999));
//method 2
console.log(arr5.age2());
//method 3
console.log(arr5.age3());

/*--------------------------------------------------------------------------------------------------*/
// iteration:the for loop:
console.log("for loops:");
for (let i = 0; i <= 1; i++) {
  console.log(i + "💕");
}

console.log("while loops:");
let i = 0;
while (i <= 2) {
  console.log(i);
  i++;
}

while (true) {
  console.log("1");
  break;
}

console.log("do while  loops:");
let j = 0;
do {
  console.log(j);
  j++;
} while (j <= 2);

console.log("continue and break:");
let K = 0;
while (true) {
  if (K == 0 || K == 2) {
    K++;
    continue;
  } else if (K == 1) {
    console.log("I");
  } else if (K == 3) {
    console.log("Love");
  } else if (K == 4) {
    console.log("You");
  } else {
    break;
  }
  K++;
}

let arr6 = ["lokesh", 20, "2", ["32", "32", "32", 3], true];

let type = [];

for (let I = 0; I < arr6.length; I++) {
  console.log(arr6[I] + " " + typeof arr6[I]);
  type[I] = typeof arr6[I];
}
for (let I = 0; I < type.length; I++) {
  console.log(type[I]);
}

for (let i = 0; i <= 4; i++) {
  let jj = Math.random();
  let dice = Math.trunc(jj * 6);
  console.log(dice, jj * 6 + 1);
}
/*--------------------------------------------------------------------------------------------------*/
/*
Prettier:
Prettier is an opinionated code formatter
1.download->Prettier Extensions
2.setting->search->Default Formatter-> select Prettier format
3.setting->search->formatons->tik it's the option
https://prettier.io/docs/en/options


create ne file: .prettierrc

    1."singleQuote": true or false
        "singleQuote": true (all code will be singleQuote)
    2.
*/

/* 
    creating a own snipets:
        file->preferences->uconfigure user snippets->serach box la new global-snippets->type to (jonas)->and code it
 */
/*--------------------------------------------------------------------------------------------------*/

/*
    what is DOM?
      -document object model structured representation of html document.
      -allows js to access html elements and styles to manipulate them.
      -manipulate means change text,html attributes,css style 
 */

// ps1

/*--------------------------------------------------------------------------------------------------*/

//Math function:
console.log("Math function:");
console.log(Math.round(5.6));
console.log(Math.round(5.4));
console.log(Math.ceil(5.6));
console.log(Math.ceil(5.3));
console.log(Math.floor(5.6));
console.log(Math.floor(5.3));

console.log(Math.sqrt(4));
console.log(Math.abs(-21));
console.log(Math.pow(2, 2));

let arr23 = [3, 4, 43, 5];
console.log(Math.min(arr23));
console.log(Math.min(3, 4, 44, 6));
console.log(Math.max(12, 123));

console.log(Math.random() * 6); //0 to 6
console.log(Math.floor(Math.random() * 6) + 1); //1 to 6

/*--------------------------------------------------------------------------------------------------*/

console.log("array");
let array = ["1", "3", "4", "24", "21", "23"];

// delete array[1];
// console.log(array);

array.reverse();
console.log(array);

//join - coverts array to string
let strarr1 = array.join();
console.log(strarr1);

// split - converts string to array
let strarr2 = strarr1.split(",");
console.log(strarr2);

console.log("concat 1:");
let arr11 = [12, 3, 4];
let arr22 = [12, 23, 32];
arr11 = arr11.concat(arr22);
console.log(arr11);

console.log("concat 2:");
let arr33 = [12, 3, 4];
let arr44 = [12, 23, 32];
arr33 = [...arr33, ...arr44];
console.log(arr33);

//----------------------dom(document object model)->dominating the DOM to add functionality to html elements----------------------
document.querySelector(".h1").innerHTML = "LOKESH";

document.querySelector(".dom1").innerHTML = "LOKESH(properties)";

document.firstElementChild.lastElementChild.querySelector(".dom2").innerHTML =
  "Angela";
//properities

document.querySelector(".dom3").click(); // methods
