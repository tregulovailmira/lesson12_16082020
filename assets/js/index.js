//debugger;
'use strict';
const string = prompt('Eneter a string');
console.log(isPalindrome(string));

function isPalindrome(string){
    const strReplace = string.toLowerCase().replace(/ /gi, ''); //схлопывание пробелов
    const strReverse = strReplace.split('').reverse().join(''); //преобразование строки в массив, смена последовательности элементов массива, преобразование в сроку
    return strReverse === strReplace;
}

function numberOfVowels(string) {
    let sumOfVowels = 0;
    for(let item of string) {
        if(item === 'a' || item === 'e' || item === 'i' || item === 'o' || item === 'u') {
            sumOfVowels += 1;
        }
    }
    return sumOfVowels;
};
console.log(numberOfVowels(string));

function logNumbers(n) {
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuzz');
        } else if (i % 3 === 0) {
            console.log('fizz');
        } else if (i % 5 === 0) {
            console.log('buzz');
        } else
            console.log(i);
    }
};

logNumbers(20);

function average(...args) {
    const isInvalid = args.some((item) => isNaN(item));
    if (isInvalid) {
        return 'invalid value';
    }
    return args.reduce((accumulator, item) => accumulator + item)/args.length;
};
console.log(average(5, 5, 5));

