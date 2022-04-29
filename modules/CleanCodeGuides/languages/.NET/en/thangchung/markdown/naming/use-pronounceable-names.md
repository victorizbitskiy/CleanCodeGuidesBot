## Naming

### Use pronounceable names

It will take time to investigate the meaning of the variables and functions when they are not pronounceable.

**Bad:**

```csharp
public class Employee
{
    public Datetime sWorkDate { get; set; } // what the heck is this
    public Datetime modTime { get; set; } // same here
}
```

**Good:**

```csharp
public class Employee
{
    public Datetime StartWorkingDate { get; set; }
    public Datetime ModificationTime { get; set; }
}
```
