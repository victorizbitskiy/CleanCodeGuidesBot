## **Функции**
### Значения по умолчанию полей объекта устанавливайте с помощью Object.assign

**Плохо:**
```javascript
const menuConfig = {
  title: null,
  body: 'Bar',
  buttonText: null,
  cancellable: true
};
function createMenu(config) {
  config.title = config.title || 'Foo';
  config.body = config.body || 'Bar';
  config.buttonText = config.buttonText || 'Baz';
  config.cancellable = config.cancellable === undefined ? config.cancellable : true;
}
createMenu(menuConfig);
```

**Хорошо:**
```javascript
const menuConfig = {
  title: 'Order',
  // Пользователь не добавил поле 'body'
  buttonText: 'Send',
  cancellable: true
};
function createMenu(config) {
  config = Object.assign({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
  }, config);
  // config теперь равен: {title: "Order", body: "Bar", buttonText: "Send", cancellable: true}
  // ...
}
createMenu(menuConfig);
```