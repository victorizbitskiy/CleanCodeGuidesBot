## Error Handling

### Provide context with exceptions

Use a descriptive error class name and a message when you raise an error. That way you know why the error occurred and you can rescue the specific type of error.

**Bad:**

```ruby
def initialize(user)
  fail unless user
  ...
end
```

**Good:**

```ruby
def initialize(user)
  fail ArgumentError, 'Missing user' unless user
  ...
end
```