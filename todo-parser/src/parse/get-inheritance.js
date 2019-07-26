/**
 * @param {string[][]} blocks
 * @returns {{parent: number | any, children: number[]}[]}
 */
const getInheritance = blocks => {
    const ret = blocks.map(() => ({parent: null, children: []}));
    const indents = blocks.map(([line]) => line.match(/^\s*/)[0]);

    for (let i=1; i<blocks.length; i++) {
        let j=i-1;
        while (j>=0 && indents[i].length<=indents[j].length) {
            j--;
        }
        if (j>=0 && indents[i].startsWith(indents[j])) ret[i].parent = j;
    }

    for (let i=0; i<blocks.length; i++) {
        for (let j=0; j<blocks.length; j++) {
            if (ret[j].parent == i) {
                ret[i].children.push(j);
            }
        }
    }

    return ret;
};

module.exports = getInheritance;