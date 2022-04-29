## Naming

### Use Camelcase notation

Use [Camelcase Notation](https://en.wikipedia.org/wiki/Camel_case) for variable and method paramaters.

**Bad:**

```csharp
var employeephone;

public double CalculateSalary(int workingdays, int workinghours)
{
    // some logic
}
```

**Good:**

```csharp
var employeePhone;

public double CalculateSalary(int workingDays, int workingHours)
{
    // some logic
}
```
