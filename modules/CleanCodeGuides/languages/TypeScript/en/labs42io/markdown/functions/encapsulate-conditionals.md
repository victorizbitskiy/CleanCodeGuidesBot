## Functions
### Encapsulate conditionals  

**Bad:**
```ts
if (subscription.isTrial || account.balance > 0) {
  // ...
}
```
**Good:**
```ts
function canActivateService(subscription: Subscription, account: Account) {
  return subscription.isTrial || account.balance > 0;
}

if (canActivateService(subscription, account)) {
  // ...
}
```
