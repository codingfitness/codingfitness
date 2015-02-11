describe('findDuplicate', function() {

  var checkCount = function (array, value) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
      if (array[i] === value) {
        count ++;
      }  
    }    
    if (count > 1) {
      return true;
    }
    return false;
  }

  it('should find a duplicate for test case 1', function() {
    var list = [2, 4, 4, 4, 2];
    expect(checkCount(list, findDuplicate(list))).to.equal(true);
  });
 
  it('should find a duplicate for test case 2', function() {
    var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2];
    expect(checkCount(list, findDuplicate(list))).to.equal(true);
  });

  it('should find a duplicate for test case 3', function() {
    var list = [5, 2, 3, 1, 4, 2];
    expect(checkCount(list, findDuplicate(list))).to.equal(true);
  });

  it('should find a duplicate for test case 4', function() {
    var list = [1, 2, 9, 4, 5, 9, 7, 8, 9, 2];;
    expect(checkCount(list, findDuplicate(list))).to.equal(true);
  });

  it('should find a duplicate for test case 5', function() {
    var list = [3, 1, 1, 1, 1];
    expect(checkCount(list, findDuplicate(list))).to.equal(true);
  });

});