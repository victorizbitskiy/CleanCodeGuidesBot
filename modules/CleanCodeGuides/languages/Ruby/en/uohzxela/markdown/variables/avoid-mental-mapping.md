## **Variables**
### Avoid Mental Mapping  

Explicit is better than implicit.

**Bad:**
```ruby
locations = ['Austin', 'New York', 'San Francisco']
locations.each do |l|
  do_stuff
  do_some_other_stuff
  # ...
  # ...
  # ...
  # Wait, what is `l` for again?
  dispatch(l)
end
```

**Good:**
```ruby
locations = ['Austin', 'New York', 'San Francisco']
locations.each do |location|
  do_stuff
  do_some_other_stuff
  # ...
  # ...
  # ...
  dispatch(location)
end
```