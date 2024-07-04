
let myFirstName = "irene";
let mySecondName = "Mwikali";
let myLastName = `Musau`;

console.log( `${myFirstName} ${mySecondName}${myLastName}`);

let myAge = 20
let myRealAge = 20.6


let isKenyan = true
let isLightSkin = false

//Functions use .code re-usability= reduce redundancy, breaks down complex tasks into smaller functions
//syntax
//arrow function
//function expression
//function declaration



//function declaration
function functionName(){
        //function body the code to execute
}
functionName()


function greetings(name){
    console.log(`Hello ${name}`)
    console.log('How are you today')
}

greetings(`Mark`)
greetings(`Mwikali`)


//function 2
function summation(a, b){
    c = a + b
    return c
}
let total = summation(1, 2)
/*console.log(total)*/ // this is a long method
console.log(summation(1, 2))

/* Arrow function
let functionName = (parameters) => {
    //function body
} 

let greetings = (name) =>{
    console.log('Hello ${name}')
}
*/

// callback function
function greet(name){
    console.log(`Greetings ${name}`)
}
//second func
function goodbye(name1){
    console.log(`Goodbye ${name}`)
}
    //first function
function listOfStudentToGreet(callBackFunc){
    callBackFunc('Maingi')
}
listOfStudentToGreet(greet)




//global scope
let globalvar = "i am a global variable"



//Block scope
if (true){
    let blockScope = "i am a block scope"
    console.log(blockScope, "inside scope")
}

 /*console.log(blockScope, 'outside scope')*/

 //hoisting doesn't work with let and const. only deals with var.
 console.log(hoistingVar)
 var hoistingVar = "i am hoistable"
 console.log(hoistingVar)

 //lexical scope
 function outer (){
    let outerVar = "i am an outer var"

    function inner(){
        
        console.log(outerVar)
    }

    inner()
 }
 outer()
 
//arrays - a data structure(collection) that holds elements of the same type, size.....or simply just a list
let myShopping = ['Rice', 'milk', 'sugar']
let ages = ['19', '25', '35']
let mixedArray = ['Apple', "Minions", 15, true, null, 85.6]

console.log(myShopping)
console.log(mixedArray)

/*accessing the data in the array*/
console.log( mixedArray[1])

////methods- are called so because they're functions that located in a class
//let arrLen = mixedArray.length


mixedArray.push("mangoes")// adds at the end

mixedArray.unshift("milk") // adds at the start


console.log(mixedArray) 

//OBJECTS
//let objectName = {
   // key: value,
    //key: value,
    //key: value
//}

let person = {
    firstname: "Irene",
    lastName: "Musau",
    age: 20,
    gender: "female",
    hobbies:['listening to music', 'poem writing', 'watching crime series'],
    isKenyan: true,
    isLightSkinned: true,
}
//accessing data in an object
//1. dot notation
//2.box notation- [key]

//dot notation
let data = person.isKenyan

console.log(data)

//box or bracket notation
let data1 = person['isKenyan']

console.log(data1)

//Adding and deleting properties
person.nationality = "Kenyan"

console.log(person)

//deleting


//changing the values

//updating

//ARRAY ITERATION METHODS
//forEach
//map
//find

let ages1 = [16, 25, 30,40,18,45]

for (let i=0; i < ages.length; i++){
    console.log(ages[i])
}

//forEach  and for loop perform the dame function. forEach does not return data
//Array.forEach((element)=>{
//})
ages1.forEach((age)=>{
    console.log(age)
})

//////map- modifies each element in the original array. it returns data
//Array.map((element)=>{
    //code here
//})
let ages2 = [20, 30, 25, 45]
let doubledAges = ages2.map((age)=>{
    return age * 2
})
console.log(doubledAges)

/////find
let ages3 = [16, 20, 50, 30]
let foundAge = ages3.find((age)=>{
    console.log('niko16')
    return age === 16
})

//Rodger's class week 2 phase 1 week 1
// map, filter, find.

const students = [
  {
    name: 'Iyiola Ebenezer',
    isActive: true,
    favLanguage: 'JavaScript',
    gradeOutOfTen: 9,
  },
  {
    name: 'David Ochieng',
    isActive: false,
    favLanguage: 'Java',
    gradeOutOfTen: 8.7,
  },
  {
    name: 'Mark Wanjiru',
    isActive: true,
    favLanguage: 'JavaScript',
    gradeOutOfTen: 9.2,
  },
];


const numbersArr = [1, 2, 3, 4, 5]

const newArr=[]
const arrayMapLogic = (arr) =>{
    for (const element of arr){
        newArr.push(element)
        console.log(element)
    }
    console.log(newArr)
}
arrayMapLogic(numbersArr); 

const multiplyNumbers = numbersArr.map((num) => num * 2)

