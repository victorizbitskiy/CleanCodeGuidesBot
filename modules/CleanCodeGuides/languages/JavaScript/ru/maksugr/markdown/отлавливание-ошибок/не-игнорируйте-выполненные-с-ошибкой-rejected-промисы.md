## Отлавливание ошибок

### Не игнорируйте выполненные с ошибкой \(rejected\) Промисы

Вы не должны игнорировать ошибки в Промисах по той же причине, что и в `try/catch`.

**Плохо:**

```javascript
getdata()
.then((data) => {
  functionThatMightThrow(data);
})
.catch((error) => {
  console.log(error);
});
```

**Хорошо:**

```javascript
getdata()
.then((data) => {
  functionThatMightThrow(data);
})
.catch((error) => {
  // Один из вариантов (более навязчивый, чем console.log):
  console.error(error);
  // Другой вариант:
  notifyUserOfError(error);
  // Другой вариант:
  reportErrorToService(error);
  // Или используйте все три!
});
```