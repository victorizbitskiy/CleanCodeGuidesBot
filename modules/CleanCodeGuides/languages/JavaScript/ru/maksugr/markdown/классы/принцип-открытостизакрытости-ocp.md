## Классы
### Принцип открытости/закрытости \(OCP\)

Как заявил Бертран Мейер, программные сущности \(классы, модули, функции и т.д.\) должны оставаться открытыми для расширения, но закрытыми для модификации. Что это означает на практике? Принцип закрепляет, что вы должны позволить пользователям добавлять новые функциональные возможности, но без изменения существующего кода.

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
        // трансформируем ответ и возвращаем
      });
    } else if (this.adapter.name === 'httpNodeAdapter') {
      return makeHttpCall(url).then((response) => {
        // трансформируем ответ и возвращаем
      });
    }
  }
}
function makeAjaxCall(url) {
  // делаем запрос и возвращаем Промис
}
function makeHttpCall(url) {
  // делаем запрос и возвращаем Промис
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
    // делаем запрос и возвращаем Промис
  }
}
class NodeAdapter extends Adapter {
  constructor() {
    super();
    this.name = 'nodeAdapter';
  }
  request(url) {
    // делаем запрос и возвращаем Промис
  }
}
class HttpRequester {
  constructor(adapter) {
    this.adapter = adapter;
  }
  fetch(url) {
    return this.adapter.request(url).then((response) => {
      // трансформируем ответ и возвращаем
    });
  }
}
```