const number = [ 5 , 6, 7 ,8 , 9 , 10, 11, 12, 13]


let somma = 0
for (let i = 0; i < number.length; i++) {
    if (i % 2 !== 0) {
        somma += number[i]
        
    }
    
}
console.log(somma)