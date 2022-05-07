## **Классы**
### Принцип открытости/закрытости \(OCP\)
Как заявил Бертран Мейер, «сущности \(классы, модули, функции и т.д.\) должны быть открыты для расширения, но закрыты для модификации» \(software entities \(classes, modules, functions, etc.\) should be open for extension, but closed for modification\). Что это значит? Это значит, что вы должны давать возможность расширить функциональность сущности не изменяя существующий код.

**Плохо:**
```javascript
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'ajaxAdapter';
  }
}
class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'nodeAdapter';
  }
}
class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }
  fetch(url) {
    if (this.adapter.name === 'ajaxAdapter') {
      return makeAjaxCall(url).then((response) => {
        // transform response and return
      });
    } else if (this.adapter.name === 'httpNodeAdapter') {
      return makeHttpCall(url).then((response) => {
        // transform response and return
      });
    }
  }
}
function makeAjaxCall(url) {
  // request and return promise
}
function makeHttpCall(url) {
  // request and return promise
}
```

**Хорошо:**
```javascript
class AjaxAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'ajaxAdapter';
  }
  request(url) {
    // request and return promise
  }
}
class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'nodeAdapter';
  }
  request(url) {
    // request and return promise
  }
}
class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }
  fetch(url) {
    return this.adapter.request(url).then((response) => {
      // transform response and return
    });
  }
}
```