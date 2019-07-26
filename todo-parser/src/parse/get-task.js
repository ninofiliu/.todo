const parseMainLine = require('./parse-main-line');
const parseAttributeLine = require('./parse-attribute-line');

/**
 * @param {string[]} block
 */
const getTask = block => {
    const {done, title, tags} = parseMainLine(block[0]);
    const attributes = block.filter((_,i) => i>0).map(parseAttributeLine);
    return {
        done,
        title,
        tags,
        attributes,
        parent: null,
        children: null,
    }
};

module.exports = getTask;