## Methods

### Method names should say what they do

Poorly named methods add to the code reviewer's cognitive load at best, and mislead the
code reviewer at worst. Strive to capture the precise intent when naming methods.

**Bad:**

```ruby
def add_to_date(date, month)
  # ...
end

date = DateTime.now

# It's hard to tell from the method name what is added
add_to_date(date, 1)
```

**Good:**

```ruby
def add_month_to_date(date, month)
  # ...
end

date = DateTime.now
add_month_to_date(date, 1)
```