## **Variables**
### Use meaningful and pronounceable variable names

**Bad:**

```javascript
const yyyymmdstr = moment().format("YYYY/MM/DD");
```

**Good:**

```javascript
const currentDate = moment().format("YYYY/MM/DD");
```
