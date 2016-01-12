// Exporting day function which makes image completely white

module.exports = function day(data, callback) {
  var length = data.readUInt32LE(10);
  if (length === 54) {
    length = data.length;
  }
  for (var i = 54; i < length; i += 1) {
    data[i] = 255;
  }

  callback(null, data);
};
