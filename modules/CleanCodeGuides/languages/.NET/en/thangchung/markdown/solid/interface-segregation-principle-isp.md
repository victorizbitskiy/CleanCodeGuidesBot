## SOLID

### Interface Segregation Principle \(ISP\)

ISP states that "Clients should not be forced to depend upon interfaces that they do not use."

A good example to look at that demonstrates this principle is for
classes that require large settings objects. Not requiring clients to setup huge amounts of options is beneficial, because most of the time they won't need all of the settings. Making them optional helps prevent having a "fat interface".

**Bad:**

```csharp
public interface IEmployee
{
    void Work();
    void Eat();
}

public class Human : IEmployee
{
    public void Work()
    {
        // ....working
    }

    public void Eat()
    {
        // ...... eating in lunch break
    }
}

public class Robot : IEmployee
{
    public void Work()
    {
        //.... working much more
    }

    public void Eat()
    {
        //.... robot can't eat, but it must implement this method
    }
}
```

**Good:**

Not every worker is an employee, but every employee is an worker.

```csharp
public interface IWorkable
{
    void Work();
}

public interface IFeedable
{
    void Eat();
}

public interface IEmployee : IFeedable, IWorkable
{
}

public class Human : IEmployee
{
    public void Work()
    {
        // ....working
    }

    public void Eat()
    {
        //.... eating in lunch break
    }
}

// robot can only work
public class Robot : IWorkable
{
    public void Work()
    {
        // ....working
    }
}
```