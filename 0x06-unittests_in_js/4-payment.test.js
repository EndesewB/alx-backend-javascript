const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with the correct arguments', () => {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    // Call the function that you want to test
    sendPaymentRequestToApi(100, 20);

    // Assert that the stub is called with the correct arguments
    assert(calculateNumberStub.calledWithExactly('SUM', 100, 20));

    // Assert that console.log is called with the correct message
    assert(consoleLogSpy.calledWithExactly('The total is: 10'));

    // Restore the stub and spy to their original state
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
