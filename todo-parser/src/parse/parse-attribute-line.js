/**
 * @param {string} line 
 */
const parseAttributeLine = line => {
    const match = line.match(/^\s*([^:]*)\s*:\s*/);
    if (match==null) throw new Error(`Can't parse the attribute line "${line}": doesn't match /[^:]*:.*`);
    const [full, name] = match;
    return {
        name: name.trim(),
        value: line.substring(full.length).trimRight()
    };
}

module.exports = parseAttributeLine;