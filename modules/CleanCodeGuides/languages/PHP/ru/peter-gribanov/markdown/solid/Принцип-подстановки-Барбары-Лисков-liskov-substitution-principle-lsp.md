## SOLID

### Принцип подстановки Барбары Лисков \(Liskov Substitution Principle, LSP\)

За этим пугающим термином скрывается очень простая идея. Формальное определение: "Если S — это подтип Т, то объекты типа Т могут быть заменены объектами типа S \(например, вместо объектов типа Т можно подставить объекты типа S\) без изменения каких-либо свойств программы \(корректность, задачи и т. д.\)". Ещё более пугающее определение.

Можно объяснить проще: если у вас есть родительский и дочерний классы, тогда они могут быть взаимозаменяемы без получения некорректных результатов. Рассмотрим классический пример с квадратом и прямоугольником. С точки зрения математики квадрат — это прямоугольник, но если смоделировать эту взаимосвязь is-a посредством наследования, то у вас будут проблемы.

**Плохо:**

```php
class Rectangle
{
    protected $width = 0;
    protected $height = 0;

    public function setWidth(int $width): void
    {
        $this->width = $width;
    }

    public function setHeight(int $height): void
    {
        $this->height = $height;
    }

    public function getArea(): int
    {
        return $this->width * $this->height;
    }
}

class Square extends Rectangle
{
    public function setWidth(int $width): void
    {
        $this->width = $this->height = $width;
    }

    public function setHeight(int $height): void
    {
        $this->width = $this->height = $height;
    }
}

function printArea(Rectangle $rectangle): void
{
    $rectangle->setWidth(4);
    $rectangle->setHeight(5);

    // BAD: Will return 25 for Square. Should be 20.
    echo sprintf('%s has area %d.', get_class($rectangle), $rectangle->getArea()).PHP_EOL;
}

$rectangles = [new Rectangle(), new Square()];

foreach ($rectangles as $rectangle) {
    printArea($rectangle);
}
```

**Хорошо:**

Лучший способ - разделить четырехугольники и выделить более общий подтип для обеих фигур.

Несмотря на кажущееся сходство квадрата и прямоугольника, они разные.
Квадрат имеет много общего с ромбом, а прямоугольник с параллелограммом, но они не являются подтипом.
Квадрат, прямоугольник, ромб и параллелограмм - это отдельные фигуры со своими собственными свойствами, хотя и схожими.

```php
interface Shape
{
    public function getArea(): int;
}

class Rectangle implements Shape
{
    private $width = 0;
    private $height = 0;

    public function __construct(int $width, int $height)
    {
        $this->width = $width;
        $this->height = $height;
    }

    public function getArea(): int
    {
        return $this->width * $this->height;
    }
}

class Square implements Shape
{
    private $length = 0;

    public function __construct(int $length)
    {
        $this->length = $length;
    }

    public function getArea(): int
    {
        return $this->length ** 2;
    }
}

function printArea(Shape $shape): void
{
    echo sprintf('%s has area %d.', get_class($shape), $shape->getArea()).PHP_EOL;
}

$shapes = [new Rectangle(4, 5), new Square(5)];

foreach ($shapes as $shape) {
    printArea($shape);
}
```
