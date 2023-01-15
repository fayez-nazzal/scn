# scn

A Simple classnames utility function (103 bytes)

# Examples
```js
    scn('hello', 'world'); // 'hello world'
    scn(['hello', true], ['world', false]); // 'hello'

    // Real world example
    scn("text-sm", ["text-error", isError], ["text-success", !isError]); // 'text-sm text-success'
```

# License
MIT
