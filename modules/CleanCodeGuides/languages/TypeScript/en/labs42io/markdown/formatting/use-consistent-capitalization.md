## Formatting
### Use consistent capitalization

Capitalization tells you a lot about your variables, functions, etc. These rules are subjective, so your team can choose whatever they want. The point is, no matter what you all choose, just *be consistent*.

**Bad:**

```ts
const DAYS_IN_WEEK = 7;
const daysInMonth = 30;
const songs = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
const Artists = ['ACDC', 'Led Zeppelin', 'The Beatles'];
function eraseDatabase() {}
function restore_database() {}
type animal = { /* ... */ }
type Container = { /* ... */ }
```

**Good:**

```ts
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30;
const SONGS = ['Back In Black', 'Stairway to Heaven', 'Hey Jude'];
const ARTISTS = ['ACDC', 'Led Zeppelin', 'The Beatles'];
function eraseDatabase() {}
function restoreDatabase() {}
type Animal = { /* ... */ }
type Container = { /* ... */ }
```

Prefer using `PascalCase` for class, interface, type and namespace names.  
Prefer using `camelCase` for variables, functions and class members.