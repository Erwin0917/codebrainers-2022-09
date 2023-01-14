// const a = [1, 2, 3];
// // const b = [1, 2, 3];
// const b = a;
// console.log(JSON.parse('{}'))
// b[0] = 13;
//
// console.log('a ', a);
// console.log('b ', b);


const exampleArray = [
    'Emilia',
    'Szymon',
    'Adrian',
    'Ola',
    'Franek',
    1,
    33,
    12,
    undefined,
    null,
    [
        'Warszawa', 'Kraków', 'Wrocław'
    ],
    {
      name: 'Opel',
      color: 'red'
    },
    NaN
];


function square(x) {
  return x * 2;
}

// const nextArray = exampleArray.map(square);
// exampleArray.forEach(square)


const nextArray = exampleArray.filter(function (x){
  if (typeof x === 'string') {
    return true;
  }
  return false;
})


// console.log('join',exampleArray.join('--'))
// nextArray.reverse();


// console.log('nextArray ', nextArray);


const numbers = exampleArray.filter(function (x) {
  if ( typeof x === 'number' && isNaN(x) === false) {
    return true;
    
  }
})

const squaredNumbers = numbers.map(square);
console.log(squaredNumbers)