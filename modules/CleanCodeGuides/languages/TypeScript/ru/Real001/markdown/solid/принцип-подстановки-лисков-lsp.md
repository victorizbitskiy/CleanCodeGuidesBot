## SOLID

### Принцип подстановки Лисков \(LSP\)

Это страшный термин для очень простой концепции. Формальным языком он звучит как  "Если S является подтипом T, то объекты типа Т могут быть заменены на объекты типа S \(то есть, объекты типа S могут заменить объекты типа Т\) без влияния на важные свойства программы \(корректность, пригодность для выполнения задач и т.д.\)." Это еще более страшное определение.  
  
Лучшее объяснение заключается в том, что если у вас есть родительский и дочерний классы, то они могут использоваться как взаимозаменяемые, не приводя при этом к некорректным результатам. Это по-прежнему может сбивать с толку, так что давайте взглянем на классический пример квадрата-прямоугольника. Математически квадрат представляет собой прямоугольник, но если вы смоделируете их отношения через наследование, вы быстро наткнетесь на неприятности..

**Плохо:**

```ts
class Rectangle {
  constructor(
    protected width: number = 0,
    protected height: number = 0) {
  }
  setColor(color: string): this {
    // ...
  }
  render(area: number) {
    // ...
  }
  setWidth(width: number): this {
    this.width = width;
    return this;
  }
  setHeight(height: number): this {
    this.height = height;
    return this;
  }
  getArea(): number {
    return this.width * this.height;
  }
}
class Square extends Rectangle {
  setWidth(width: number): this {
    this.width = width;
    this.height = width;
    return this;
  }
  setHeight(height: number): this {
    this.width = height;
    this.height = height;
    return this;
  }
}
function renderLargeRectangles(rectangles: Rectangle[]) {
  rectangles.forEach((rectangle) => {
    const area = rectangle
      .setWidth(4)
      .setHeight(5)
      .getArea(); // BAD: Returns 25 for Square. Should be 20.
    rectangle.render(area);
  });
}
const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);
```

**Хорошо:**

```ts
abstract class Shape {
  setColor(color: string): this {
    // ...
  }
  render(area: number) {
    // ...
  }
  abstract getArea(): number;
}
class Rectangle extends Shape {
  constructor(
    private readonly width = 0,
    private readonly height = 0) {
    super();
  }
  getArea(): number {
    return this.width * this.height;
  }
}
class Square extends Shape {
  constructor(private readonly length: number) {
    super();
  }
  getArea(): number {
    return this.length * this.length;
  }
}
function renderLargeShapes(shapes: Shape[]) {
  shapes.forEach((shape) => {
    const area = shape.getArea();
    shape.render(area);
  });
}
const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);
```