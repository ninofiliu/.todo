/**
 * @param {string} line 
 */
const isMainLine = line => /^[-+*]/.test(line.trim());

module.exports = isMainLine;