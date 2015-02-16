describe('bitcount', function() {

  it('should find the hamming weight for test case 1', function() {
    expect(bitcount(0)).to.equal(0);
  });
 
  it('should find the hamming weight for test case 2', function() {
    expect(bitcount(4)).to.equal(1);
  });

  it('should find the hamming weight for test case 3', function() {
    expect(bitcount(7)).to.equal(3);
  });

  it('should find the hamming weight for test case 4', function() {
    expect(bitcount(9)).to.equal(2);
  });

  it('should find the hamming weight for test case 5', function() {
    expect(bitcount(10)).to.equal(2);
  });

  it('should find the hamming weight for test case 6', function() {
    expect(bitcount(1234)).to.equal(5);
  });

  it('should find the hamming weight for test case 7', function() {
    expect(bitcount(512)).to.equal(1);
  });

  it('should find the hamming weight for test case 8', function() {
    expect(bitcount(33)).to.equal(2);
  });

  it('should find the hamming weight for test case 9', function() {
    expect(bitcount(1235)).to.equal(6);
  });

});