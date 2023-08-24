const expect = require("chai").expect;
const calculateNumber = require("./2-calcul_chai.js");

describe("calculateNumber function", function () {
    it("should perform SUM operation", function () {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it("should perform SUBTRACT operation", function () {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it("should perform DIVIDE operation", function () {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it("should handle division by zero", function () {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
});
