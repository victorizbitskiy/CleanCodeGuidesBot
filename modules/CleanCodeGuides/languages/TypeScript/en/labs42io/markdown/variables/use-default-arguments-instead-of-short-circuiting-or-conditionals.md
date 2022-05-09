## Variables

### Use default arguments instead of short circuiting or conditionals  

Default arguments are often cleaner than short circuiting.

**Bad:**

```ts
function loadPages(count?: number) {
  const loadCount = count !== undefined ? count : 10;
  // ...
}
```

**Good:**

```ts
function loadPages(count: number = 10) {
  // ...
}
```