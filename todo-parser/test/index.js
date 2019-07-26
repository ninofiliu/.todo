const assert = require('assert');
const fs = require('fs');

const tp = require('..');
const getBlocks = require('../src/parse/get-blocks');
const isMainLine = require('../src/parse/is-main-line');

const basicText = fs.readFileSync(`${__dirname}/data/basic.md`, 'utf8');
const basicExpected = require('./data/basic.expected');

describe('parse', () => {
    it('can detect main lines', () => {
        const lines = basicText.trim().split(/\r?\n/);
        assert.deepEqual(lines, basicExpected.lines);
        assert.deepEqual(lines.map(isMainLine), basicExpected.mainLines);
    })
    it('can get blocks', () => {
        assert.deepStrictEqual(
            getBlocks(basicText),
            basicExpected.blocks,
        );
    });
});