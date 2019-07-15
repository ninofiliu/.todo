const assert = require('assert');
const tp = require('..');

describe('v0.0.0', () => {
    it('should export the package as expected', () => {
        assert.equal(tp.thisIsTheBeginning, 'of a great adventure');
    });
});
