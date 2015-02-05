describe('Tests', function() {
  
  it('should return an array', function() {
    expect(telegram("Coding is cool", 6) instanceof Array).to.equal(true);
    expect(telegram("desk", 5) instanceof Array).to.equal(true);
  });

  it('should return an array that makes the original sentence', function() {
    expect(telegram("One does not simply walk into Mordor", 11).join(" ")).to.equal("One does not simply walk into Mordor");
    expect(telegram("The show must go on", 8).join(" ")).to.equal("The show must go on"); 
  });  

  it('should return an array of the right length', function() {
    expect(telegram("One does not simply walk into Mordor", 11).length).to.equal(4);
    expect(telegram("The show must go on", 8).length).to.equal(3);
  });

});  