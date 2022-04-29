## Comments

### Don't leave commented out code in your codebase

Version control exists for a reason. Leave old code in your history.

**Bad:**

```csharp
doStuff();
// doOtherStuff();
// doSomeMoreStuff();
// doSoMuchStuff();
```

**Good:**

```csharp
doStuff();
```