const assert = require("assert");

describe("calculateNumber", function () {
it("should return the sum of the rounded numbers", function () {
const result = calculateNumber(1, 3);
assert.equal(result, 4);
});

it("should return the sum of the rounded numbers even if one of the numbers is a decimal", function () {
const result = calculateNumber(1, 3.7);
assert.equal(result, 5);
});

it("should return the sum of the rounded numbers even if both numbers are decimals", function () {
const result = calculateNumber(1.2, 3.7);
assert.equal(result, 5);
});

it("should return the sum of the rounded numbers even if one of the numbers is negative", function () {
const result = calculateNumber(-1, 3.7);
assert.equal(result, 2);
});
});
