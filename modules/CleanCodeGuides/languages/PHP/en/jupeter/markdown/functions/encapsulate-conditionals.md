## Functions

### Encapsulate conditionals

**Bad:**

```php
if ($article->state === 'published') {
    // ...
}
```

**Good:**

```php
if ($article->isPublished()) {
    // ...
}
```
