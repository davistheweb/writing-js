// Logical operator

// Logical operator performs logical operations like

// Example

// AND (&&)
// OR (||)
// NOT (!)

// AND EVALUATES OPRANDES AND RETURN 
// True only if all are true

// True && TRUE; // true

// True && False // false

// Flase && true // false

// False && false // false

// Example 

// AND (&&)

let y = 10
let x = 5

console.log( x > 0 && x < y)
console.log(x > 0 && y < 0)
console.log(x < 0 && y > 0)
console.log ( x< 0 && y <0)


// OR (||)

// Returns true even if one of the multiple oprands
// is true

// true || true = true
//true || false = true
// false || true = true
//false || false = false
// EXAMPLES

let z = 5
let f = 6


console.log(z > 0 || f > 0)
console.log(z > 0 || f < 0)
console.log( z < 0 || f >0)
console.log(z < 0 || f < 0)
console.log(z < 0 || f == 0 )