## Functions

### Use default arguments instead of short circuiting or conditionals

**Not good:**

This is not good because `$breweryName` can be `NULL`.

```php
function createMicrobrewery($breweryName = 'Hipster Brew Co.'): void
{
    // ...
}
```

**Not bad:**

This opinion is more understandable than the previous version, but it better controls the value of the variable.

```php
function createMicrobrewery($name = null): void
{
    $breweryName = $name ?: 'Hipster Brew Co.';
    // ...
}
```

**Good:**

 You can use [type hinting](http://php.net/manual/en/functions.arguments.php#functions.arguments.type-declaration) and be sure that the `$breweryName` will not be `NULL`.

```php
function createMicrobrewery(string $breweryName = 'Hipster Brew Co.'): void
{
    // ...
}
```
