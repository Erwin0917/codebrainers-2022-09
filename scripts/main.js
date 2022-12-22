//string
// const elem = 'de';
// 'abc' + elem, "abc", `abc ${elem} ...`
//number
// 1, 1.22...

//boolean
// true/false

// undefined
// null


//array
//  []
const arr = ['abc', 0, function(){}, {}, []];

arr[0];

//objects
const obj = {
    "key": "value",
    color: "red",
    name: function() {
        console.log('this is name');
    }
}
const any_key = 'color';
// console.log(obj[any_key]);
// console.log(obj.key);
// obj.name()



// ----------------------------------
function firstFunction(name){
    console.log(name);
    console.log('this is firstFunction');
}

firstFunction();

const firstFunctionArrow = (name) => {
    console.log(name);
    console.log('this is firstFunction');
    const abc = 'd';
}

firstFunctionArrow();


// ----------------------------------
var a;

let b;
const c = 'adc';
const d = [];
d.push('firstElem');


// ----------------------------------
1 == '1'
false == []

1 === '1'

//


