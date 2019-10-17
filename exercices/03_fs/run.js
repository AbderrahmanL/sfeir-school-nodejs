const path = require('path');
const fs = require('fs');
console.log(path.resolve( 'coucou.txt'));
fs.mkdir('jtutu', (err)=>{
    if (err && err.code !== 'EEXIST') throw err;
    fs.copyFile('coucou.txt', 'jtutu/coucou.txt', (err) =>{
        if (err) throw err; 
    });
});