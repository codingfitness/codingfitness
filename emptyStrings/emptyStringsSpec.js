describe('emptyStrings', function() {

  it('should return the index of the target value', function() {
    var array = ['at','','','','ball','','','car','','','dad','',''];
    var target = 'ball';
    expect(emptyStrings(array, target)).to.equal(4);
  });

  it('should return -1 if the value is not found', function() {
    var array = ['at','','','','ball','','','car','','','dad','',''];
    var target = 'cat';
    expect(emptyStrings(array, target)).to.equal(-1);
  });
});  