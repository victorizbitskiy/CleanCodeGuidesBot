## Error Handling

### Use multiple catch block instead of if conditions

If you need to take action according to type of the exception,
you better use multiple catch block for exception handling.

**Bad:**

```csharp
try
{
    // Do something..
}
catch (Exception ex)
{

    if (ex is TaskCanceledException)
    {
        // Take action for TaskCanceledException
    }
    else if (ex is TaskSchedulerException)
    {
        // Take action for TaskSchedulerException
    }
}
```

**Good:**

```csharp
try
{
    // Do something..
}
catch (TaskCanceledException ex)
{
    // Take action for TaskCanceledException
}
catch (TaskSchedulerException ex)
{
    // Take action for TaskSchedulerException
}
```
