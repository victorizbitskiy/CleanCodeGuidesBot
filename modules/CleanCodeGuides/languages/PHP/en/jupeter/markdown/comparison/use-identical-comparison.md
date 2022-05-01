## Comparison

### Use identical comparison

**Not good:**

The simple comparison will convert the string in an integer.

```php
$a = '42';
$b = 42;

if ($a != $b) {
    // The expression will always pass
}
```

The comparison `$a != $b` returns `FALSE` but in fact it's `TRUE`!
The string `42` is different than the integer `42`.

**Good:**

The identical comparison will compare type and value.

```php
$a = '42';
$b = 42;

if ($a !== $b) {
    // The expression is verified
}
```

The comparison `$a !== $b` returns `TRUE`.
