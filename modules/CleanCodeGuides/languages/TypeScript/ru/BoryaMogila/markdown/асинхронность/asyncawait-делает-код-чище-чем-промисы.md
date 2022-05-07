## **Асинхронность**
### Async/Await делает код чище, чем промисы
Промисы очень хорошая альтернатива колбекам, но в ES2017/ES8 спецификации появился аsync/аwait, который предлагает ещё лучшее решение. Все, что вам нужно, это написать функцию с префиксом `async`, внутри которой вы можете писать вашу асинхронную логику императивно. аsync/аwait можно использовать прямо сейчас при помощи babel.

**Плохо**
```javascript
const requestPromise = require('request-promise');
const fsPromise = require('fs-promise');
const url = 'https://en.wikipedia.org/wiki/Robert_Cecil_Martin';
requestPromise.get(url)
  .then((response) => {
    return fsPromise.writeFile('article.html', response);
  })
  .then(() => {
    console.log('File written');
  })
  .catch((err) => {
    console.error(err);
  });
```

**Хорошо**
```javascript
const requestPromise = require('request-promise');
const fsPromise = require('fs-promise');
async function getCleanCodeArticle() {
  try {
    const url = 'https://en.wikipedia.org/wiki/Robert_Cecil_Martin';
    const response = await requestPromise.get(url);
    await fsPromise.writeFile('article.html', response);
    console.log('File written');
  } catch(err) {
    console.error(err);
  }
}
```