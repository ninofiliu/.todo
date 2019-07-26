const assert = require('assert');
const fs = require('fs');

const tp = require('..');
const getBlocks = require('../src/parse/get-blocks');
const parseMainLine = require('../src/parse/parse-main-line');

const basicText = fs.readFileSync(`${__dirname}/data/basic.md`, 'utf8');
const basicExpected = require('./data/basic.expected');
const mainText = fs.readFileSync(`${__dirname}/data/main.md`, 'utf8');
const mainExpected = require('./data/main.expected');

describe('parse', () => {
    it('can parse blocks', () => {
        assert.deepStrictEqual(
            getBlocks(basicText),
            basicExpected.blocks,
        );
    });
    it('can parse main lines', () => {
        const lines = mainText.trim().split(/\r?\n/);
        assert.deepStrictEqual(
            lines.map(parseMainLine),
            mainExpected,
        );
    });
});