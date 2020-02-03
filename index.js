function tiga(x){
    return 3+x
}

function tambah(num, fn){
    return num + fn(num)
}

console.log(tambah(5,tiga))

var arr = [1,2,3,4,5,6,7,8,9,10]


//ES6 methods
// takes an array value as an 'element' and returns that element to a new array starting at [0]
let arrBaru = arr.map(function(element){
    return element*2
})

console.log(arrBaru)

// takes an array value as an 'element' and returns that elemet to a new array starting at [0], but only if the return === true
let arrNew = arr.filter(function(element){
    return element % 2 !== 0
})

console.log(arrNew)

// template string using `` instead of ''/"". enter, space, tab sensitive.
var marga = `eddy`
var nama = `lian 
${marga}`
console.log(nama)