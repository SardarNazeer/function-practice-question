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

// create an arrow function with same task 


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