## **SOLID**
### Interface Segregation Principle \(ISP\)

Ruby doesn't have interfaces so this principle doesn't apply as strictly
as others. However, it's important and relevant even with Ruby's lack of
type system.

ISP states that "Clients should not be forced to depend upon interfaces that
they do not use." Interfaces are implicit contracts in Ruby because of
duck typing.

When a client depends upon a class that contains interfaces that the client does not use, but that other clients do use, then that client will be affected by the changes that those other clients force upon the class.

The following example is taken from [here](http://geekhmer.github.io/blog/2015/03/18/interface-segregation-principle-in-ruby/).

**Bad:**
```ruby
class Car
  # used by Driver
  def open
    # ...
  end

  # used by Driver
  def start_engine
    # ...
  end

  # used by Mechanic
  def change_engine
    # ...
  end
end

class Driver
  def drive
    @car.open
    @car.start_engine
  end
end

class Mechanic
  def do_stuff
    @car.change_engine
  end
end

```

**Good:**
```ruby
# used by Driver only
class Car
  def open
    # ...
  end

  def start_engine
    # ...
  end
end

# used by Mechanic only
class CarInternals
  def change_engine
    # ...
  end
end

class Driver
  def drive
    @car.open
    @car.start_engine
  end
end

class Mechanic
  def do_stuff
    @car_internals.change_engine
  end
end
```