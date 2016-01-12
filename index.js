// Importing required objects
// Create new instance of Emitter
const fs = require('fs'),
      EventEmitter = require('events').EventEmitter,
      ee = new EventEmitter(),
      router = require('./lib/router.js');

// Loading files from folder 'img'
// Transforms file into new data.

var file = './img/' + process.argv[2],
    transform = process.argv[3],
    newData;

// Asynchonously read entire contents of file
// Begins callback function
// Emits 'transformed'

fs.readFile(file, function(err, data) {
  if (err) return console.log(err);

  router[transform](data, function(err, data) {
    newData = data;
    ee.emit('transformed');
  });
});

// Listening for 'transformed'
// Writes new file along with what transformation took place

ee.on('transformed', function() {
  var newFile = file.slice(0, -4) + '-' + transform + '.bmp';
  fs.writeFile(newFile, newData, function(err) {
    if (err) return console.log(err);
    console.log('file saved as ' + newFile.slice(6));
  });
});
