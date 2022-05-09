## Methods

### Avoid type-checking \(part 2\)

If you are working with basic values like strings and integers,
and you can't use polymorphism but you still feel the need to type-check,
you should consider using [contracts.ruby](https://github.com/egonSchiele/contracts.ruby). The problem with manually type-checking Ruby is that
doing it well requires so much extra verbiage that the faux "type-safety" you get
doesn't make up for the lost readability. Keep your Ruby clean, write
good tests, and have good code reviews.

**Bad:**

```ruby
def combine(val1, val2)
  if (val1.is_a?(Numeric) && val2.is_a?(Numeric)) ||
     (val1.is_a?(String) && val2.is_a?(String))
    return val1 + val2
  end

  raise 'Must be of type String or Numeric'
end
```

**Good:**

```ruby
def combine(val1, val2)
  val1 + val2
end
```
