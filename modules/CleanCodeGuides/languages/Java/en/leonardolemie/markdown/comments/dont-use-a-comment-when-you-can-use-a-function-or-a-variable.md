## **Comments**

### Don't Use a Comment When You Can Use a Function or a Variable

The best comment is no comment

**Bad:**
```java
//Check to see if order is eligible to ship
if((order.isPaid & order.isLabeled) && CUSTOMER_FLAG) {
  // ...
}
```

**Good:**
```java
if(order.isEligibleToShip()) {
  // ...
}
```