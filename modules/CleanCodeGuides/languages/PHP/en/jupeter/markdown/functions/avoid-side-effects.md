## Functions

### Avoid Side Effects \(part 1\)

A function produces a side effect if it does anything other than take a value in and
return another value or values. A side effect could be writing to a file, modifying
some global variable, or accidentally wiring all your money to a stranger.

Now, you do need to have side effects in a program on occasion. Like the previous
example, you might need to write to a file. What you want to do is to centralize where
you are doing this. Don't have several functions and classes that write to a particular
file. Have one service that does it. One and only one.

The main point is to avoid common pitfalls like sharing state between objects without
any structure, using mutable data types that can be written to by anything, and not
centralizing where your side effects occur. If you can do this, you will be happier
than the vast majority of other programmers.

**Bad:**

```php
// Global variable referenced by following function.
// If we had another function that used this name, now it'd be an array and it could break it.
$name = 'Ryan McDermott';

function splitIntoFirstAndLastName(): void
{
    global $name;

    $name = explode(' ', $name);
}

splitIntoFirstAndLastName();

var_dump($name);
// ['Ryan', 'McDermott'];
```

**Good:**

```php
function splitIntoFirstAndLastName(string $name): array
{
    return explode(' ', $name);
}

$name = 'Ryan McDermott';
$newName = splitIntoFirstAndLastName($name);

var_dump($name);
// 'Ryan McDermott';

var_dump($newName);
// ['Ryan', 'McDermott'];
```
