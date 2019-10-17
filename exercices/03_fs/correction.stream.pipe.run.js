const fs = require('fs');
const path = require('path');


const options = {
  // for another type of files non text or big
  // we rather wont use these maybe
  //for a big file a 4ko chunk will make copy so slow...
  encoding: 'utf-8',
  highWaterMark: 4
};
const fromPath = path.resolve(__dirname, 'coucou.txt');
const folder = path.resolve(__dirname, 'jtutu');
const toPath = path.resolve(folder, 'coucou.txt');

console.log(fromPath);

fs.mkdir(folder, function (err) {
  if (err && err.code !== 'EEXIST') throw err;

  fs.stat(fromPath, function (err, stats) {
    if (err) throw err;
    const filesize = stats.size;

    const readStream = fs.createReadStream(fromPath, options);
    readStream.on('error', function (err) {
      console.error('Please provide valid file :', err);
    });

    const writeStream = fs.createWriteStream(toPath, options);
    writeStream.on('error', function (err) {
      console.error('Cannot copy to given file :', err);
    });

    // we can use this or the code below 
    readStream.pipe(writeStream);

    // let dataRead = 0;
    // readStream.on('data', chunk => {
    //   dataRead += chunk.length;
    //   console.log(`${Math.floor((dataRead * 100) / filesize)} %`);
    //   writeStream.write(chunk);
    // });
    // readStream.on('close', () => {
    //   writeStream.close();
    // });
  });
});
