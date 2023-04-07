var tab = [];
function counttrue(tab) {
    var a = 0;
    for (i = 0; i < tab.length; i++) {
        if (tab[i] == true) {
            a += 1;
        } 
    }
    return a
    
}

console.log(counttrue([true,false,true,false,false]));