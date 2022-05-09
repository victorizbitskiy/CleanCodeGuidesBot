## Классы

### Принцип подстановки Барбары Лисков \(LSP\)

Это страшный термин для очень простой концепции. Формальным языком он звучит следующим образом: "Если S является подтипом T, то объекты типа Т могут быть заменены на объекты типа S \(то есть, объекты типа S могут заменить объекты типа Т\) без влияния на важные свойства программы \(корректность, пригодность для выполнения задач и т.д.\). И да, в итоге определение получилось еще страшней.

Лучшее объяснение заключается в том, что если у вас есть родительский и дочерний классы, то они могут использоваться как взаимозаменяемые, не приводя при этом к некорректным результатам. Это по-прежнему может сбивать с толку, так что давайте взглянем на классический пример квадрата-прямоугольника. Математически квадрат представляет собой прямоугольник, но если вы смоделируете их отношения через наследование \("является разновидностью"\), вы быстро наткнетесь на неприятности.

**Плохо:**

```javascript
class Rectangle {
  constructor() {
    this.width = 0;
    this.height = 0;
  }
  setColor(color) {
    // ...
  }
  render(area) {
    // ...
  }
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }
  setHeight(height) {
    this.width = height;
    this.height = height;
  }
}
function renderLargeRectangles(rectangles) {
  rectangles.forEach((rectangle) => {
    rectangle.setWidth(4);
    rectangle.setHeight(5);
    const area = rectangle.getArea(); // ПЛОХО: Вернет 25 для Квадрата. Должно быть 20.
    rectangle.render(area);
  });
}
const rectangles = [new Rectangle(), new Rectangle(), new Square()];
renderLargeRectangles(rectangles);
```

**Хорошо:**

```javascript
class Shape {
  setColor(color) {
    // ...
  }
  render(area) {
    // ...
  }
}
class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}
class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }
  getArea() {
    return this.length * this.length;
  }
}
function renderLargeShapes(shapes) {
  shapes.forEach((shape) => {
      const area = shape.getArea();
      shape.render(area);
    });
  }
const shapes = [new Rectangle(4, 5), new Rectangle(4, 5), new Square(5)];
renderLargeShapes(shapes);
```