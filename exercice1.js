var value = 2;

//Question1
if (typeof(value) == "number") {
    console.log("La valeur est un nombre")
} else {
    console.log("La valeur est une chaine de caractere")
    
}

//Question2
value = parseInt(value);
switch (value) {
    case 0:
        console.log("la valeur est egale à 0")
        break;
    
    case 1:
        console.log("la valeur est superieure à 0")
        console.log("la valeur est egale à 1")
        break;
            
    case 2:
        console.log("la valeur est superieure à 0")
        console.log("la valeur est superieure à 1")
        
        break;        

    default:
        
}

