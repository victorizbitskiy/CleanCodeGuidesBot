## Комментарии

### TODO комментарии

Когда вы обнаружите, что вам нужно оставить заметки в коде для некоторых последующих улучшений,
сделайте это с помощью комментариев `// TODO`. Большинство IDE имеют специальную поддержку для так что вы можете быстро просмотреть весь список todo.

Однако имейте в виду, что комментарий *TODO* не является оправданием для плохого кода. 

**Плохо:**

```ts
function getActiveSubscriptions(): Promise<Subscription[]> {
  // ensure `dueDate` is indexed.
  return db.subscriptions.find({ dueDate: { $lte: new Date() } });
}
```

**Хорошо:**

```ts
function getActiveSubscriptions(): Promise<Subscription[]> {
  // TODO: ensure `dueDate` is indexed.
  return db.subscriptions.find({ dueDate: { $lte: new Date() } });
}
```