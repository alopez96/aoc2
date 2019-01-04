//file system for Node
const fs = require('fs')

//read input
fs.readFile('./input.txt', (err, data) => {
    if(err){
        console.log('error', err)
    }
    //get strings
    const strings = data.toString();

    //split strings and store in array
    const stringArray = strings.split('\n')
    console.log(stringArray)
    
    let totaltwo = 0;
    let totalthree = 0;

    stringArray.forEach((entry) => {
        let total = {}
        for (let i = 0; i < entry.split('').length; i++){
            let char = entry.split('')[i];
            total[char] = (total[char] != null)
                ? total[char] + 1
                : 1
        }
        let tot = new Set(Object.values(total))
       
        if (tot.has(2)){
            totaltwo++
        }
        if(tot.has(3)){
            totalthree++
        }
    })

    //multiply twice * thrice
    console.log( totaltwo * totalthree)
})
