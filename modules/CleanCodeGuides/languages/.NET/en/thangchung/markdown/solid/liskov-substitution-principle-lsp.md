## SOLID

### Liskov Substitution Principle \(LSP\)

This is a scary term for a very simple concept. It's formally defined as "If S is a subtype of T, then objects of type T may be replaced with objects of type S \(i.e., objects of type S may substitute objects of type T\) without altering any of the desirable properties of that program \(correctness, task performed,
etc.\)." That's an even scarier definition.

The best explanation for this is if you have a parent class and a child class, then the base class and child class can be used interchangeably without getting incorrect results. This might still be confusing, so let's take a look at the classic Square-Rectangle example. Mathematically, a square is a rectangle, but if you model it using the "is-a" relationship via inheritance, you quickly
get into trouble.

**Bad:**

```csharp
class Rectangle
{
    protected double Width = 0;
    protected double Height = 0;

    public Drawable Render(double area)
    {
        // ...
    }

    public void SetWidth(double width)
    {
        Width = width;
    }

    public void SetHeight(double height)
    {
        Height = height;
    }

    public double GetArea()
    {
        return Width * Height;
    }
}

class Square : Rectangle
{
    public double SetWidth(double width)
    {
        Width = Height = width;
    }

    public double SetHeight(double height)
    {
        Width = Height = height;
    }
}

Drawable RenderLargeRectangles(Rectangle rectangles)
{
    foreach (rectangle in rectangles)
    {
        rectangle.SetWidth(4);
        rectangle.SetHeight(5);
        var area = rectangle.GetArea(); // BAD: Will return 25 for Square. Should be 20.
        rectangle.Render(area);
    }
}

var rectangles = new[] { new Rectangle(), new Rectangle(), new Square() };
RenderLargeRectangles(rectangles);
```

**Good:**

```csharp
abstract class ShapeBase
{
    protected double Width = 0;
    protected double Height = 0;

    abstract public double GetArea();

    public Drawable Render(double area)
    {
        // ...
    }
}

class Rectangle : ShapeBase
{
    public void SetWidth(double width)
    {
        Width = width;
    }

    public void SetHeight(double height)
    {
        Height = height;
    }

    public double GetArea()
    {
        return Width * Height;
    }
}

class Square : ShapeBase
{
    private double Length = 0;

    public double SetLength(double length)
    {
        Length = length;
    }

    public double GetArea()
    {
        return Math.Pow(Length, 2);
    }
}

Drawable RenderLargeRectangles(Rectangle rectangles)
{
    foreach (rectangle in rectangles)
    {
        if (rectangle is Square)
        {
            rectangle.SetLength(5);
        }
        else if (rectangle is Rectangle)
        {
            rectangle.SetWidth(4);
            rectangle.SetHeight(5);
        }

        var area = rectangle.GetArea();
        rectangle.Render(area);
    }
}

var shapes = new[] { new Rectangle(), new Rectangle(), new Square() };
RenderLargeRectangles(shapes);
```