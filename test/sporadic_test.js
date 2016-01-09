const expect = require('chai').expect,
      fs = require('fs'),
      sporadic = require('../lib/sporadic');

var bufferObject;

describe('sporadic', function() {
  before(function(done) {
    fs.readFile('./img/mario.bmp', function(err, data) {
      bufferObject = data;
      done();
    });
  });

  it('should contain a function', function() {
    expect(typeof sporadic).to.eql('function');
  });
  it('should contain a buffer', function() {
    expect(Buffer.isBuffer(bufferObject)).to.eql(true);
  });
  it('should call a callback with a buffer', function(done) {
    sporadic(bufferObject, function(err, data) {
      expect(err).to.eql(null);
      expect(Buffer.isBuffer(data)).to.eql(true);
      done();
    });
  });
});
