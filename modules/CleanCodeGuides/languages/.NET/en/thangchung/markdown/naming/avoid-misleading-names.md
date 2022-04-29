## Naming

### Avoid Misleading Names

Name the variable to reflect what it is used for.

**Bad:**

```csharp
var dataFromDb = db.GetFromService().ToList();
```

**Good:**

```csharp
var listOfEmployee = _employeeService.GetEmployees().ToList();
```