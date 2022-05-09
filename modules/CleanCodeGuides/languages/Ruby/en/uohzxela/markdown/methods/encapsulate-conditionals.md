## Methods

### Encapsulate conditionals

**Bad:**

```ruby
if params[:message].present? && params[:recipient].present?
  # ...
end
```

**Good:**

```ruby
def send_message?(params)
  params[:message].present? && params[:recipient].present?
end

if send_message?(params)
  # ...
end
```
