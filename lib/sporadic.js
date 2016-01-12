// Exporting day function which makes image completely chaotic

module.exports = function sporadic(data, callback) {
  var length = data.readUInt32LE(10);
  if (length === 54) {
    length = data.length;
  }
  for (var i = 54; i < length; i += 1) {
    data[i] = Math.floor(Math.random() * 256);
  }

  callback(null, data);
};
