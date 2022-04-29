## Functions

### Avoid flags in method parameters

A flag indicates that the method has more than one responsibility. It is best if the method only has a single responsibility. Split the method into two if a boolean parameter adds multiple responsibilities to the method.

**Bad:**

```csharp
public void CreateFile(string name, bool temp = false)
{
    if (temp)
    {
        Touch("./temp/" + name);
    }
    else
    {
        Touch(name);
    }
}
```

**Good:**

```csharp
public void CreateFile(string name)
{
    Touch(name);
}

public void CreateTempFile(string name)
{
    Touch("./temp/"  + name);
}
```