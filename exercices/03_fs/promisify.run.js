const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readfile = 

const options = {
  encoding: 'utf-8',
  highWaterMark: 4
};
const fromPath = path.resolve(__dirname, 'coucou.txt');
const folder = path.resolve(__dirname, 'jtutu');
const toPath = path.resolve(folder, 'coucou.txt');

// not finished

console.log(fromPath);

console.log(fromPath);

fs.mkdir(folder, function(err) {
  if (err && err.code !== 'EEXIST') throw err;

  fs.readFile(fromPath, options, (err, data) => {
    if (err) throw err;

    fs.writeFile(toPath, data, options, (err) => {
      if (err) throw err;
    });
  });
});