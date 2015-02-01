describe('Basic tests', function() {
  
  it('should return an array', function() {
    expect(typeof(targetSum([1,1], 2))).to.equal("array");
  });

  it('should return an array of length 2', function() {
    expect(targetSum([1,1], 2).length).to.equal(2);
  });  

  it('should return null for short or empty arrays', function() {
    expect(targetSum([1], 2)).to.equal(null);
    expect(targetSum([], 2)).to.equal(null);
  });
});  
  
describe('Right pair of numbers', function() {  
  it('should find the right pairs', function() {
    expect(targetSum([6, 1, 5, 3], 4)).to.contain(1);
    expect(targetSum([6, 1, 5, 3], 4)).to.contain(3);
    expect(targetSum([6, 1, 5, 3], 5)).to.contain(3);
    expect(targetSum([6, 1, 5, 3], 5)).to.contain(1);
    expect(targetSum([-12, 20, 18, -5, -7, 6, 1, 5, 3], 0)).to.contain(-7);
    expect(targetSum([-12, 20, 18, -5, -7, 6, 1, 5, 3], 0)).to.contain(6);
  });


});