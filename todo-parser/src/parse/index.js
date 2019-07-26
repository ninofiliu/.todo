const getBlocks = require('./get-blocks');
const getTasks = require('./get-tasks');

const parse = text => {
    const blocks = getBlocks(text);
    const tasks = getTasks(blocks);
    return tasks;
}

module.exports = parse;