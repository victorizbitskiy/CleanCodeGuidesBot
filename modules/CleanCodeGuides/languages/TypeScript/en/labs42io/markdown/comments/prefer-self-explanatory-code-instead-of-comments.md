## Comments
### Prefer self explanatory code instead of comments

Comments are an apology, not a requirement. Good code *mostly* documents itself.
**Bad:**
```ts
// Check if subscription is active.
if (subscription.endDate > Date.now) {  }
```
**Good:**
```ts
const isSubscriptionActive = subscription.endDate > Date.now;
if (isSubscriptionActive) { /* ... */ }
```