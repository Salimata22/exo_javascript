/*var tableau = [];
var a = 0;

function somme(tableau) {

    for (var i =0; i < tableau.length; i++) {
        
       a = tableau[i] + a; 
    }
    return a
    
}

console.log(somme(4 ,7, 8, 3,7,2,6743))
*/

//autre maniere
function sommes(...args) {
    var sum = 0;

    for (var i =0; i < args.length; i++) {
        
       sum +=  args[i] ; 
    }
    return sum
    
}

console.log(sommes(4 ,7, 8, 3,7,2,6743))
