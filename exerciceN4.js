

function objetToArray(obj) {

var monTableau = Object.keys(obj).map(function(cle) {
        return [(cle), obj[cle]];
        
}) ;

return monTableau
}

//console.log(monTableau);


console.log(objetToArray({
    D:1,
    B:2,
    C:3
}));


console.log(objetToArray({
  likes: 2,
  dislikes: 3,
  followers: 10
}) );