## Error Handling

### Don't ignore caught errors

Doing nothing with a caught error doesn't give you the ability to ever fix or react to said error. Throwing the error isn't much better as often times it can get lost in a sea of things printed to the console. If you wrap any bit of code in a `try/catch` it means you think an error may occur there and therefore you should have a plan, or create a code path, for when it occurs.

**Bad:**

```csharp
try
{
    FunctionThatMightThrow();
}
catch (Exception ex)
{
    // silent exception
}
```

**Good:**

```csharp
try
{
    FunctionThatMightThrow();
}
catch (Exception error)
{
    NotifyUserOfError(error);

    // Another option
    ReportErrorToService(error);
}
```
