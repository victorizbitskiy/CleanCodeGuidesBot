## Функции

### Устанавливайте объекты по умолчанию с помощью Object.assign или деструктуризации

**Плохо:**

```ts
type MenuConfig = { title?: string, body?: string, buttonText?: string, cancellable?: boolean };
function createMenu(config: MenuConfig) {
  config.title = config.title || 'Foo';
  config.body = config.body || 'Bar';
  config.buttonText = config.buttonText || 'Baz';
  config.cancellable = config.cancellable !== undefined ? config.cancellable : true;
  // ...
}
createMenu({ body: 'Bar' });
```

**Хорошо:**

```ts
type MenuConfig = { title?: string, body?: string, buttonText?: string, cancellable?: boolean };
function createMenu(config: MenuConfig) {
  const menuConfig = Object.assign({
    title: 'Foo',
    body: 'Bar',
    buttonText: 'Baz',
    cancellable: true
  }, config);
  // ...
}
createMenu({ body: 'Bar' });
```

Кроме того можно использовать деструктуризацию со значениями по умолчанию:

```ts
type MenuConfig = { title?: string, body?: string, buttonText?: string, cancellable?: boolean };
function createMenu({ title = 'Foo', body = 'Bar', buttonText = 'Baz', cancellable = true }: MenuConfig) {
  // ...
}
createMenu({ body: 'Bar' });
```

Чтобы избежать каких-либо побочных эффектов и неожиданного поведения передавая явно `undefined` или `null` вы можете сказать компилятору TypeScript чтобы он не разрешал этого.
Смотрите [`--strictNullChecks`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#--strictnullchecks) опция для TypeScript.