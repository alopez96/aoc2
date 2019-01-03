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
})
