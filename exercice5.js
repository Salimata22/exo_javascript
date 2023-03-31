

function secret_code(code) {
    var code_secret = 4568;
    if(code == code_secret){
        return "Félicitation vous avez trouvé le bon code secret";
    }
    if(code > code_secret){
        return "Trop grand, veuillez descendre"
    }
    if(code < code_secret){
        return "Trop petit, veuillez monter"
    }
}

//test de la fonction

console.log(secret_code(458));