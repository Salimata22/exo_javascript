/*var salaireBrut ;
var bonus ;
var genre;

function calculeSalaire(salaireBrut,bonus,genre) {
// 7+5=12

    var salaire = salaireBrut - (12*salaireBrut)/100 + bonus;
    switch (genre) {
        case 'femme' || '4 personnes à charge':
            salaire = salaire -  (16*salaireBrut)/100
            break;
        
        case '3 personnes à charge':
            salaire = salaire -  (17*salaireBrut)/100
            break;
                       
        default:
            break;
    }
    return salaire
    
    
}
console.log(calculeSalaire(2000,100,'femme'))
*/


function calculeSalaire(salaireBrut,genre,charge) {
    var salaire;
    var bonus = 150;
    salaire = salaireBrut - (salaireBrut*12)/100

    if (genre == 'femme') {
        salaire = salaire - (salaireBrut*16)/100
    }

    else if(genre == 'homme' && charge == 4 ){
        salaire = salaire - (salaireBrut*16)/100


    }

    else if(genre == 'homme' && charge == 3 ){
        salaire = salaire - (salaireBrut*17)/100


    }
    else{
        salaire = salaire - (salaireBrut*18)/100
    }
    
   return salaire + bonus;
}

console.log(calculeSalaire(2000,'femme',0))