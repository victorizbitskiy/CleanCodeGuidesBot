## **Methods**
### Method arguments \(2 or fewer ideally\)  

Limiting the amount of method parameters is incredibly important because it
makes testing your method easier. Having more than three leads to a
combinatorial explosion where you have to test tons of different cases with
each separate argument.

One or two arguments is the ideal case, and three should be avoided if possible.
Anything more than that should be consolidated. Usually, if you have
more than two arguments then your method is trying to do too much. In cases
where it's not, most of the time a higher-level object will suffice as an
argument. Or you can pass data to the method by instance variables.

Since Ruby allows you to make objects on the fly, without a lot of class
boilerplate, you can use an object if you are finding yourself needing a
lot of arguments. The prevailing pattern in Ruby is to use a hash of arguments.

To make it obvious what properties the method expects, you can use the keyword arguments syntax \(introduced in Ruby 2.1\). This has a few advantages:

1. When someone looks at the method signature, it's immediately clear what
properties are being used.
2. If a required keyword argument is missing, Ruby will raise a useful `ArgumentError` that tells us which required argument we must include.

**Bad:**
```ruby
def create_menu(title, body)
  # ...
end
```

**Good:**
```ruby
def create_menu(title:, body:)
  # ...
end

create_menu(title: 'Foo', body: 'Bar')
```