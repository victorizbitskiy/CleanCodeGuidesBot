## **Классы**
### Принцип инверсии зависимостей \(DIP\)
Этот принцип закрепляет две важные вещи:
1. Модули верхнего уровня не должны зависеть от модулей низкого уровня. И те, и другие должны зависеть от абстракций.
2. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.

На первый взгляд это кажется трудным, но если вы работали с Angular.js, вы видели реализацию этого принципа в виде внедрения зависимостей \(Dependency Injection - DI\). Несмотря на то, что DIP и DI - понятия не идентичные, DIP оберегает модули верхнего уровня от деталей модулей низкого уровня, а сделать это он может через DI. Огромное преимущество DIP в уменьшении взаимосвязей между модулями. Переплетение модулей - это антипаттерн, потому что оно делает рефакторинг вашего кода гораздо более трудоемким.

Как было сказано выше, JavaScript не имеет интерфейсов, так что абстракции зависят от неявных контрактов. То есть, от методов и свойств, которые объект/класс предоставляет другому объекту/классу. В приведенном ниже примере, неявный контракт в том, что любой модуль запроса для `InventoryTracker` будет иметь метод `requestItems`.

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
    // ПЛОХО: Мы создали зависимость от конкретной реализации запроса.
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
// Построив наши зависимости извне и внедряя их, мы можем легко
// заменить наш модуль запроса на модный, например, использующий вебсокеты.
const inventoryTracker = new InventoryTracker(['apples', 'bananas'], new InventoryRequesterV2());
inventoryTracker.requestItems();
```