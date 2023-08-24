const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("calculateNumber function", function () {
    it("should perform SUM operation", function () {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it("should perform SUBTRACT operation", function () {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it("should perform DIVIDE operation", function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it("should handle division by zero", function () {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
});
