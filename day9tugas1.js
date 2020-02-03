function factorial(x){
    if (x > 1) {
        var fac = x*(x-1)
        for(i=x-2; i>1; i--){
            var fac = fac*i
        }
        return fac
    }else if(x === 0 || x === 1){
        return 1
    }
}
console.log(factorial(5))