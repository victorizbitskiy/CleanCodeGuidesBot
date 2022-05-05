## **Variables**
### Use searchable names

We will read more code than we will ever write. It's important that the code we
do write is readable and searchable. By *not* naming variables that end up
being meaningful for understanding our program, we hurt our readers.
Make your names searchable.

Also, instead of hardcoding values and using "magic numbers", create constants.

**Bad:**
```ruby
# What the heck is 86400 for?
status = Timeout::timeout(86_400) do
  # ...
end
```

**Good:**
```ruby
# Declare them as capitalized globals.
SECONDS_IN_A_DAY = 86_400

status = Timeout::timeout(SECONDS_IN_A_DAY) do
  # ...
end
```