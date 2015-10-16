var expect = chai.expect;
// var should = chai.should();

describe('Find missing integer in array', function() {

  var array = [1,3,4,5,6,7,8,9,10];
  var array2 = [10,9,8,7,5,4,3,2,1];

  it('should be 2', function() {
    expect(whatsMissing(array)).to.equal(2);
  });
});
