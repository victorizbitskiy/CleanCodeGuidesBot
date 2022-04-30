## **Functions**
### Function names should say what they do

**Bad:**
```java
private void addToDate(Date date, int month){
    //..
}

Date date = new Date();

// It's hard to to tell from the method name what is added
addToDate(date, 1);
```
**Good:**
```java
private void addMonthToDate(Date date, int month){
    //..
}

Date date = new Date();
addMonthToDate(1, date);
```