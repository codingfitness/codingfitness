describe('pairing', function() {
  
  it('should count combinations for two people', function() {
    var N = 2;
    expect(pairing(N)).to.equal(1);
  });

  it('should count combinations for four people', function() {
    var N = 4;
    expect(pairing(N)).to.equal(3);
  });
 
  it('should count combinations for six people', function() {
    var N = 6;
    expect(pairing(N)).to.equal(15);
  });

  it('should count combinations for eight people', function() {
    var N = 8;
    expect(pairing(N)).to.equal(105);
  });

  it('should count combinations for ten people', function() {
    var N = 10;
    expect(pairing(N)).to.equal(945);
  });

  it('should count combinations for twelve people', function() {
    var N = 12;
    expect(pairing(N)).to.equal(10395);
  });

});