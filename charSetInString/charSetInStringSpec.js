describe('charSetInString', function() {

  it('should find smallest substring in string with all characters from given set of characters', function() {
    var chars = ['a', 'b', 'c'];
    var target = 'abbcbcba';
    expect(charSetInString(chars, target)).to.equal('cba');
    
  });

  it('should find smallest substring in string with all characters from given set of characters', function() {
    
    var chars = ['a', 'b', 'c', 'd'];
    var target = 'adbbcbcba';
    expect(charSetInString(chars, target)).to.equal('adbbc');
    
  });

  it('should find smallest substring in string with all characters from given set of characters', function() {
   
    var chars = ['a', 'b', 'c', 'd'];
    var target = 'abbcbcdba';
    expect(charSetInString(chars, target)).to.equal('cdba');
  });
});
