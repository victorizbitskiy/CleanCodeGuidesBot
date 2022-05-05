## **Methods**
### Avoid conditionals

This seems like an impossible task. Upon first hearing this, most people say,
"how am I supposed to do anything without an `if` statement?" The answer is that
you can use polymorphism to achieve the same task in many cases. The second
question is usually, "well that's great but why would I want to do that?" The
answer is a previous clean code concept we learned: a method should only do
one thing. When you have classes and methods that have `if` statements, you
are telling your user that your method does more than one thing. Remember,
just do one thing.

**Bad:**
```ruby
class Airplane
  # ...
  def cruising_altitude
    case @type
    when '777'
      max_altitude - passenger_count
    when 'Air Force One'
      max_altitude
    when 'Cessna'
      max_altitude - fuel_expenditure
    end
  end
end
```

**Good:**
```ruby
class Airplane
  # ...
end

class Boeing777 < Airplane
  # ...
  def cruising_altitude
    max_altitude - passenger_count
  end
end

class AirForceOne < Airplane
  # ...
  def cruising_altitude
    max_altitude
  end
end

class Cessna < Airplane
  # ...
  def cruising_altitude
    max_altitude - fuel_expenditure
  end
end
```