console.log(multiplyNumbers)

//extract names from the objjects array
const studentNames = students.map ((student) => student.name)
console.log(studentNames);


//FILTER METHOD
//returns a new array
//helps us find elements that meet our passed condition
//e.g
//filter active students 
const printActiveStudents = (arr) => {
    for (const student of arr){
        if(student.isActive){
            console.log(student)
        }
    }
}
printActiveStudents(students);

//check for numbers greater than... from the numbersArr above
const numGreaterThan = numbersArr.filter((num) => num > 3);
console.log(numGreaterThan)

//display only the name/favourite language
const activeStudent = students.filter(function (student) {
    if (student.isActive){
        return student;
    }
})
.map((student) => student.name);//you use map, so you have extracted all elements,unlike in filter. then now decide what you want, like the name here.

console.log(activeStudent)

//find method
//once it gets the first match of your condition, it terminates, does not go to the next one. e.g in the names of isActive, it just returns the first true,(the first name)

const oddNumber = numbersArr.find((num) => num % 2 === 1);
//const oddNumbers = numbersArr.filter()


//WEDNESDAY
//1. Reduce method- used to summarise and aggregate dta in an array. it returns a single value. filter-array, find method- returns a single value. does not mutate or change the data/array.
//2. Destructuring
//3. Front end devt

/*Reduce method
*sum of all numbers in our numArr
*average grade for all students
*average grade for active students
*count the number of students for each favorite lang

*find the student with the highest grade
*get a list of all active students' names

//syntax: 1. array.reduce(callbackFn)
          2.array.reduce(callbackFn, initialValue)
*/
//sum of all numbers in our numArr
const sumArr = numbersArr.reduce((acc, currentElement) => {
    //console.log(acc) //to show all the iterations
    return acc + currentElement;

}, 0);// initial value doesn't have to be 0. if you say10, it means we are adding 10+1, 10+2, 10+3...
console.log(sumArr)

//average grade for all students
//average grade for active students
const totalGradeAllStudents = students.reduce((acc, student) => {
    return acc + student.gradeOutOfTen;
}, 0);
console.log(totalGradeAllStudents / students.length)

const totalGradeActive = students.reduce ((acc, student) => {
    if (student.isActive){
        acc.sum += student.gradeOutOfTen;
        acc.count += 1;
    }
    return acc;
},
{sum: 0, count: 0},
)
console.log(totalGradeActive)

//use a ternary operator to confirm if the totalcount of the aactive students is greater than zero
//const averageGradeStudents = 


//spread operator ... on arrays
let arr = ['1', '2', '3', '4', '5']
let arr2 = arr

arr2.push(6) // same as arr.push(6)

console.log(arr, arr2)

//the spread operator therefore makes a copy of the initial array.
let arr21 = [...arr, 6]
console.log(arr21)

//spread operator on objects
let persons = {
    name: 'Lewis',


}
let person2 = persons

console.log(persons, person2);

// ...to change person2.//used to add secData but adding more info. like nationality, political party, nationalID...etc.
let person21 = {...persons, name: 'Gavin', age: 20}
console.log(person21)

//Destructuring-alloes you to pull from arrays or objects in cases of large data, using attributes
console.log(person.firstname, person.lastName, person.isActive)

const { firstName, lastName, isActive } = person;
console.log(firstName)
console.log(lastName)
console.log(isActive)

const [num1,num2] = arr
console.log(num1, num2)

//assigning a funcion default values
function gradeCalculator(grade = 100, weight = 0.2){
    return grade * weight
}
console.log(gradeCalculator(98));

//spread operator as functin argument
//function grade() {}
let values = [10, 0.2]
console.log(gradeCalculator(...values))


//REST OPERATOR - uses the spread opertor syntax
function displayNames (name1, name2, ...rest){
    console.log(name1)
    console.log(name2)
    console.log(rest)
    console.log(rest.length)
}
let namesArr = ['toto', 'alvin', 'mildred', 'millie', 'angie']
displayNames(...namesArr)

//front-end and the 3 pillars of Web
/* focuses on the UI */




//THURSDAY- RODGERS
//EVENTS
/*caps, enter, mouse, touchpad,
 *clicking on buttons, 
 *submitting of forms, 
 *handling a keypress etc
 *mouse/touchpad
 */
 /* --> methods such as addEventListener
    eg. document.addEventListener('type', callbackFn)
  
 //grab our element-button

 const clickButtonFn = () ==> {
    const btn = document.getElementById('button');
    //console.log(btn);

    //btn.addEventListener('click', browserAlert);

    const browserAlert = ( => {
        alert('I was clicked')
    })

    document.getElementById('button_2').addEventListener('click')
 }

 clickButtonFn().........
 

 --> DOMContentLoaded
 include everything inside the DOMContentLoaded 





 */

