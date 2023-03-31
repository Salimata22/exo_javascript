var tableau = [];
var a = 0;

function somme(tableau) {

    for (var i =0; i < tableau.length; i++) {
        
       a = tableau[i] + a; 
    }
    return a
    
}

console.log(somme([4 ,7, 8, 3,7,2]))
