## Форматирование

### Используйте typescript алиасы
Создайте более симпатичный импорт, определив пути и свойства baseUrl в разделе compilerOptions в `tsconfig.json`.
Это позволит избежать длинных относительных путей при импорте.

**Плохо:**

```ts
import { UserService } from '../../../services/UserService';
```

**Хорошо:**

```ts
import { UserService } from '@services/UserService';
```
```js
// tsconfig.json
...
  "compilerOptions": {
    ...
    "baseUrl": "src",
    "paths": {
      "@services": ["services/*"]
    }
    ...
  }
...
```
