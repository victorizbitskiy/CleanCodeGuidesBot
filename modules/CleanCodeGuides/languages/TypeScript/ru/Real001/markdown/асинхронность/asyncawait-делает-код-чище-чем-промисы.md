## Асинхронность

### Async/Await делает код чище, чем промисы

С помощью синтаксиса `async`` await` вы можете написать код, который будет намного чище и понятнее, чем промисы, связанные цепочкой. Внутри функции с префиксом ключевого слова `async` у вас есть способ указать среде выполнения JavaScript приостановить выполнение кода по ключевому слову `await` \(при использовании в промисе\).

**Плохо:**

```ts
import { get } from 'request';
import { writeFile } from 'fs';
import { promisify } from 'util';
const write = util.promisify(writeFile);
function downloadPage(url: string, saveTo: string): Promise<string> {
  return get(url).then(response => write(saveTo, response));
}
downloadPage('https://en.wikipedia.org/wiki/Robert_Cecil_Martin', 'article.html')
  .then(content => console.log(content))
  .catch(error => console.error(error));  
```

**Хорошо:**

```ts
import { get } from 'request';
import { writeFile } from 'fs';
import { promisify } from 'util';
const write = promisify(writeFile);
async function downloadPage(url: string, saveTo: string): Promise<string> {
  const response = await get(url);
  await write(saveTo, response);
  return response;
}
// где-то в асинхронной функции
try {
  const content = await downloadPage('https://en.wikipedia.org/wiki/Robert_Cecil_Martin', 'article.html');
  console.log(content);
} catch (error) {
  console.error(error);
}
```