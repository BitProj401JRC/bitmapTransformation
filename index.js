const fs = require('fs'),
      EventEmitter = require('events').EventEmitter,
      ee = new EventEmitter(),
      router = require('./lib/router.js');

var file = './img/' + process.argv[2],
    transformer = process.argv[3],
    newData;

fs.readFile(file, function(err, data) {
  if (err) return console.log(err);

  router[transformer](data, function(err, data) {
    newData = data;
    ee.emit('transformed');
  });
});

ee.on('transformed', function() {
  var newFile = file.slice(0, -4) + '-' + transformer + '.bmp';
  fs.writeFile(newFile, newData, function(err) {
    if (err) return console.log(err);
    console.log('file saved as ' + newFile.slice(6));
  });
});
