## **Variables**

### Use meaningful and pronounceable variable names

**Bad:**
```java
String yyyymmdstr = new SimpleDateFormat("YYYY/MM/DD").format(new Date());
```

**Good:**
```java
String currentDate = new SimpleDateFormat("YYYY/MM/DD").format(new Date());
```