# tscn

Simple conditional TailwindCSS class utility with built in tailwind merge support, it's tiny, and fast!

Powered by [scn](https://github.com/fayez-nazzal/scn) and [tailwind-merge](https://github.com/dcastil/tailwind-merge).

Write conditional class names more easily and without getting into trouble, plus, get your class names merged to the final class name passed, perfect for TailwindCSS users.

| If you don't use tailwind, just check [scn](https://github.com/fayez-nazzal/scn) as it's smaller (75 bytes).

## How to use?

### Code Style 1: Logical operators

- Use strings for normal class names.
- Add logical operators for conditional classes.

#### Example

```js
  import { tscn } from "tscn"

  tscn('text-sm bg-white p-2', null, false && 'bg-black', undefined, 'p-3'); // 'text-sm bg-white p-3'
```

### Code Style 2: Tuples

- Use strings for normal class names.
- Use tuples for conditional styles, if the second value is falsy, the class name will not be included.

#### Examples

```js
  tscn('text-sm b-white p-2', ['bg-black', false], ['p-3', true]); // 'text-sm bg-white p-3'
```

```js
  tscn('one', undefined, 'two', false, null, ['three', false]); // 'one two'
```

## License

MIT ~ ofc!
