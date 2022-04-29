## Functions

### Don't write to global functions

Polluting globals is a bad practice in many languages because you could clash with another library and the user of your API would be none-the-wiser until they get an exception in production. Let's think about an example: what if you wanted to have configuration array.
You could write global function like `Config()`, but it could clash with another library that tried to do the same thing.

**Bad:**

```csharp
public Dictionary<string, string> Config()
{
    return new Dictionary<string,string>(){
        ["foo"] = "bar"
    };
}
```

**Good:**

```csharp
class Configuration
{
    private Dictionary<string, string> _configuration;

    public Configuration(Dictionary<string, string> configuration)
    {
        _configuration = configuration;
    }

    public string[] Get(string key)
    {
        return _configuration.ContainsKey(key) ? _configuration[key] : null;
    }
}
```

Load configuration and create instance of `Configuration` class

```csharp
var configuration = new Configuration(new Dictionary<string, string>() {
    ["foo"] = "bar"
});
```

And now you must use instance of `Configuration` in your application.