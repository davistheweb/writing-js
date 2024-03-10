// Reference Datatypes

//object 


// Object is a collection of properties

let person = {};

console.log(typeof person);
console.log(person);



let people = {
    firstname: "Mark",
    Lastname: "Zuck",
    age:35,
    grade:35.0,
    ndgrade:35.5
};

console.log(people)


// Array

// Array are types of object that stores a collection of values

//eg

let numbers = [1,2,3,4,5,6,7];

//numbers.length

console.log(numbers);
console.log(typeof numbers);


// Functions 

// function are types of object that can be use to execute code 

// To create a fucntion we use the function keyword eg

function msg(){
    console.log("Davistheweb");
}

console.log(typeof msg)

// Javascript is a dynamically types language

// So we can install differnt data-types in the same variable.

// Eg

let x;

console.log(typeof x);
console.log(x);

x = "Davistheweb";
console.log(typeof x);
console.log(x);

x = 100;

console.log(typeof x);
console.log(x);

x = false;

console.log(typeof x);
console.log(x);
