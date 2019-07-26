const parseMainLine = require('./parse-main-line');
const parseAttributeLine = require('./parse-attribute-line');

/**
 * @param {string[]} block
 */
const getTask = block => {
    const [mainLine, ...attributeLines] = block;
    const {done, title, tags} = parseMainLine(mainLine);
    const attributes = attributeLines.map(parseAttributeLine);
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