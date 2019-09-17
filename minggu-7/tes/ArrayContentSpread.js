const arr1 = [ 1, 2, 3 ];
const arr2 = [ 4, 5, 6 ];

const obj1 = { name: 'Zidane', age: '15' };
const obj2 = { address: 'Jakarta', gender: 'Men' } 

const merge = {...obj1, ...obj2};

console.log(arr1.concat(arr2));
console.log(merge);