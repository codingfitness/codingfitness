describe('Simple case', function() {
  
  it('should know that negative numbers cannot be squares of other integer numbers', function() {
    expect(isSquare(-1)).to.equal(false);
  });

  it('should know that fractions cannot be squares of integer numbers', function() {
    expect(isSquare(1.21)).to.equal(false);
  });  

  it('should know that 0 and 1 are squares', function() {
    expect(isSquare(0)).to.equal(true);
    expect(isSquare(1)).to.equal(true); 
  });
  
  it('should return true for squares', function() {
    expect(isSquare(4)).to.equal(true);
    expect(isSquare(81)).to.equal(true);
    expect(isSquare(10000)).to.equal(true);
  });

  it('should return false for numbers that are not squares', function() {
    expect(isSquare(11)).to.equal(false);
    expect(isSquare(29)).to.equal(false);
    expect(isSquare(9998)).to.equal(false);
  });

});