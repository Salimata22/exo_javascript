var salaireBrut ;
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
