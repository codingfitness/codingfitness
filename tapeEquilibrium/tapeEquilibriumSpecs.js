describe('Basic Tests', function() {
  it('should return the minimum difference', function() {
    var array = [3,1,2,4,3];
    expect(tapeEquilibrium(array)).to.equal(1);
  });

  it('should work with negative numbers', function() {
    var array = [1,2,-3,4,-6,0,0,-2,-9,11];
    expect(tapeEquilibrium(array)).to.equal(2);
  });
});