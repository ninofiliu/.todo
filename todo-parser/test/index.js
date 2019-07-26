const assert = require('assert');
const fs = require('fs');

const tp = require('..');
const getBlocks = require('../src/parse/get-blocks');
const parseMainLine = require('../src/parse/parse-main-line');
const parseAttributeLine = require('../src/parse/parse-attribute-line');

const basicText = fs.readFileSync(`${__dirname}/data/basic.md`, 'utf8');
const basicExpected = require('./data/basic.expected');
const mainText = fs.readFileSync(`${__dirname}/data/main.md`, 'utf8');
const mainExpected = require('./data/main.expected');
const attributeText = fs.readFileSync(`${__dirname}/data/attribute.md`, 'utf8');
const attributeExpected = require('./data/attribute.expected');

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
    it('can parse attribute lines', () => {
        const lines = attributeText.trim().split(/\r?\n/);
        assert.deepStrictEqual(
            lines.map(parseAttributeLine),
            attributeExpected,
        );
    });
});