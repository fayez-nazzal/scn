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

### Example I love to mention
```ts
interface IPropTypes {
  className?: string;
}

const Component = ({ className }: IPropTypes) => (
  <div className={scn("hello", className)} />
);

<Component className="world" /> // <div class="hello world" />

<Component /> // <div class="hello" />  -- No "undefined" class 🎉
```

## License

MIT
