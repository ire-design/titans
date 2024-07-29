const firstName = "Irene";
const secondName = "Mwikali";
const lastName = "Musau";
let fullName;

fullName = `${firstName} ${secondName} ${lastName}`;
fullName = firstName + " " + secondName + " " + lastName

console.log(fullName)

// an example given in the programming as a convo part 1
const name = "Musau Toto";
const probabilityOfRain = 0.5;
const temperatureInC = 27;

const likelyToRain = probabilityOfRain > 0.3;
const sunIsDangerous = temperatureInC >= 26;

const rainPercentage = probabilityOfRain * 100;
const rainAdvice = likelyToRain ? "take an umbrella" : "enjoy this rain-free day";
const sunAdvice = sunIsDangerous ? "watch out for heatstroke" : "bask in this fine weather";

const message = `Hello, ${name}, with a rain chance of ${rainPercentage}% and a temperature of ${temperatureInC}C we recommend that you ${rainAdvice} and ${sunAdvice}.`;

console.log(message);


//array revision
const winningNumbers = [32, 9, 14, 33, 48, 5];

function logWinningNumbers(numbers) {
  console.log("Winning numbers:", numbers);
}

logWinningNumbers(winningNumbers);

//objects
  /* const obj = {
    key1: value1,
    key2: {
      innerKey1: innerValue1,
      innerKey2: innerValue2,
    },
  }; */

//nested object
const address = {
  street: {
    line1: "11 Broadway",
    line2: "2nd Floor",
  },
  city: "New York",
  state: "NY",
  zipCode: "10004",
}
console.log(address.street);


//OBJECT ITERATION 
//for loop
let myArr = ['Jimmy', 'Derrick', 'Mwikali' ] ;

for (j = 0; j < myArr.length; j++){
    console.log(myArr[j])
}

//while loop
let myArray = ['\npotatoes', 'crisps', 'liver', 'spinach']

let i = 0;

while(i < myArray.length){
  console.log(myArray[i++])
}

//for...of
const myArray1 = ['\njuice', 'soda', 'yoghurt']

for (const element of myArray1 ){
  console.log(element)
}

//example2 for...of
const names = ['\ntoto', 'Essie', 'winnie', 'Benja']

for (const name of names){
  console.log(name)
}

//switch statement revision
//change the if to a switch

let age = 17;

let isAdult, canWork, canEnlist, canDrink;

if (age >= 16) {
  canWork = true;

  if (age >= 18) {
    isAdult = true;
    canEnlist = true;

    if (age >= 21) {
      canDrink = true;
    }
  }
}

console.log(canWork);

//the switch of that
let age1 = 20;

let isAnAdult, CanWork, CanEnlist, CanDrink;

switch(true){
  case age1 >= 21:
    CanDrink = true;

  case age1 >= 18:
    CanEnlist = true;

  case age >= 16:
    CanWork = true
}

//MATH object
/* Math.ceil()- rounds up. 0.5 becomes 1 
 * Math.floor()- rounds down.  0.49 becomes 0
 * Math.round()- rounds to the nearest 
 * Math.max()
 * Math.min()
 * Math.random()- returns a random number between 0(inclusive) and 1(exclusive)
*/ 
myNumbers = ['1.69', '2', '3', '5', '70']

finalOne = Math.floor(myNumbers [0]);
console.log (finalOne)


//FUNCTIONS
const welcomeMessage = function(){
  console.log('karibu sana')
}
welcomeMessage()


//function showMessage(from, text){
  //alert(from, text)
//}

//showMessage('Mwikali', 'hawayu')

/* Default values*/
//function showMessage(from, text = "no text given") {
  //alert( ${from} ${text} );
//}

//showMessage("Ann"); // Ann: no text given

/* Returning a value*/
function sum(num11, num12){
  return num11 + num12
}
let theSum = sum(2, 4)
  console.log(theSum);


  const weatherToday = 'rainy'
  function exerciseDog(dogName, dogBreed){
    if (weatherToday === 'rainy'){
      return `${dogName} did not exercise due to rain`
    }
  }

  const finalSentence = exerciseDog("Byron", "poodle")
  console.log(finalSentence)

//FINDING ARRAY ELEMENTS
/* Array.prototype.indexOf()
  * Array.prototype.find()
*/

// Array.prototype.filter()
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
//filter all active students 
const activeStudents = function (arr) {
  for (const student of arr){
    if (student.isActive){
      console.log(student)
    }
  }
}
activeStudents(students)
//filter yenyewe
const activeStudents1 = students.filter((student) => {
  if (student.isActive){
          return student;
      }
})
.map((student) => student.name);
console.log(activeStudents1)


const skiSchool = ["aki", "guadalupe", "lei", "aalam"];
const rollCall = skiSchool.map((student) => {
  return student + " the skier";
});
console.log(rollCall)
//shorter way of the above
const skiSchool1 = ["aki", "guadalupe", "lei", "aalam"];
const rollCall1 = skiSchool1.map((student) => student + " the skier")