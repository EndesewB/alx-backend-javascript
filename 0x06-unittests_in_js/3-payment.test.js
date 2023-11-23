const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Call the function that you want to test
    sendPaymentRequestToApi(100, 20);

    // Assert that the spy was called with the correct arguments
    assert(calculateNumberSpy.calledWith('SUM', 100, 20));

    // Restore the spy to its original state
    calculateNumberSpy.restore();
  });
});
