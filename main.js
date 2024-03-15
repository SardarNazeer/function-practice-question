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