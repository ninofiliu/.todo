module.exports = [
    {
        done: false,
        tags: ['tag-0'],
        title: 'title 0',
        attributes: [],
        parent: null,
        children: [],
    },
    {
        done: false,
        tags: [],
        title: 'title 1',
        attributes: [],
        parent: null,
        children: [2,3],
    },
    {
        done: false,
        tags: [],
        title: 'title 2',
        attributes: [
            {name: 'attr-0', value: 'value 0'},
            {name: 'attr-1', value: 'value 1'},
        ],
        parent: 1,
        children: [],
    },
    {
        done: false,
        tags: ['tag-1', 'tag-2'],
        title: 'title 3',
        attributes: [],
        parent: 1,
        children: [],
    },
]