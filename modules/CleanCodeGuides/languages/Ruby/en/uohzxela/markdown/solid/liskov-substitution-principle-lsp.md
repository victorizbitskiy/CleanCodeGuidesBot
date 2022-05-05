## **SOLID**
### Liskov Substitution Principle \(LSP\)

This is a scary term for a very simple concept. It's formally defined as "If S
is a subtype of T, then objects of type T may be replaced with objects of type S
\(i.e., objects of type S may substitute objects of type T\) without altering any
of the desirable properties of that program \(correctness, task performed,
etc.\)." That's an even scarier definition.

The best explanation for this is if you have a parent class and a child class,
then the base class can always be replaced by the child class without getting
incorrect results. This might still be confusing, so let's take a look at the
classic Square-Rectangle example. Mathematically, a square is a rectangle, but
if you model it using the "is-a" relationship via inheritance, you quickly
get into trouble.

**Bad:**
```ruby
class Rectangle
  def initialize
    @width = 0
    @height = 0
  end

  def color=(color)
    # ...
  end

  def render(area)
    # ...
  end

  def width=(width)
    @width = width
  end

  def height=(height)
    @height = height
  end

  def area
    @width * @height
  end
end

class Square < Rectangle
  def width=(width)
    @width = width
    @height = width
  end

  def height=(height)
    @width = height
    @height = height
  end
end

def render_large_rectangles(rectangles)
  rectangles.each do |rectangle|
    rectangle.width = 4
    rectangle.height = 5
    area = rectangle.area # BAD: Returns 25 for Square. Should be 20.
    rectangle.render(area)
  end
end

rectangles = [Rectangle.new, Rectangle.new, Square.new]
render_large_rectangles(rectangles)
```

**Good:**
```ruby
class Shape
  def color=(color)
    # ...
  end

  def render(area)
    # ...
  end
end

class Rectangle < Shape
  def initialize(width, height)
    @width = width
    @height = height
  end

  def area
    @width * @height
  end
end

class Square < Shape
  def initialize(length)
    @length = length
  end

  def area
    @length * @length
  end
end

def render_large_shapes(shapes)
  shapes.each do |shape|
    area = shape.area
    shape.render(area)
  end
end

shapes = [Rectangle.new(4, 5), Rectangle.new(4, 5), Square.new(5)]
render_large_shapes(shapes)
```