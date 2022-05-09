## Comments

### Only comment things that have business logic complexity.

Comments are an apology, not a requirement. Good code *mostly* documents itself.

**Bad:**

```java
// Creating a List of customer names 
List<String> customerNames = Arrays.asList('Bob', 'Linda', 'Steve', 'Mary'); 

// Using Stream findFirst() 
Optional<String> firstCustomer = customerNames.stream().findFirst(); 

// if the stream is empty, an empty 
// Optional is returned. 
if (firstCustomer.isPresent()) { 
    System.out.println(firstCustomer.get()); 
} 
else { 
    System.out.println("no value"); 
} 
```


**Good:**

```java
List<String> customerNames = Arrays.asList('Bob', 'Linda', 'Steve', 'Mary'); 

Optional<String> firstCustomer = customerNames.stream().findFirst(); 

if (firstCustomer.isPresent()) { 
    System.out.println(firstCustomer.get()); 
} 
else { 
    System.out.println("no value"); 
} 
```