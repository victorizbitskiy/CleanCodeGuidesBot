## **Methods**
### Avoid type-checking \(part 1\)

Ruby is dynamically typed, which means your methods can take any type of argument.
Sometimes you are bitten by this freedom and it becomes tempting to do
type-checking in your methods. There are many ways to avoid having to do this.
The first thing to consider is consistent APIs.

**Bad:**
```ruby
def travel_to_texas(vehicle)
  if vehicle.is_a?(Bicycle)
    vehicle.pedal(@current_location, Location.new('texas'))
  elsif vehicle.is_a?(Car)
    vehicle.drive(@current_location, Location.new('texas'))
  end
end
```

**Good:**
```ruby
def travel_to_texas(vehicle)
  vehicle.move(@current_location, Location.new('texas'))
end
```