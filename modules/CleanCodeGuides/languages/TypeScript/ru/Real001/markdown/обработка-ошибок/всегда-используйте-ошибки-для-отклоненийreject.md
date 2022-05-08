## Обработка ошибок

### Всегда используйте ошибки для отклонений\(reject\)

JavaScript и TypeScript позволяют вам делать `throw` любым объектом. Промис также может быть отклонен с любым объектом причины. Рекомендуется использовать синтаксис `throw` с типом `Error`. Это потому что ваша ошибка может быть поймана в более высоком уровне кода с синтаксисом `catch`. Было бы очень странно поймать там строковое сообщение и сделать [отладку более болезненной](https://basarat.gitbooks.io/typescript/docs/types/exceptions.html#always-use-error). По той же причине вы должны отклонять промисы с типами `Error`.

**Плохо:**

```ts
function calculateTotal(items: Item[]): number {
  throw 'Not implemented.';
}
function get(): Promise<Item[]> {
  return Promise.reject('Not implemented.');
}
```

**Хорошо:**

```ts
function calculateTotal(items: Item[]): number {
  throw new Error('Not implemented.');
}
function get(): Promise<Item[]> {
  return Promise.reject(new Error('Not implemented.'));
}
// or equivalent to:
async function get(): Promise<Item[]> {
  throw new Error('Not implemented.');
}
```

Преимущество использования типов `Error` заключается в том, что они поддерживается синтаксисом `try/catch/finally` и неявно всеми ошибками и имеют свойство `stack`, которое является очень мощным для отладки. Есть и другие альтернативы: не использовать синтаксис `throw` и вместо этого всегда возвращать пользовательские объекты ошибок. TypeScript делает это еще проще.
Рассмотрим следующий пример:

```ts
type Result<R> = { isError: false, value: R };
type Failure<E> = { isError: true, error: E };
type Failable<R, E> = Result<R> | Failure<E>;
function calculateTotal(items: Item[]): Failable<number, 'empty'> {
  if (items.length === 0) {
    return { isError: true, error: 'empty' };
  }
  // ...
  return { isError: false, value: 42 };
}
```

Для подробного объяснения этой идеи обратитесь к [оригинальному посту](https://medium.com/@dhruvrajvanshi/making-exceptions-type-safe-in-typescript-c4d200ee78e9).
