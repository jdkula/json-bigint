var mocha = require('mocha'),
  assert = require('chai').assert,
  expect = require('chai').expect,
  BigNumber = require('bignumber.js');
describe('Testing NaN and Infinity support', function () {
  it('Should show classic JSON.parse lacks NaN support', function (done) {
    assert.throws(() => {
      JSON.parse('NaN');
    });
    done();
  });
  it('Should show classic JSON.parse lacks Infinity support', function (done) {
    assert.throws(() => {
      JSON.parse('Infinity');
    });
    done();
  });
  it('Should show classic JSON.parse lacks -Infinity support', function (done) {
    assert.throws(() => {
      JSON.parse('-Infinity');
    });
    done();
  });

  it('Should show JSONbig does support NaN round trip', function (done) {
    var JSONbig = require('../index');
    var obj = JSONbig.parse('NaN');
    expect(obj).to.be.NaN;

    var output = JSONbig.stringify(Number.NaN);
    expect(output).to.equal('NaN');
    done();
  });
  it('Should show JSONbig does support Infinity round trip', function (done) {
    var JSONbig = require('../index');
    var obj = JSONbig.parse('Infinity');
    expect(obj).to.equal(Number.POSITIVE_INFINITY);

    var output = JSONbig.stringify(Number.POSITIVE_INFINITY);
    expect(output).to.equal('Infinity');
    done();
  });
  it('Should show JSONbig does support -Infinity round trip', function (done) {
    var JSONbig = require('../index');
    var obj = JSONbig.parse('-Infinity');
    expect(obj).to.equal(Number.NEGATIVE_INFINITY);

    var output = JSONbig.stringify(Number.NEGATIVE_INFINITY);
    expect(output).to.equal('-Infinity');
    done();
  });
});
