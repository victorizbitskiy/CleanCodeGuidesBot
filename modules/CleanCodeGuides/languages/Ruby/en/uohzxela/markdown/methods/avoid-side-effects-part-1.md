## **Methods**
### Avoid Side Effects \(part 1\)

A method produces side effects if it does anything more than take values and/or
return values. A side effect could be writing to a file,
modifying some global variable, or accidentally wiring all your money to a
stranger.

Now, you do need to have side effects in a program on occasion. Like the previous
example, you might need to write to a file. What you want to do is to
centralize where you are doing this. Don't have several methods and classes
that write to a particular file. Have one service that does it. One and only one.

The main point is to avoid common pitfalls like sharing state between objects
without any structure, using mutable data types that can be written to by anything,
and not centralizing where your side effects occur. If you can do this, you will
be happier than the vast majority of other programmers.

**Bad:**
```ruby
# Global variable referenced by following method.
# If we had another method that used this name, now it'd be an array and it could break it.
$name = 'Ryan McDermott'

def split_into_first_and_last_name
  $name = $name.split(' ')
end

split_into_first_and_last_name()

puts $name # ['Ryan', 'McDermott']
```

**Good:**
```ruby
def split_into_first_and_last_name(name)
  name.split(' ')
end

name = 'Ryan McDermott'
first_and_last_name = split_into_first_and_last_name(name)

puts name # 'Ryan McDermott'
puts first_and_last_name # ['Ryan', 'McDermott']
```