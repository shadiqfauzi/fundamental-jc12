var duplicateCount = (str) => {
    var newArr = []
    newArr.push(str[0])
    var arr = str.split('')
    
    for(i=0;i<arr.length;i++){
        if(newArr.includes(arr[i])){
        }else{
            var check = 0
            for(j=0;j<arr.length;j++){
                if(arr[j] === arr[i]){    
                    check ++
                }
            }
            if(check > 1){
                newArr.push(arr[i])
            }
            
        }
    }
    console.log(newArr)
    return newArr.length
}

console.log(duplicateCount('aabbccddee123kkhhaab')) 
// returnnya harus 7