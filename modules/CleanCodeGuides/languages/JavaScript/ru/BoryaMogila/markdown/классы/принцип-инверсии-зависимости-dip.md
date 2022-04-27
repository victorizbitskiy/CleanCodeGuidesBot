## **Классы**
### Принцип инверсии зависимости \(DIP\)
Этот принцип гласит две важные вещи: 

1. Модули высшего уровня не должны зависеть от модулей низшего уровня. Оба должны зависеть от абстракций.
2. В абстракциях не должно быть деталей. Детали должны быть в дочерних классах.

Сначала трудно понять этот принцип. Но если вы работали с AngularJS, вы видели реализацию этого принципа в виде Dependency Injection \(DI\). Несмотря на то, что они не являются идентичными понятиями, DIP даёт возможность отграничить модули высокого уровня от деталей модулей низкого уровня и установки их. Он может сделать это через DI. Этот принцип уменьшает связь между модулями. Если ваши модули тесно связаны, их тяжело рефакторить. 

Абстракции и есть неявными соглашениями, которые представляют интерфейсы в JavaScript. То есть методы и свойства, что объект/класс предоставляет другому объекту/классу. В приведенном ниже примере каждый экземпляр класса `InventoryTracker` будет иметь метод `requestItems`.

**Плохо:**
```javascript
class InventoryRequester {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }
  requestItem(item) {
    // ...
  }
}
class InventoryTracker {
  constructor(items) {
    this.items = items;
    // Плохо то, что мы создали зависимость от конкретной реализации запроса.
    // теперь наш метод requestItems не абстрактный и зависит от этой реализации
    this.requester = new InventoryRequester();
  }
  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}
const inventoryTracker = new InventoryTracker(['apples', 'bananas']);
inventoryTracker.requestItems();
```

**Хорошо:**
```javascript
class InventoryTracker {
  constructor(items, requester) {
    this.items = items;
    this.requester = requester;
  }
  requestItems() {
    this.items.forEach((item) => {
      this.requester.requestItem(item);
    });
  }
}
class InventoryRequesterV1 {
  constructor() {
    this.REQ_METHODS = ['HTTP'];
  }
  requestItem(item) {
    // ...
  }
}
class InventoryRequesterV2 {
  constructor() {
    this.REQ_METHODS = ['WS'];
  }
  requestItem(item) {
    // ...
  }
}
// Сформировав зависимости извне, мы можем легко
// заменить наш модуль запросов на другой, который использует вебсокеты
const inventoryTracker = new InventoryTracker(['apples', 'bananas'], new InventoryRequesterV2());
inventoryTracker.requestItems();
```