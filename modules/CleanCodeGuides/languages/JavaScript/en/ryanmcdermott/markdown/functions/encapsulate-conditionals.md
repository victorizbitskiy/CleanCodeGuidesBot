## **Functions**

Encapsulate conditionals  

**Bad:**
```javascript
if (fsm.state === "fetching" && isEmpty(listNode)) {
  // ...
}
``` 

**Good:**
```javascript
function shouldShowSpinner(fsm, listNode) {
  return fsm.state === "fetching" && isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
```