# scn - Simple class names

Simple class names utility that is the tiniest (75 bytes) and the fastest.

> Now you can write conditional class names more easily and without getting into trouble 😼.

## How to use?

### Code Style 1: Logical operators
- Use strings for normal class names.
- Add logical operators for conditional classes.

#### Example

```js
scn('hello', null, false && 'world', undefined); // 'hello'
```
#### Real world example
```js
scn(
  'text-sm leading-4',
  isError && 'text-error bg-error-opacity',
  !isError && 'text-success bg-success-opacity'
); // 'text-sm leading-4 text-success bg-success-opacity'
```

### Code Style 2: Tuples
- Use strings for normal class names.
- Use tuples for conditional styles, if the second value is falsy, the class name will not be included.

#### Examples

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
scn('one', undefined, 'two', false, null, ['three', false]); // 'one two'
```

#### Real world example
```js
scn(
  'text-sm leading-4',
  ['text-error bg-error-opacity', isError],
  ['text-success bg-success-opacity', !isError]
); // 'text-sm leading-4 text-success bg-success-opacity'
```

### Example I love to mention
```ts
import scn from "scn";

interface IPropTypes {
  className?: string;
}

const Component = ({ className }: IPropTypes) => (
  <div className={scn("hello", className)} />
);

<Component className="world" /> // <div class="hello world" />

<Component /> // <div class="hello" />  -- No "undefined" class 🎉
```


## Bundle Size comparison
![image](https://user-images.githubusercontent.com/49946791/213785262-7a7a8cbb-b801-4eb7-af68-f58ed67fc196.png)

## License

MIT
