## Functions

### Function arguments \(2 or fewer ideally\)

Limiting the amount of function parameters is incredibly important because it makes testing your function easier. Having more than three leads to a combinatorial explosion where you have to test tons of different cases with each separate argument.

Zero arguments is the ideal case. One or two arguments is ok, and three should be avoided. Anything more than that should be consolidated. Usually, if you have more than two arguments then your function is trying to do too much. In cases where it's not, most of the time a higher-level object will suffice as an argument.

**Bad:**

```csharp
public void CreateMenu(string title, string body, string buttonText, bool cancellable)
{
    // ...
}
```

**Good:**

```csharp
public class MenuConfig
{
    public string Title { get; set; }
    public string Body { get; set; }
    public string ButtonText { get; set; }
    public bool Cancellable { get; set; }
}

var config = new MenuConfig
{
    Title = "Foo",
    Body = "Bar",
    ButtonText = "Baz",
    Cancellable = true
};

public void CreateMenu(MenuConfig config)
{
    // ...
}
```
