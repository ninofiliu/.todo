const assert = require('assert');
const fs = require('fs');

const tp = require('..');
const getBlocks = require('../src/parse/get-blocks');
const parseMainLine = require('../src/parse/parse-main-line');
const parseAttributeLine = require('../src/parse/parse-attribute-line');
const getTask = require('../src/parse/get-task');
const getInheritance = require('../src/parse/get-inheritance');

const basicText = fs.readFileSync(`${__dirname}/data/parse/basic.md`, 'utf8');
const basicExpected = require('./data/parse/basic.expected');
const mainText = fs.readFileSync(`${__dirname}/data/parse/main.md`, 'utf8');
const mainExpected = require('./data/parse/main.expected');
const attributeText = fs.readFileSync(`${__dirname}/data/parse/attribute.md`, 'utf8');
const attributeExpected = require('./data/parse/attribute.expected');
const tasksText = fs.readFileSync(`${__dirname}/data/parse/tasks.md`, 'utf8');
const tasksExpected = require('./data/parse/tasks.expected');
const inheritanceText = fs.readFileSync(`${__dirname}/data/parse/inheritance.md`, 'utf8');
const inheritanceExpected = require('./data/parse/inheritance.expected');
const fullText = fs.readFileSync(`${__dirname}/data/parse/full.md`, 'utf8');
const fullExpected = require('./data/parse/full.expected');

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
    it('can parse tasks', () => {
        const blocks = getBlocks(tasksText);
        const tasks = blocks.map(getTask);
        assert.deepStrictEqual(
            tasks,
            tasksExpected,
        );
    });
    it('can compute inheritance', () => {
        const blocks = getBlocks(inheritanceText);
        const inheritance = getInheritance(blocks);
        assert.deepStrictEqual(inheritance, inheritanceExpected);
    });
    it('can parse a file', () => {
        const parsed = tp.parse(fullText);
        assert.deepEqual(parsed, fullExpected);
    })
});
