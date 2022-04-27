## **Functions**

### Functions should only be one level of abstraction

When you have more than one level of abstraction your function is usually
doing too much. Splitting up functions leads to reusability and easier
testing.

**Bad:**

```javascript
function parseBetterJSAlternative(code) {
  const REGEXES = [
    // ...
  ];
  const statements = code.split(" ");
  const tokens = [];
  REGEXES.forEach(REGEX => {
    statements.forEach(statement => {
      // ...
    });
  });
  const ast = [];
  tokens.forEach(token => {
    // lex...
  });
  ast.forEach(node => {
    // parse...
  });
}
```

**Good:**

```javascript
function parseBetterJSAlternative(code) {
  const tokens = tokenize(code);
  const syntaxTree = parse(tokens);
  syntaxTree.forEach(node => {
    // parse...
  });
}
function tokenize(code) {
  const REGEXES = [
    // ...
  ];
  const statements = code.split(" ");
  const tokens = [];
  REGEXES.forEach(REGEX => {
    statements.forEach(statement => {
      tokens.push(/* ... */);
    });
  });
  return tokens;
}
function parse(tokens) {
  const syntaxTree = [];
  tokens.forEach(token => {
    syntaxTree.push(/* ... */);
  });
  return syntaxTree;
}
```