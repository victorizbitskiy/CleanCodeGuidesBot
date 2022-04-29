## Error Handling

### Don't use 'throw ex' in catch block

If you need to re-throw an exception after catching it, use just 'throw'
By using this, you will save the stack trace. But in the bad option below,
you will lost the stack trace.

**Bad:**

```csharp
try
{
    // Do something..
}
catch (Exception ex)
{
    // Any action something like roll-back or logging etc.
    throw ex;
}
```

**Good:**

```csharp
try
{
    // Do something..
}
catch (Exception ex)
{
    // Any action something like roll-back or logging etc.
    throw;
}
```