## Methods

### Don't use flags as method parameters

Flags tell your user that this method does more than one thing. Methods should do one thing. Split out your methods if they are following different code paths based on a boolean.

**Bad:**

```ruby
def create_file(name, temp)
  if temp
    fs.create("./temp/#{name}")
  else
    fs.create(name)
  end
end
```

**Good:**

```ruby
def create_file(name)
  fs.create(name)
end

def create_temp_file(name)
  create_file("./temp/#{name}")
end
```