## Functions

### Avoid type-checking \(part 2\)

**Bad:**

```csharp
public int Combine(dynamic val1, dynamic val2)
{
    int value;
    if (!int.TryParse(val1, out value) || !int.TryParse(val2, out value))
    {
        throw new Exception('Must be of type Number');
    }

    return val1 + val2;
}
```

**Good:**

```csharp
public int Combine(int val1, int val2)
{
    return val1 + val2;
}
```