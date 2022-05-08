## Объекты и структуры данных

### Типы vs. интерфейсы

Используйте типы, когда вам может понадобиться объединение или пересечение. Используйте интерфейс, когда хотите использовать `extends` или `implements`. Однако строгого правила не существует, используйте то, что работает у вас.  
Для более подробного объяснения посмотрите это [ответы](https://stackoverflow.com/questions/37233735/typescript-interfaces-vs-types/54101543#54101543) о различиях между `type` and `interface` в TypeScript.

**Плохо:**

```ts
interface EmailConfig {
  // ...
}
interface DbConfig {
  // ...
}
interface Config {
  // ...
}
//...
type Shape = {
  // ...
}
```

**Хорошо:**

```ts
type EmailConfig = {
  // ...
}
type DbConfig = {
  // ...
}
type Config  = EmailConfig | DbConfig;
// ...
interface Shape {
  // ...
}
class Circle implements Shape {
  // ...
}
class Square implements Shape {
  // ...
}
```