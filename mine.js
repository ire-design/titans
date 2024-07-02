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

