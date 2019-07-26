# .todo

## The .todo manifesto

To-do lists are simple and universal. As such, there is a need for a simple and universal file format for them. Just like Markdown files, Todo files should be readable and editable as plain text, so as not to lock them to a single platform, application, or computer. Besides being human-friendly, Todo files should also be software-friendly, and there should be tools available to parse them, convert them, and integrate them into IDEs and project management solutions.

## What are Todo files?

Todo files consist in text files with the `.todo` or `.todo.md` extension. The syntax, described in details below, is basically an extension to how people already manually write [task lists in Markdown](https://github.blog/2014-04-28-task-lists-in-all-markdown-documents/).

They allow to write down:
- Tasks lists, possibly nested
- Tasks with a completion status
- Tasks with custom tags
- Tasks with custom attribute+content

Example in [./.todo.md](./todo.md), which is the Todo file for the current project, or below:

```todo
- [x] Read the sushi recipe
- [ ] `in-progress` Buy ingredients
  - [x] Sea weed
        comment: It should be thick, not flimsy!
  - [x] Rice
  - [ ] Salmon
- [ ] Prepare the sushis
      blocked-by: task #1
```

## Getting started

Writing and reading a Todo file should be pretty easy with any editor. Simply conform to the syntax specs below.

There is an ongoing effort to build the software-level tooling that would allow Todo files to be easily integrated with existing or future project management tools, namely:

- [ ] `in-progress` [parser/converter](./dot-todo-parser)
- [ ] `in-discussion` GUI
- [ ] `in-discussion` linter

## Syntax

Todo files are valid Markdown files. All Markdown rules for lists, sub-lists, comments, code and so on can be applied here.

A Todo file consists in a list of tasks. Tasks consist of a main line followed by optional attribute lines. Example:
```todo
- [ ] Task 1
- [ ] Task 2
      some-attribute: Some value
      another-attribute: Another value
- [ ] Task 3
```

The main line starts by an indentation (a multiple of a tab or any number of spaces, but be consistent across the whole file, like in Python) that defines parent-children tasks relationships; followed by a space-joined succession of:
- A list character: `-` (recommended), `+`, or `*`
- A checkbox: `[ ]` (to do) or `[x]` (done)
- (optional) Tags: enclosed in backticks, written in kebab case
- A task title: must not start with a backtick so as not to be parsed as a tag

Example:
```todo
- [ ] `to-do` Foo
- [ ] `in-progress` `urgent` Bar
  + [x] Baz
```

Attribute lines are a concatenation of:
- Indentation: any number of space or tab, but it is recommended to use it to align all text content of a task
- Attribute name, in kebab-case
- Separator (`: `)
- Attribute content, can contain any string but must fit into the remaining line

Example:
```todo
- [ ] Foo
      bar: Lorem Ipsum
      qux-quux: dolor-sit-amet
```
