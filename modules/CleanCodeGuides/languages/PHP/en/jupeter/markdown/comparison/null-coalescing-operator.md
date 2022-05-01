## Comparison

### Null coalescing operator

Null coalescing is a new operator [introduced in PHP 7](https://www.php.net/manual/en/migration70.new-features.php). The null coalescing operator `??` has been added as syntactic sugar for the common case of needing to use a ternary in conjunction with `isset()`. It returns its first operand if it exists and is not `null`; otherwise it returns its second operand.

**Bad:**

```php
if (isset($_GET['name'])) {
    $name = $_GET['name'];
} elseif (isset($_POST['name'])) {
    $name = $_POST['name'];
} else {
    $name = 'nobody';
}
```

**Good:**
```php
$name = $_GET['name'] ?? $_POST['name'] ?? 'nobody';
```