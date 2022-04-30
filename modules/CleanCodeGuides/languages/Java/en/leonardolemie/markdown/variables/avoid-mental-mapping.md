## **Variables**

### Avoid Mental Mapping  

Don’t force the reader of your code to translate what the variable means. Explicit is better than implicit.
**Bad:**
```java
String [] l = {"Austin", "New York", "San Francisco"};

for (int i = 0; i < l.length; i++) {
    String li = l[i];
    doStuff();
    doSomeOtherStuff();
    // ...
    // ...
    // ...
    // Wait, what is `$li` for again?
    dispatch(li);
 }
```

**Good:**

```java
String[] locations = {"Austin", "New York", "San Francisco"};

for (String location : locations) {
    doStuff();
    doSomeOtherStuff();
    // ...
    // ...
    // ...
    dispatch(location);
 }
```