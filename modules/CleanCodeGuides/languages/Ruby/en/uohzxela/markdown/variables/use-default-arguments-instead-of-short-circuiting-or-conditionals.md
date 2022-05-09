## Variables

### Use default arguments instead of short circuiting or conditionals  

Default arguments are often cleaner than short circuiting. Be aware that if you use them, your method will only provide default values for undefined arguments. Other "falsy" values such as `false` and `nil` will not be replaced by a default value.

**Bad:**

```ruby
def create_micro_brewery(name)
  brewery_name = name || 'Hipster Brew Co.'
  # ...
end
```

**Good:**

```ruby
def create_micro_brewery(brewery_name = 'Hipster Brew Co.')
  # ...
end
```