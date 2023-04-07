
function getAbsSum(...args) {
    var sum = 0;

    
    for (var i = 0; i < args.length; i++) {
        if (args[i]<0 ) {
            args[i]  = Math.abs(args[i])
        }
        
    }
    for (var i =0; i < args.length; i++) {
        
       sum =  sum + args[i] ; 
    }
    return sum
    
}

console.log(getAbsSum(2,-1,4,8,10))
console.log(getAbsSum(-3,-4,-10,-2,-3))
console.log(getAbsSum(2,4,6,8,10))