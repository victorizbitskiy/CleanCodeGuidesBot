## **Variables**
### Don't add unneeded context

If your class/object name tells you something, don't repeat that in your
variable name.

**Bad:**
```ruby
car = {
  car_make: 'Honda',
  car_model: 'Accord',
  car_color: 'Blue'
}

def paint_car(car)
  car[:car_color] = 'Red'
end
```

**Good:**
```ruby
car = {
  make: 'Honda',
  model: 'Accord',
  color: 'Blue'
}

def paint_car(car)
  car[:color] = 'Red'
end
```