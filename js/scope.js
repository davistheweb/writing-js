// Global scope

var x = "Josiah";

function josh(){
    
    console.log(x);
}
console.log(x);

josh()



// function scope
function josiah(){
    var fs = "Hello Josh"
    console.log(fs)
}

josiah()
//console.log(fs)
// block scope 

function block() {
    if(true){
        let r = "Josiah Dave"
        console.log(r)
    }
    //console.log(r)
}

block()
