## SOLID

### Принцип открытости/закрытости \(OCP\)

Как заявил Бертран Мейер, "программные сущности \(классы, модули, функции и т.д.\) должны оставаться открытыми для расширения, но закрытыми для модификации." Что это означает на практике? Принцип закрепляет, что вы должны позволить пользователям добавлять новые функциональные возможности, но без изменения существующего кода.

**Плохо:**

```ts
class AjaxAdapter extends Adapter {
  constructor() {
    super();
  }
  // ...
}
class NodeAdapter extends Adapter {
  constructor() {
    super();
  }
  // ...
}
class HttpRequester {
  constructor(private readonly adapter: Adapter) {
  }
  async fetch<T>(url: string): Promise<T> {
    if (this.adapter instanceof AjaxAdapter) {
      const response = await makeAjaxCall<T>(url);
      // трансформируем ответ и возвращаем
    } else if (this.adapter instanceof NodeAdapter) {
      const response = await makeHttpCall<T>(url);
      // трансформируем ответ и возвращаем
    }
  }
}
function makeAjaxCall<T>(url: string): Promise<T> {
  // запрос и возвращение промиса
}
function makeHttpCall<T>(url: string): Promise<T> {
  // запрос и возвращение промиса
}
```

**Хорошо:**

```ts
abstract class Adapter {
  abstract async request<T>(url: string): Promise<T>;
  // общий код для подклассов ...
}
class AjaxAdapter extends Adapter {
  constructor() {
    super();
  }
  async request<T>(url: string): Promise<T>{
    // запрос и возвращение промиса
  }
  // ...
}
class NodeAdapter extends Adapter {
  constructor() {
    super();
  }
  async request<T>(url: string): Promise<T>{
    // запрос и возвращение промиса
  }
  // ...
}
class HttpRequester {
  constructor(private readonly adapter: Adapter) {
  }
  async fetch<T>(url: string): Promise<T> {
    const response = await this.adapter.request<T>(url);
    // трансформируем ответ и возвращаем
  }
}
```
