## SOLID

### Don’t repeat yourself \(DRY\)

Try to observe the [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) principle.

Do your absolute best to avoid duplicate code. Duplicate code is bad because it means that there's more than one place to alter something if you need to change some logic.

Imagine if you run a restaurant and you keep track of your inventory: all your tomatoes, onions, garlic, spices, etc. If you have multiple lists that you keep this on, then all have to be updated when you serve a dish with tomatoes in them. If you only have one list, there's only one place to update!

Oftentimes you have duplicate code because you have two or more slightly different things, that share a lot in common, but their differences force you to have two or more separate functions that do much of the same things. Removing duplicate code means creating an abstraction that can handle this set of different things with just one function/module/class.

Getting the abstraction right is critical, that's why you should follow the SOLID principles laid out in the [Classes](https://github.com/thangchung/clean-code-dotnet/edit/master/README.md#classes) section. Bad abstractions can be worse than duplicate code, so be careful! Having said this, if you can make a good abstraction, do it! Don't repeat yourself, otherwise you'll find yourself updating multiple places anytime you want to change one thing.

**Bad:**

```csharp
public List<EmployeeData> ShowDeveloperList(Developers developers)
{
    foreach (var developers in developer)
    {
        var expectedSalary = developer.CalculateExpectedSalary();
        var experience = developer.GetExperience();
        var githubLink = developer.GetGithubLink();
        var data = new[] {
            expectedSalary,
            experience,
            githubLink
        };

        Render(data);
    }
}

public List<ManagerData> ShowManagerList(Manager managers)
{
    foreach (var manager in managers)
    {
        var expectedSalary = manager.CalculateExpectedSalary();
        var experience = manager.GetExperience();
        var githubLink = manager.GetGithubLink();
        var data =
        new[] {
            expectedSalary,
            experience,
            githubLink
        };

        render(data);
    }
}
```

**Good:**

```csharp
public List<EmployeeData> ShowList(Employee employees)
{
    foreach (var employee in employees)
    {
        var expectedSalary = employees.CalculateExpectedSalary();
        var experience = employees.GetExperience();
        var githubLink = employees.GetGithubLink();
        var data =
        new[] {
            expectedSalary,
            experience,
            githubLink
        };

        render(data);
    }
}
```

**Very good:**

It is better to use a compact version of the code.

```csharp
public List<EmployeeData> ShowList(Employee employees)
{
    foreach (var employee in employees)
    {
        render(new[] {
            employee.CalculateExpectedSalary(),
            employee.GetExperience(),
            employee.GetGithubLink()
        });
    }
}
```