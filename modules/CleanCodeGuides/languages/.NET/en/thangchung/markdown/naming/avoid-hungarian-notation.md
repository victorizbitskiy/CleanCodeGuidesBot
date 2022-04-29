## Naming

### Avoid Hungarian notation

Hungarian Notation restates the type which is already present in the declaration. This is pointless since modern IDEs will identify the type.

**Bad:**

```csharp
int iCounter;
string strFullName;
DateTime dModifiedDate;
```

**Good:**

```csharp
int counter;
string fullName;
DateTime modifiedDate;
```

Hungarian Notation should also not be used in paramaters.

**Bad:**

```csharp
public bool IsShopOpen(string pDay, int pAmount)
{
    // some logic
}
```

**Good:**

```csharp
public bool IsShopOpen(string day, int amount)
{
    // some logic
}
```