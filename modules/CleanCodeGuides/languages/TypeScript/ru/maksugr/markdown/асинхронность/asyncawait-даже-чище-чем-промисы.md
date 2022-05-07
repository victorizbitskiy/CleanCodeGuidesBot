## **Асинхронность**
### Async/Await даже чище, чем Промисы
Промисы - очень чистая альтернатива callback-функциям, но ES2017/ES8 привносит async и await с еще более чистым решением. Все, что вам нужно, это функция с ключевым словом `async`, после чего вы можете писать логику императивно - без цепочек `then`. Если уже сегодня вы можете внедрить фичи ES2017/ES8, используйте `async/await`!

**Плохо:**
```javascript
require('request-promise').get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin')
  .then((response) => {
    return require('fs-promise').writeFile('article.html', response);
  })
  .then(() => {
    console.log('File written');
  })
  .catch((err) => {
    console.error(err);
  });
```

**Хорошо:**
```javascript
async function getCleanCodeArticle() {
  try {
    const response = await require('request-promise').get('https://en.wikipedia.org/wiki/Robert_Cecil_Martin');
    await require('fs-promise').writeFile('article.html', response);
    console.log('File written');
  } catch(err) {
    console.error(err);
  }
}
```
