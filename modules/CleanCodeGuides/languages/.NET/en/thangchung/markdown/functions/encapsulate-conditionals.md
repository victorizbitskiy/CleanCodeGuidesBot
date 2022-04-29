## Functions

### Encapsulate conditionals

**Bad:**

```csharp
if (article.state == "published")
{
    // ...
}
```

**Good:**

```csharp
if (article.IsPublished())
{
    // ...
}
```
