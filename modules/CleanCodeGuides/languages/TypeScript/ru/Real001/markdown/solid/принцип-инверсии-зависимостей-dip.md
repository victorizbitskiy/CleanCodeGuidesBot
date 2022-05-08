## SOLID

### Принцип инверсии зависимостей \(DIP\)

Этот принцип закрепляет две важные вещи:
1. Модули высшего уровня не должны зависеть от модулей низшего уровня. Оба должны зависеть от абстракций.
2. Абстракции не должны зависеть от деталей. Детали должны зависеть от абстракций.
Сначала трудно понять этот принцип. Но если вы работали с AngularJS, вы видели реализацию этого принципа в виде Dependency Injection \(DI\). Несмотря на то, что они не являются идентичными понятиями, DIP даёт возможность отграничить модули высокого уровня от деталей модулей низкого уровня и установки их. Он может сделать это через DI. Этот принцип уменьшает связь между модулями. Если ваши модули тесно связаны, их тяжело рефакторить.
  
DIP обычно достигается использованием контейнера инверсии управления \(IoC\). Пример мощного контейнера IoC для TypeScript это [InversifyJs](https://www.npmjs.com/package/inversify)

**Плохо:**

```ts
import { readFile as readFileCb } from 'fs';
import { promisify } from 'util';
const readFile = promisify(readFileCb);
type ReportData = {
  // ..
}
class XmlFormatter {
  parse<T>(content: string): T {
    // Converts an XML string to an object T
  }
}
class ReportReader {
  // BAD: We have created a dependency on a specific request implementation.
  // We should just have ReportReader depend on a parse method: `parse`
  private readonly formatter = new XmlFormatter();
  async read(path: string): Promise<ReportData> {
    const text = await readFile(path, 'UTF8');
    return this.formatter.parse<ReportData>(text);
  }
}
// ...
const reader = new ReportReader();
await report = await reader.read('report.xml');
```

**Хорошо:**

```ts
import { readFile as readFileCb } from 'fs';
import { promisify } from 'util';
const readFile = promisify(readFileCb);
type ReportData = {
  // ..
}
interface Formatter {
  parse<T>(content: string): T;
}
class XmlFormatter implements Formatter {
  parse<T>(content: string): T {
    // Converts an XML string to an object T
  }
}
class JsonFormatter implements Formatter {
  parse<T>(content: string): T {
    // Converts a JSON string to an object T
  }
}
class ReportReader {
  constructor(private readonly formatter: Formatter) {
  }
  async read(path: string): Promise<ReportData> {
    const text = await readFile(path, 'UTF8');
    return this.formatter.parse<ReportData>(text);
  }
}
// ...
const reader = new ReportReader(new XmlFormatter());
await report = await reader.read('report.xml');
// or if we had to read a json report
const reader = new ReportReader(new JsonFormatter());
await report = await reader.read('report.json');
```