console.log("Exercitiul 1.")
function power (base, exponent) {
    let result = 1;
    for (i = 1; i <= exponent; i++) {
        result = result*base;
    }
    
    return(result);
}

console.log(power(2,4));


console.log("");


console.log("Exercitiul 2 - Sintaxa 1 - sintaxa clasica.");
function area(shape) {
    
    if ( shape === "patrat" ) {
            return ("Aria patratului = l^2.");
    } else if( shape === "dreptunghi") {
            return("Aria dreptunghiului = L*l.");
    } else if ( shape === "cerc") {
            return("Aria cercului = 2*PI*r.");
    } else 
        return ("Va rugam sa alegeti una dintre urmatoarele figuri geometrice: 'patrat', 'dreptunghi' sau 'cerc'.");
        
}

console.log(area("patrat"));
console.log(area("paralelipiped"));


console.log("");


console.log("Exercitiul 2 - Sintaxa 2 - functie anonima.");
var area = function(shape) {
    
    if ( shape === "patrat" ) {
            return ("Aria patratului = l^2.");
    } else if( shape === "dreptunghi") {
            return("Aria dreptunghiului = L*l.");
    } else if ( shape === "cerc") {
            return("Aria cercului = 2*PI*r.");
    } else 
        return ("Va rugam sa alegeti una dintre urmatoarele figuri geometrice: 'patrat', 'dreptunghi' sau 'cerc'.");
        
}

console.log(area("patrat"));
console.log(area("paralelipiped"));


console.log("");


console.log("Exercitiul 2 - Sintaxa 3.");
var area = (shape) => {
    
    if ( shape === "patrat" ) {
            return ("Aria patratului = l^2.");
    } else if( shape === "dreptunghi") {
            return("Aria dreptunghiului = L*l.");
    } else if ( shape === "cerc") {
            return("Aria cercului = 2*PI*r.");
    } else 
        return ("Va rugam sa alegeti una dintre urmatoarele figuri geometrice: 'patrat', 'dreptunghi' sau 'cerc'.");
        
}

console.log(area("patrat"));
console.log(area("paralelipiped"));

