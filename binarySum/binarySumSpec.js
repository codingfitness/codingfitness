describe('binarySum', function() {
  var convertDecimal = function (a) {
    var result = 0;
    var n = a.length;
    for (var i = 0; i<n; i++) {
      result = result + a[i] * Math.pow(2, n-1-i);
    }
    return result;
  }

  it('should find the sum for test case 1', function() {
    var a = [0];
    var b = [0];
    var c = binarySum(a,b);
    expect(convertDecimal(a) + convertDecimal(b)).to.equal(convertDecimal(c));
  });
 
  it('should find the sum for test case 2', function() {
    var a = [1, 0];
    var b = [0, 1];
    var c = binarySum(a,b);
    expect(convertDecimal(a) + convertDecimal(b)).to.equal(convertDecimal(c));
  });

  it('should find the sum for test case 3', function() {
    var a = [1, 1, 1];
    var b = [1, 1, 1];
    var c = binarySum(a,b);
    expect(convertDecimal(a) + convertDecimal(b)).to.equal(convertDecimal(c));
  });

  it('should find the sum for test case 4', function() {
    var a = [1, 1, 0, 1];
    var b = [1, 0, 1, 1];
    var c = binarySum(a,b);
    expect(convertDecimal(a) + convertDecimal(b)).to.equal(convertDecimal(c));
  });
  
  it('should find the sum for test case 5', function() {
    var a = [1];
    var b = [0];
    var c = binarySum(a,b);
    expect(convertDecimal(a) + convertDecimal(b)).to.equal(convertDecimal(c));
  });

  it('should find the sum for test case 6', function() {
    var a = [1, 0, 1, 0, 1, 0, 1, 0];
    var b = [0, 1, 0, 1, 0, 1, 0, 1];
    var c = binarySum(a,b);
    expect(convertDecimal(a) + convertDecimal(b)).to.equal(convertDecimal(c));
  });

  it('should find the sum for test case 7', function() {
    var a = [1, 0, 1, 1, 1, 0, 1, 1];
    var b = [1, 1, 1, 0, 1, 1, 1, 1];
    var c = binarySum(a,b);
    expect(convertDecimal(a) + convertDecimal(b)).to.equal(convertDecimal(c));
  });

  it('should find the sum for test case 8', function() {
    var a = [1, 1, 1, 0, 1, 1, 1, 0, 1, 1];
    var b = [1, 1, 1, 0, 1, 1, 0, 1, 1, 1];
    var c = binarySum(a,b);
    expect(convertDecimal(a) + convertDecimal(b)).to.equal(convertDecimal(c));
  });
  

});