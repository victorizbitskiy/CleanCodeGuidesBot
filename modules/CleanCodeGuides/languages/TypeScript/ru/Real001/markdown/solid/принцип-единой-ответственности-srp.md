## SOLID

### Принцип единой ответственности \(SRP\)

Как написано в Чистом Коде, "Должна быть лишь одна причина для изменения класса". Заманчиво представить себе класс, переполненный большим количеством функционала, словно в полет вам позволили взять всего один чемодан. Проблема в том, что ваш класс не будет концептуально связан, и вы будете часто его изменять. Очень важно минимизировать изменения в классе.
Когда вы вносите изменения в класс с огромным функционалом, тяжело отследить последствия ваших изменений.

**Плохо:**

```ts
class UserSettings {
  constructor(private readonly user: User) {
  }
  changeSettings(settings: UserSettings) {
    if (this.verifyCredentials()) {
      // ...
    }
  }
  verifyCredentials() {
    // ...
  }
}
```

**Хорошо:**

```ts
class UserAuth {
  constructor(private readonly user: User) {
  }
  verifyCredentials() {
    // ...
  }
}
class UserSettings {
  private readonly auth: UserAuth;
  constructor(private readonly user: User) {
    this.auth = new UserAuth(user);
  }
  changeSettings(settings: UserSettings) {
    if (this.auth.verifyCredentials()) {
      // ...
    }
  }
}
```
