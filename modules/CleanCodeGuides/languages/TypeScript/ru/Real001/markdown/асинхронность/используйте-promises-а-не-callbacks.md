## Асинхронность

### Используйте promises а не callbacks
Callback-функции ухудшают читаемость и приводят к чрезмерному количеству вложенности *\(ад обратных вызовов\(callback hell\)\)*. Существуют утилиты, которые преобразуют существующие функции, используя стиль callback-ов, в версию, которая возвращает промисы \(для Node.js смотрите [`util.promisify`](https://nodejs.org/dist/latest-v8.x/docs/api/util.html#util_util_promisify_original), для общего назначения смотрите [pify](https://www.npmjs.com/package/pify), [es6-promisify](https://www.npmjs.com/package/es6-promisify))

**Плохо:**

```ts
import { get } from 'request';
import { writeFile } from 'fs';
function downloadPage(url: string, saveTo: string, callback: (error: Error, content?: string) => void) {
  get(url, (error, response) => {
    if (error) {
      callback(error);
    } else {
      writeFile(saveTo, response.body, (error) => {
        if (error) {
          callback(error);
        } else {
          callback(null, response.body);
        }
      });
    }
  });
}
downloadPage('https://en.wikipedia.org/wiki/Robert_Cecil_Martin', 'article.html', (error, content) => {
  if (error) {
    console.error(error);
  } else {
    console.log(content);
  }
});
```

**Хорошо:**

```ts
import { get } from 'request';
import { writeFile } from 'fs';
import { promisify } from 'util';
const write = promisify(writeFile);
function downloadPage(url: string, saveTo: string): Promise<string> {
  return get(url)
    .then(response => write(saveTo, response));
}
downloadPage('https://en.wikipedia.org/wiki/Robert_Cecil_Martin', 'article.html')
  .then(content => console.log(content))
  .catch(error => console.error(error));  
```

Промисы поддерживают несколько вспомогательных методов, которые помогают сделать код более понятным:  
 
`Promise.resolve(value)` - Преобразуйте значение в решенный промис.
`Promise.reject(error)`  - Преобразуйте ошибку в отклоненный промис.
`Promise.all(promises)`  - Возвращает новый промис, который выполняется с массивом значений выполнения для переданных промисов или отклоняется по причине первого промиса, который выполняется с ошибкой.
`Promise.race(promises)` - Возвращает новый промис, который выполнен/отклонен с результатом/ошибкой первого выполненного промиса из массива переданных промисов.
`Promise.all` особенно полезен, когда есть необходимость запускать задачи параллельно. `Promise.race` облегчает реализацию таких вещей, как тайм-ауты для промисов.
