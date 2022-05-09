## Comments

### Avoid positional markers

They usually just add noise. Let the functions and variable names along with the proper indentation and formatting give the visual structure to your code. 

**Bad:**

```java
////////////////////////////////////////////////////////////////////////////////
// Instantiate Order List
////////////////////////////////////////////////////////////////////////////////
List<Order> orders = new ArrayList();

////////////////////////////////////////////////////////////////////////////////
// Ship Orders that are eligible
////////////////////////////////////////////////////////////////////////////////
 
orders.filter(Order::isEligibleToShip).forEach(x -> ship(x));
```

**Good:**

```java
List<Order> orders = new ArrayList();

orders.filter(Order::isEligibleToShip).forEach(x -> ship(x));
```