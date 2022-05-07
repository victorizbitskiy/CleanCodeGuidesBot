## Variables
### Use searchable names

We will read more code than we will ever write. It's important that the code we do write must be readable and searchable. By *not* naming variables that end up being meaningful for understanding our program, we hurt our readers. Make your names searchable. Tools like [ESLint](https://typescript-eslint.io/) can help identify unnamed constants.
**Bad:**
```ts
// What the heck is 86400000 for?
setTimeout(restart, 86400000);
```
**Good:**
```ts
// Declare them as capitalized named constants.
const MILLISECONDS_PER_DAY = 24 * 60 * 60 * 1000; // 86400000
setTimeout(restart, MILLISECONDS_PER_DAY);
```