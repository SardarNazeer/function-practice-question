// q1) create a function using the function keyword that takes a string as an arguement & return the number of vowels in the string

// function name countVowels with paramter of str 

function countVowels(str){

    // count variable initilize with zero
    let count = 0;

    // for of loop 

    for(const char of str){

        // if condition for checking character of string is vowels or not 

        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
}

// q2) create an arrow function with same task 


const countVowel = (str) => {

    // count variable initilize with zero
    let count = 0;

    // for of loop 

    for(const char of str){

        // if condition for checking character of string is vowels or not 

        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    return count;
}

// q3) For a given array of numbers, print the square of each value using the foreach loop 
// forEach Question 

// 1st method 

let number = [1,2,3,4,5,6,7,8,9,10];

number.forEach((num) => {
    console.log(num*num);
})

// 2nd method 

let numb = [55,76,89,45,34,23];

let calcSqr = (num) => {
    console.log("Square of" + " " + num + " " + num * num);
}

numb.forEach(calcSqr);

// q4) for a given array of number find out the even number using filter method 

let num = [2,4,5,,6,7,78,,8,9,99,8,76,67,67,7,656,56,5,65,665,56,6,5,55,67,6,45,34,34,67]

let evenNum = num.filter((val) => {
    return val % 2 === 0;
})

console.log(evenNum);

// q5) for a given array of number find out the largest number using reduce method 


let arr = [3,6,9,23,56,454,23,12,124,];

const largest = arr.reduce((prev, curr) => {
    return prev > curr ? prev : curr;
})

console.log(largest);

// q6) we are given array of marks of student. filter out the marks of student that scored 90 

let marks = [76,89,92,88,99,92,45,91];

let marks90 = marks.filter((val) => {
    return val > 90;
})

console.log(marks90)

// q6 b) take a number n as an input from user. create an array of number from 1 to n;

let input = prompt("input a number in array");

let arr = [];

for(let i = 0; i <= input; i++){
    arr[i-1] = i;
};

console.log(arr);

// q6 c) use the reduce method to calculate the sum of all number in array ;

const newArr = arr.reduce((prev, curr) => {
    return prev + curr;
})

console.log("sum of the array input given by the user is:" + " " + newArr);

// q6 d) use the reduce method to calculate product of all numbers in the array 

const productArr = arr.reduce((res, curr) => {
    return res * curr;
})

console.log("Product of an array:" + " " + productArr);