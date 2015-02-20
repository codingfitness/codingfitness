describe('indexIdentity', function() {

  it('should find the integer for test case 1', function() {
    expect(indexIdentity([0])).to.equal(0);
  });
 
  it('should find the integer for test case 2', function() {
    expect(indexIdentity([-100, -50, 1, 50, 100])).to.equal("no");
  });

  it('should find the integer for test case 3', function() {
    expect(indexIdentity([-5, -4, 0, 2, 4])).to.equal(4);
  });

  it('should find the integer for test case 4', function() {
    expect(indexIdentity([-10, -5, 2, 10, 15])).to.equal(2);
  });

  it('should find the integer for test case 5', function() {
    expect(indexIdentity([1, 2, 3, 4, 5, 6, 7])).to.equal("no");
  });

  it('should find the integer for test case 6', function() {
    expect(indexIdentity([-2, -1, 0, 1, 3, 5, 7, 8])).to.equal(5);
  });

});