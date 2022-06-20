function somarArray (numeros){
    let total = 0
    for(let num of numeros){
        total = total + num
    }
    return total
}
let exempleArray = [8, 10, 9, 4, 6, 14, 23]
console.log(exempleArray)
console.log("valor total da soma do array= " + somarArray(exempleArray))