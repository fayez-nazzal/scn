# scn

Simple classnames utility that is tiny and fast (90 bytes)

# Examples

```js
scn('hello', 'world'); // 'hello world'
scn(['hello', true], ['world', false]); // 'hello'
scn('one', 'two', ['three', undefined]); // 'one two'

// Real world example
scn('text-sm leading-4', ['text-error bg-error-opacity', isError], ['text-success bg-success-opacity', !isError]); // 'text-sm text-success bg-success-opacity'
```

# License

MIT
