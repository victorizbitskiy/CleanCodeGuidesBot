## **Comments**

### Don't have journal comments

Remember, use version control! There's no need for dead code, commented code, and especially journal comments. Use `git log` to get history!

**Bad:**
```java
/**
 * 2021-03-06: Renamed clean to cleanCode (DL)
 * 2020-01-03: Changed return value (LB)
 * 2019-05-12: Added clean method (DL)
 */
 cleanCode(String code) {
   return null;
 }
```

**Good:**
```java
 cleanCode(String code) {
   return null;
 }
```