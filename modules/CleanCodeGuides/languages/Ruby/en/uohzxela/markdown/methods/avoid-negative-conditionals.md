## **Methods**
### Avoid negative conditionals

**Bad:**
```ruby
if !genres.blank?
  # ...
end
```

**Good:**
```ruby
unless genres.blank?
  # ...
end

# or

if genres.present?
  # ...
end
```