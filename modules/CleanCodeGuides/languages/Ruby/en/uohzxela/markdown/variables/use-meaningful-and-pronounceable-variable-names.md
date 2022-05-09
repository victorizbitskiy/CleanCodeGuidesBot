## Variables

### Use meaningful and pronounceable variable names

**Bad:**

```ruby
yyyymmdstr = Time.now.strftime('%Y/%m/%d')
```

**Good:**

```ruby
current_date = Time.now.strftime('%Y/%m/%d')
```