var expect = require('chai').expect;
var balancePoint = require('./balancePoint');

describe('balance dat array!', function(){
    it('should balance!', function(){
      expect(balancePoint([1,2,3,2,1])).to.eql([2]);
      expect(balancePoint([1,-2,0,3,2,-3])).to.eql([0, 3]); 
      expect(balancePoint([1,-1,1,0,1,-1,1])).to.eql([3]);
      expect(balancePoint([1,2,4])).to.equal(null);
      expect(balancePoint([0,0,0])).to.eql([0,1,2]);
    });
  });
