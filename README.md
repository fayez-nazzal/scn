# scn

Simple classnames utility that is tiny and fast (87 bytes)

## Examples

```js
scn('hello', 'world'); // 'hello world'
```

```js
scn(['hello', true], ['world', false]); // 'hello'
```

```js
scn('one', 'two', ['three', undefined]); // 'one two'
```

```js
scn('one', 'two', ['three', null]); // 'one two'
```

```js
scn('one', 'two', ['three', '']); // 'one two three'
```

```js
scn('one', undefined, 'two', null, ['three', '']); // 'one two three'
```

### Real world example
```js
scn(
  'text-sm leading-4',
  ['text-error bg-error-opacity', isError],
  ['text-success bg-success-opacity', !isError]
); // 'text-sm leading-4 text-success bg-success-opacity'
```

## License

MIT
