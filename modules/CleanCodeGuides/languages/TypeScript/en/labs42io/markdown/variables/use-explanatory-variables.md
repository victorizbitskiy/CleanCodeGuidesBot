## Variables

### Use explanatory variables

**Bad:**

```ts
declare const users: Map<string, User>;
for (const keyValue of users) {
  // iterate through users map
}
```

**Good:**

```ts
declare const users: Map<string, User>;
for (const [id, user] of users) {
  // iterate through users map
}
```