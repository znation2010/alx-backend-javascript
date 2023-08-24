const sinon = require("sinon");
const Utils = require("./utils");
const sendPaymentRequestToApi = require("./3-payment");

describe("sendPaymentRequestToApi function", function () {
    it("should correctly call Utils.calculateNumber with SUM", function () {
        const calculateNumberSpy = sinon.spy(Utils, "calculateNumber");

        sendPaymentRequestToApi(100, 20);

        sinon.assert.calledOnceWithExactly(calculateNumberSpy, "SUM", 100, 20);

        calculateNumberSpy.restore();
    });
});
