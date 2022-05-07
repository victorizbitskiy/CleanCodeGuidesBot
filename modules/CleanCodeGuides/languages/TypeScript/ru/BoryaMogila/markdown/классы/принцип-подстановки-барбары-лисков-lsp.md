## **Классы**
### Принцип подстановки Барбары Лисков
Это страшный термин для очень простой концепции. 

Определение:

 «Пусть q\(x\) является свойством верным относительно объектов x некоторого типа T. Тогда q\(y\) также должно быть верным для объектов y типа S, где S является подтипом типа T.»  [Wikipedia](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%BD%D1%86%D0%B8%D0%BF_%D0%BF%D0%BE%D0%B4%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BA%D0%B8_%D0%91%D0%B0%D1%80%D0%B1%D0%B0%D1%80%D1%8B_%D0%9B%D0%B8%D1%81%D0%BA%D0%BE%D0%B2) Определение ещё хуже, чем название. 

Суть заключается в том, что если у вас есть родительский и дочерний классы, то они могут взаимозаменяться без ошибок. Это по-прежнему может сбивать с толку, так что давайте посмотрим на классический пример площади прямоугольника. Математически квадрат это прямоугольник, но если вы решите эту задачу с помощью наследования, то у вас будут проблемы. Более детально про принцип можно почитать [здесь](https://habrahabr.ru/post/83269/").

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
    const area = rectangle.getArea(); // BAD: Will return 25 for Square. Should be 20.
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
  constructor() {
    super();
    this.width = 0;
    this.height = 0;
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
class Square extends Shape {
  constructor() {
    super();
    this.length = 0;
  }
  setLength(length) {
    this.length = length;
  }
  getArea() {
    return this.length * this.length;
  }
}
function renderLargeShapes(shapes) {
  shapes.forEach((shape) => {
    switch (shape.constructor.name) {
      case 'Square':
        shape.setLength(5);
        break;
      case 'Rectangle':
        shape.setWidth(4);
        shape.setHeight(5);
    }
    const area = shape.getArea();
    shape.render(area);
  });
}
const shapes = [new Rectangle(), new Rectangle(), new Square()];
renderLargeShapes(shapes);
```