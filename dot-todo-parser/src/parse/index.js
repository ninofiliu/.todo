const getBlocks = require('./get-blocks');
const getTask = require('./get-task');
const getInheritance = require('./get-inheritance');

const parse = text => {
    const blocks = getBlocks(text);
    const tasks = blocks.map(getTask);
    const inheritance = getInheritance(blocks);
    for (let i=0; i<blocks.length; i++) {
        tasks[i].parent = inheritance[i].parent;
        tasks[i].children = inheritance[i].children;
    }
    return tasks;
}

module.exports = parse;