function filterArray(tab) {
     var tabNumber = [];
     j = 0;
     for (var i = 0; i < tab.length; i++) {
      
        if (typeof tab[i] == 'number') {
           tabNumber[j] = tab[i] 
           j++
        }
        
     }
     return tabNumber;
    
}

console.log(filterArray(["h",2,5,"nom",5,4]))

// autre methode d'ajout
 //tabNumber.push(tab[i]);