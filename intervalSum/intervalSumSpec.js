describe('intervalSum', function() {

  it('should find the sum of lengths for test case 1', function() {
    expect(intervalSum([[-3, 5]])).to.equal(8);
  });
 
  it('should find the sum of lengths for test case 2', function() {
    expect(intervalSum([[1, 7], [10, 11]])).to.equal(7);
  });

  it('should find the sum of lengths for test case 3', function() {
    expect(intervalSum([[1, 7], [3, 11]])).to.equal(10);
  });

  it('should find the sum of lengths for test case 4', function() {
    expect(intervalSum([[1,7], [18, 20], [6, 8]])).to.equal(9);
  });

  it('should find the sum of lengths for test case 5', function() {
    expect(intervalSum([[-3, -1], [0, 5], [-5, -2], [1, 6]])).to.equal(10);
  });

  it('should find the sum of lengths for test case 6', function() {
    expect(intervalSum([[1, 3], [-100, 100], [20, 25]])).to.equal(200);
  });

  it('should find the sum of lengths for test case 7', function() {
    expect(intervalSum([[1,5], [10, 20], [1, 6], [16, 19], [5, 11]])).to.equal(19);
  });

});