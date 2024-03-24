// Control flow statement
// Control flow statement in javascript  are used to control the flow of
// execution in javascript program

// They are used to make decision,
// Execute loops and handle errors

 // There are three types of control statement
 //in Javascript

// Conditional Statement
// Loops
// Try/catch statement


// Condiotional statement are used to execute different
// actions based on different conditions

// If statement, else, else if

// if is used to  execute a block of code if a 
// condition is true

// examples

if(true) {
    console.log("execute")
}

if(false) {
    console.log("don't execute")
}

let age = 20

if (age >18 ){
    console.log("Age is greater than 20")
}

let country = "india"
let age2 = 22

if (age >= 18 && country == "india") {
    console.log("you can get")
}

// Let me write for else If 

let personAge = 18

if (personAge >= 19) {
    console.log("you are minor")
}

else if (personAge >= 17) {
    console.log ("you are teenager")
}

else {
    console.log ("welcome")
}
// another testing


let personSage = 5

if (personSage >= 19) {
    console.log("you are minor")
}

else if (personSage >= 17) {
    console.log ("you are teenager")
}

else {
    console.log ("welcome")
}


// Switch

// Switch is a condional statement that is used

// to execute block of code
// based on the value of expression

// EG

 const check = []

 switch (typeof check) {
    case "number":
        console.log("number")
        
        break;
 
    case "string":
        console.log("string")
        
        break;
 
    case "boolean":
        console.log("boolean")
        
        break;
 
    default:
        console.log("other")
        break;
 }


 let dayName = 6;

 switch (dayName) {
    case 1 :
        dayName = "Sunday"
        break;
    case 2 : 
    dayName = "Monday"
    break

    case 3 :
        dayName = "Tuesday"
 
        break;
 
    case 4 :
        dayName = "Wednesday"
 
        break;
 
    case 5 :
        dayName = "Thursday"
 
        break;
 
    case 6 :
        dayName = "Friday"
 
        break;
 
    case 7 :
        dayName = "Saturday"
 
        break;
 
        default:
            dayName = "invalid day number"
            break 
    }

    console.log("The day is: " + dayName)


    // Tenary operator

    // first is condition then ? ("code to  be excuted if codition is true")

    // condition ? "value if true" : "value if false"

    let Page = 13

  let msg =  (Page >= 18) ? "your are an adult" : "You are minor"

  console.log(msg)

    let Pa = 13

  let mg =  (Page >= 18) ? "your are an adult" : "You are minor"

  console.log(msg)

// Loops in javascript

// In programming, loops are used to display a block of code

// For loop

for (i = 1; i <= 10; i++) {
    console.log("hello")
}

for(x = 20; x >=15; x--) {
    console.log(x)
}

let coding = ["Js", "Python" , "C++"]

for (let i = 0; i < coding.length; i++) {
    console.log(coding[i])
}