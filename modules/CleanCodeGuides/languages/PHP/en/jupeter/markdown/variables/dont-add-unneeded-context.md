## Variables

### Don't add unneeded context

### Don't add unneeded context

If your class/object name tells you something, don't repeat that in your
variable name.

**Bad:**

```php
class Car
{
    public $carMake;

    public $carModel;

    public $carColor;

    //...
}
```

**Good:**

```php
class Car
{
    public $make;

    public $model;

    public $color;

    //...
}
```
