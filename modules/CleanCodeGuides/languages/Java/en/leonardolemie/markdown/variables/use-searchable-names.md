## **Variables**

### Use searchable names

We will read more code than we will ever write. It's important that the code we do write is readable and searchable. By *not* naming variables that end up being meaningful for understanding our program, we hurt our readers. Make your names searchable.

**Bad:**
```java
// What the heck is 86400000 for?
setTimeout(blastOff, 86400000);

```

**Good:**
```java
// Declare them as capitalized `const` globals.
public static final int MILLISECONDS_IN_A_DAY = 86400000;

setTimeout(blastOff, MILLISECONDS_IN_A_DAY);

```