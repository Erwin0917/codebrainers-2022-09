// const a = [1, 2, 3];
// // const b = [1, 2, 3];
// const b = a;
// console.log(JSON.parse('{}'))
// b[0] = 13;
//
// console.log('a ', a);
// console.log('b ', b);

const exampleArray = [
  "Emilia",
  "Szymon",
  "Adrian",
  "Ola",
  "Franek",
  1,
  33,
  12,
  undefined,
  null,
  ["Warszawa", "Kraków", "Wrocław"],
  {
    name: "Opel",
    color: "red",
  },
  NaN,
];

// function square(x){
//     return x * x
// }

// const square = (x) => {
//   return x * x;
// }

const square = (x) => x * x;

function squareIfNumber(x) {
  return typeof x === "number" ? x * x : x;
}

const fullArrayWithSquared = exampleArray.map(squareIfNumber);
console.log("fullArrayWithSquared ", fullArrayWithSquared);

// const nextArray = exampleArray.map(square);
// exampleArray.forEach(square)

function filterOutNonString(value) {
  return typeof value === "string";

  // if (typeof value === 'string') {
  //     return true;
  // }
  // return false;
}

const nextArray = exampleArray.filter((x) => filterOutNonString(x)).reverse();

// console.log('join',exampleArray.join('--'))
// nextArray.reverse();

// console.log('nextArray ', nextArray);

const numbers = exampleArray.filter(function (x) {
  if (typeof x === "number" && isNaN(x) === false) {
    return true;
  }
});

const squaredNumbers = numbers.map(square);
// console.log(squaredNumbers)

const letterLongThree = exampleArray
  .filter(function (y) {
    if (filterOutNonString(y) && y.length > 3) {
      return true;
    }
  })
  .reverse();

const filterOutObjects = (element) => {
  return typeof element === "object" &&
    element !== null &&
    !Array.isArray(element)
    ? true
    : false;
};
const arrayOfObjects = exampleArray.filter(filterOutObjects);
console.log("selement?", arrayOfObjects);

function filterArray(array, filterCallback) {
  const filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (filterCallback(element)) {
      filteredArray.push(element);
    }
  }

  return filteredArray;
}

const arrayOfObjects2 = filterArray(exampleArray, filterOutObjects);
console.log("arrayOfObjects2", arrayOfObjects2);
