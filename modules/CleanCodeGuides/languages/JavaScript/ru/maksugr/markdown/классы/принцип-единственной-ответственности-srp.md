## Классы

### Принцип единственной ответственности \(SRP\)

Чистый код декларирует: "Не должно быть более чем одной причины для изменения класса". Заманчиво представить себе класс, переполненный большим количеством функционала, словно в поездку вам позволили взять всего один чемодан. Проблема в том, что ваш класс не будет концептуально единым и это даст ему множество причин для изменения. Имеет огромное значение свести к минимуму количество таких причин. Если сосредоточить слишком много функциональности в одном классе, а затем попытаться изменить его часть, то спрогнозировать, как это может сказаться на других модулях системы, станет крайне сложно.

**Плохо:**

```javascript
class UserSettings {
  constructor(user) {
    this.user = user;
  }
  changeSettings(settings) {
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

```javascript
class UserAuth {
  constructor(user) {
    this.user = user;
  }
  verifyCredentials() {
    // ...
  }
}
class UserSettings {
  constructor(user) {
    this.user = user;
    this.auth = new UserAuth(user);
  }
  changeSettings(settings) {
    if (this.auth.verifyCredentials()) {
      // ...
    }
  }
}
```