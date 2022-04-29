## Functions

### Avoid conditionals

This seems like an impossible task. Upon first hearing this, most people say, "how am I supposed to do anything without an `if` statement?" The answer is that you can use polymorphism to achieve the same task in many cases. The second question is usually, "well that's great but why would I want to do that?" The answer is a previous clean code concept we learned: a function should only do
one thing. When you have classes and functions that have `if` statements, you are telling your user that your function does more than one thing. Remember, just do one thing.

**Bad:**

```csharp
class Airplane
{
    // ...

    public double GetCruisingAltitude()
    {
        switch (_type)
        {
            case '777':
                return GetMaxAltitude() - GetPassengerCount();
            case 'Air Force One':
                return GetMaxAltitude();
            case 'Cessna':
                return GetMaxAltitude() - GetFuelExpenditure();
        }
    }
}
```

**Good:**

```csharp
interface IAirplane
{
    // ...

    double GetCruisingAltitude();
}

class Boeing777 : IAirplane
{
    // ...

    public double GetCruisingAltitude()
    {
        return GetMaxAltitude() - GetPassengerCount();
    }
}

class AirForceOne : IAirplane
{
    // ...

    public double GetCruisingAltitude()
    {
        return GetMaxAltitude();
    }
}

class Cessna : IAirplane
{
    // ...

    public double GetCruisingAltitude()
    {
        return GetMaxAltitude() - GetFuelExpenditure();
    }
}
```
