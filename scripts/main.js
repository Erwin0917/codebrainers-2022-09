const arr = [];
const nonEmptyArr = ['kasia', 'jan', 'zosia', [10, 50]];
const arrExample = new Array(5);
console.log(' arrExample', arrExample);




// push() / pop()
// unshift() / shift()

console.log('nonEmptyArr first elem ', nonEmptyArr);
nonEmptyArr.push('adam');
console.log('nonEmptyArr first elem ', nonEmptyArr);
const lastElem = nonEmptyArr.pop();
console.log('nonEmptyArr first elem ', nonEmptyArr);
console.log('lastElem ', lastElem);
console.log('nonEmptyArr 2', nonEmptyArr[3][1]);


// indexOf() - index elementu lub -1 jeśli nie ma szukanego elementu

console.log('nonEmptyArr indexOf ', nonEmptyArr.indexOf('adam'));
