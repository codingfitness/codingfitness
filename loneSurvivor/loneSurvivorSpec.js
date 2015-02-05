describe('loneSurvivor', function() {

    it('should find the lone survivor in a circle of 100 chairs', function() {
        var chairs = [];
        for (var i = 1; i <= 100; i++) {
            chairs.push(i);
        }
        expect(loneSurvivor(chairs, 0)).to.equal(31);
    });

    it('should find the lone survivor in a circle of 10 chairs', function() {
        var chairs = [];
        for (var i = 1; i <= 10; i++) {
            chairs.push(i);
        }
        expect(loneSurvivor(chairs, 0)).to.equal(7);
    });

    it('should find the lone survivor in a circle of 50 chairs', function() {
        var chairs = [];
        for (var i = 1; i <= 50; i++) {
            chairs.push(i);
        }
        expect(loneSurvivor(chairs, 0)).to.equal(9);
    });

    it('should find the lone survivor in a circle of 1000 chairs', function() {
        var chairs = [];
        for (var i = 1; i <= 1000; i++) {
            chairs.push(i);
        }
        expect(loneSurvivor(chairs, 0)).to.equal(154);
    });
});
