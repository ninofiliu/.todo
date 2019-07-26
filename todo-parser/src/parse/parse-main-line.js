/**
 * @param {string} line 
 */
const parseMainLine = line => {
    let copy = line;
    let done = null, title = null, tags = [];

    // remove list character
    copy = copy.substring(copy.match(/^\s*[-+*]\s*/)[0].length);

    // get 'done' value
    if (copy.startsWith('[ ]')) {
        done = false;
        copy = copy.substring(3).trimLeft();
    } else if(copy.startsWith('[]')) {
        done = false;
        copy = copy.substring(2).trimLeft();
    } else if(copy.startsWith('[x]')) {
        done = true;
        copy = copy.substring(3).trimLeft();
    } else {
        throw new Error(`Can't parse "${line}" as main line: list character is not followed by one of {"[]", "[ ]", "[x]"}`);
    }

    // get tags
    let match = copy.match(/`([^`]*)`\s*/);
    while(match!==null) {
        let [full, tag] = match;
        copy = copy.substring(full.length);
        tags.push(tag);
        match = copy.match(/`([^`]*)`\s*/);
    }

    // get title
    title = copy;

    return {done, title, tags};
}

module.exports = parseMainLine;