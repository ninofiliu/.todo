# dot-parser

NPM package for parsing Todo files.

Features roadmap:
- [x] parses Todo files
- [ ] `in progress` convert to JSON
- [ ] `in progress` convert to CSV/TSV
- [ ] `in progress` writes Todo file

## Getting started

### Installation

```bash
npm install dottodo-parser
```

### Parsing

Parse a Todo file into an array of tasks:

```js
const fs = require('fs');
const tp = require('todo-parser');

const todoAsText = fs.readFileSync('./todo.md');
const todo = tp.parse(todoAsText);
// Example value of 'todo':
// [
//     {
//         title: 'Some title',
//         done: false,
//         tags: ['some tag'],
//         attributes: [
//             {name: 'some name', value: 'some value'}
//         ],
//         parent: null,
//         children: []
//     }
// ]
```

Tasks have the following properties:

- `title`
- `done`: whether the prefix box is ticked (`[x]`) or not (`[ ]`)
- `tags`
- `attributes`: array of `{name: string, value: string}`
- `parent`: index, in the array, of the parent task, ie the one with a smaller indentation in the Todo file. `null` if no parent
- `children`: indices, in the array, of childrent tasks
