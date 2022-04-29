## SOLID

### Single Responsibility Principle \(SRP\)

As stated in Clean Code, "There should never be more than one reason for a class to change". It's tempting to jam-pack a class with a lot of functionality, like when you can only take one suitcase on your flight. The issue with this is that your class won't be conceptually cohesive and it will give it many reasons to change. Minimizing the amount of times you need to change a class is important.

It's important because if too much functionality is in one class and you modify a piece of it, it can be difficult to understand how that will affect other dependent modules in your codebase.

**Bad:**

```csharp
class UserSettings
{
    private User User;

    public UserSettings(User user)
    {
        User = user;
    }

    public void ChangeSettings(Settings settings)
    {
        if (verifyCredentials())
        {
            // ...
        }
    }

    private bool VerifyCredentials()
    {
        // ...
    }
}
```

**Good:**

```csharp
class UserAuth
{
    private User User;

    public UserAuth(User user)
    {
        User = user;
    }

    public bool VerifyCredentials()
    {
        // ...
    }
}

class UserSettings
{
    private User User;
    private UserAuth Auth;

    public UserSettings(User user)
    {
        User = user;
        Auth = new UserAuth(user);
    }

    public void ChangeSettings(Settings settings)
    {
        if (Auth.VerifyCredentials())
        {
            // ...
        }
    }
}
```