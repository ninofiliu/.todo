const lines = [
    '- [ ] title 0',
    '    attr-0-0: attr 0-0 value',
    '    attr-0-1: attr 0-1 value',
    '- [ ] title 1',
    '    attr-1-0: attr 1-0 value',
    '    attr-1-1: attr 1-1 value',
];

module.exports = {
    lines,
    mainLines: [true, false, false, true, false, false],
    blocks: [
        [lines[0],lines[1],lines[2]],
        [lines[3],lines[4],lines[5]],
    ]
}