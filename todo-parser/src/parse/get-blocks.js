const isMainLine = require('./is-main-line');

/**
 * @param {string} text
 * @returns {string[][]} 
 */
const getBlocks = text => {
    const blocks = [];
    const lines = text.trim().split(/\r?\n/);
    for (const line of lines) {
        if (isMainLine(line)) {
            blocks.push([line]);
        } else {
            blocks[blocks.length-1].push(line);
        }
    }
    return blocks;
};

module.exports = getBlocks;